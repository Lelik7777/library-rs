import { addClickCardBtnHandler, addClickInputRadioHandler } from "./js/favorites";
import { changePersonIcon } from "./js/header";
import { implementSticky } from "./js/implementStickyFavorites";
import "./js/libraryCards";
import {
  addClickFormButtonHandler,
  addClickSignBtnCardsHandler,
  addClickLogInBtnCardsHandler,
} from "./js/libraryCards";
import { addHamburgerClickHandler, addNavItemsClickHandler, addOverlayClickHandler } from "./js/popUp";
import {
  addClickBodyHandler,
  addClickLogInProfileHandler,
  addClickProfileIconHandler,
  addClickRegisterHandler,
  addClickBtnCloseHandler,
  addClickOverlayModalHandler,
  addClickLoginBtnRegisterHandler,
  addClickRegisterBtnLoginHandler,
} from "./js/profile";
import { addClickRegisterSignUpBtnHandler, sendData } from "./js/register";
import { addClickArrowLeftHandler, addClickArrowRightHandler, addSliderBtnsHandler } from "./js/slider";
import { UTILS } from "./js/utils";

const startSticky = 1700;
const endSticky = 4000;
// alert(
//   "Приветствую тебя 👋, проверяющий! Работа над реализацией еще продолжается 👨‍💻. Если есть возможность 🙏,то проверь в четверг,чтобы сейчас не тратить время. В остальном поступай так,как пожелаешь. Хорошего и продуктивного дня!😉"
// );
window.addEventListener("load", function () {
  let obj;
  let data = this.localStorage.getItem("form");
  if (!data || data !== "undefined") {
    obj = JSON.parse(data);
  } else {
    obj = null;
  }

  if (this.localStorage.getItem("form") !== "null") {
    const dataFromStorage = this.localStorage.getItem("form");
    if (!dataFromStorage === "undefined") data = JSON.parse(dataFromStorage);
  }

  addHamburgerClickHandler();
  addOverlayClickHandler();
  addNavItemsClickHandler();
  addSliderBtnsHandler();
  addClickArrowLeftHandler();
  addClickArrowRightHandler();
  addClickProfileIconHandler();
  addClickBodyHandler();
  addClickRegisterHandler();
  addClickLoginBtnRegisterHandler();
  addClickRegisterBtnLoginHandler();
  addClickBtnCloseHandler();
  addClickOverlayModalHandler();
  addClickFormButtonHandler();
  addClickSignBtnCardsHandler();
  addClickLogInBtnCardsHandler();
  sendData(addClickRegisterSignUpBtnHandler);
  changePersonIcon(obj);
  //for log in in header
  addClickLogInProfileHandler();
  addClickCardBtnHandler();
  addClickInputRadioHandler();

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
