import { changePersonIcon } from "./js/header";
import { implementSticky } from "./js/implementStickyFavorites";
import "./js/libraryCards";
import { addClickFormButtonHandler, addClickSignBtnHandler } from "./js/libraryCards";
import { addHamburgerClickHandler, addNavItemsClickHandler, addOverlayClickHandler } from "./js/popUp";
import { addClickBodyHandler, addClickProfileIconHandler, addClickRegisterHandler } from "./js/profile";
import {
  addClickBtnCloseHandler,
  addClickOverlayModalHandler,
  addClickRegisterSignUpBtnHandler,
  sendData,
} from "./js/register";
import { addClickArrowLeftHandler, addClickArrowRightHandler, addSliderBtnsHandler } from "./js/slider";
import { UTILS } from "./js/utils";

const startSticky = 1700;
const endSticky = 4000;

window.addEventListener("load", function () {
  const data = checkData();
  console.log(data);
  addHamburgerClickHandler();
  addOverlayClickHandler();
  addNavItemsClickHandler();
  addSliderBtnsHandler();
  addClickArrowLeftHandler();
  addClickArrowRightHandler();
  addClickProfileIconHandler();
  addClickBodyHandler();
  addClickRegisterHandler();
  addClickBtnCloseHandler();
  addClickOverlayModalHandler();
  addClickFormButtonHandler();
  addClickSignBtnHandler();
  sendData(addClickRegisterSignUpBtnHandler);
  changePersonIcon(data)

  // document.querySelector('.log-in').addEventListener('click',function(){
  //   changePersonIcon(data,false)
  // })

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

const checkData = () => {
  return JSON.parse(window.localStorage.getItem("form"));
};
