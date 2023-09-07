import { addHamburgerClickHandler, addNavItemsClickHandler, addOverlayClickHandler } from "./js/pop-up";
import { addClickArrowLeftHandler, addClickArrowRightHandler, addSliderBtnsHandler } from "./js/slider";
import { UTILS } from "./js/utils";

window.addEventListener("load", function () {
  addHamburgerClickHandler();
  addOverlayClickHandler();
  addNavItemsClickHandler();
  addSliderBtnsHandler();
  addClickArrowLeftHandler();
  addClickArrowRightHandler();

  //sticky favorites
  if(window.innerWidth<769){
    window.onscroll = function () {
      implementSticky();
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
  if(window.innerWidth<769){
    window.onscroll = function () {
      implementSticky();
    };
  }
});





function implementSticky() {

  if (window.pageYOffset >1700&&window.pageYOffset<4000) {
    UTILS.getElementFromDom(".favorites__inputs").classList.add("sticky");
    console.log("add sticky");
  }else {
    UTILS.getElementFromDom('.favorites__inputs').classList.remove("sticky");
    console.log(window.pageYOffset);
  }
}
