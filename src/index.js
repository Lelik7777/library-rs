import { implementSticky } from "./js/implementStickyFavorites";
import { addHamburgerClickHandler, addNavItemsClickHandler, addOverlayClickHandler } from "./js/pop-up";
import { addClickArrowLeftHandler, addClickArrowRightHandler, addSliderBtnsHandler } from "./js/slider";
import { UTILS } from "./js/utils";
import "./js/library_card";
import { addClickProfileIconHandler } from "./js/profile";

const startSticky = 1700;
const endSticky = 4000;

window.addEventListener("load", function () {
  addHamburgerClickHandler();
  addOverlayClickHandler();
  addNavItemsClickHandler();
  addSliderBtnsHandler();
  addClickArrowLeftHandler();
  addClickArrowRightHandler();
  addClickProfileIconHandler();

  //sticky favorites
  if (window.innerWidth < 769) {
    window.onscroll = function () {
      implementSticky(startSticky, endSticky);
    };
  }
});

window.addEventListener("resize", function () {
  const arr = ["one", "two", "two_2", "three", "three_3", "four", "five"];
  const _sliderContainer = UTILS.getElementFromDom(".slider__container");
  const _sliderBtns = UTILS.getElementsFromDom(".slider__buttons .button__container");

  _sliderContainer.classList.remove(...arr);
  _sliderContainer.classList.add("one");
  _sliderBtns.forEach((el) => {
    el.querySelector(".button_round").classList.remove("active");
  });
  _sliderBtns[0].querySelector(".button_round").classList.add("active");

  //sticky for favorites
  if (window.innerWidth < 769) {
    window.onscroll = function () {
      implementSticky(startSticky, endSticky);
    };
  }
});
