import { addClickCardBtnHandler, addClickInputRadioHandler } from "./js/favorites";
import { changePersonIcon } from "./js/header";
import { implementSticky } from "./js/implementStickyFavorites";
import "./js/libraryCards";
import {
  addClickFormButtonHandler,
  addClickLogInBtnCardsHandler,
  addClickProfileBtnCards,
  addClickSignBtnCardsHandler,
  changeInputsPlaceHolder,
  changeTextReaderCard,
  closeBtnOpenIcons,
  closeButtons,
} from "./js/libraryCards";
import { addClickBtnSignUpLoginHandler } from "./js/login";
import { addHamburgerClickHandler, addNavItemsClickHandler, addOverlayClickHandler } from "./js/popUp";
import {
  addClickBodyHandler,
  addClickBtnCloseHandler,
  addClickCopyIconHandler,
  addClickLogInProfileHandler,
  addClickLoginBtnRegisterHandler,
  addClickOverlayModalHandler,
  addClickProfileIconHandler,
  addClickRegisterBtnLoginHandler,
  addClickRegisterHandler,
  changeMenuProfile,
} from "./js/profile";
import { addClickRegisterSignUpBtnHandler, sendData } from "./js/register";
import { addClickArrowLeftHandler, addClickArrowRightHandler, addSliderBtnsHandler } from "./js/slider";
import { UTILS } from "./js/utils";



const _visitNumbers=UTILS.getElementFromDom(".icons__container .visit__numbers");
const startSticky = 1700;
const endSticky = 4000;
let login = false;
// alert(
//   "Приветствую тебя 👋, проверяющий! Работа над реализацией еще продолжается 👨‍💻. Если есть возможность 🙏,то проверь в четверг,чтобы сейчас не тратить время. В остальном поступай так,как пожелаешь. Хорошего и продуктивного дня!😉"
// );
window.addEventListener("load", function () {
  let obj;
  let data = this.localStorage.getItem("form");
  console.log(data);
  if (data || data !== "undefined") {
    obj = JSON.parse(data);
    _visitNumbers.textContent=obj.visits;
  } else {
    obj = null;
  }

  if (obj) {
    login =obj.login;
  } else {
    login = obj?.login||false;
  }

  // if (this.localStorage.getItem("form") !== "null") {
  //   const dataFromStorage = this.localStorage.getItem("form");
  //   if (!dataFromStorage === "undefined") data = JSON.parse(dataFromStorage);
  // }

  addHamburgerClickHandler();
  addOverlayClickHandler();
  addNavItemsClickHandler();
  addSliderBtnsHandler();
  addClickArrowLeftHandler();
  addClickArrowRightHandler();
  addClickProfileIconHandler(login);
  addClickBodyHandler();
  addClickRegisterHandler(login);
  addClickLoginBtnRegisterHandler();
  addClickRegisterBtnLoginHandler();
  changeMenuProfile(login, obj);
  addClickBtnCloseHandler();
  addClickOverlayModalHandler();
  addClickFormButtonHandler(obj);
  addClickSignBtnCardsHandler();
  addClickLogInBtnCardsHandler();
  closeBtnOpenIcons(login);
  changeInputsPlaceHolder(login, obj);
  closeButtons(login);
  addClickProfileBtnCards();
  changeTextReaderCard(login);
  sendData(addClickRegisterSignUpBtnHandler);
  changePersonIcon(obj, login);
  //for log in in header
  addClickLogInProfileHandler(login, obj);
  addClickCardBtnHandler(login);
  addClickInputRadioHandler();
  addClickCopyIconHandler();
  addClickBtnSignUpLoginHandler();

  //sticky favorites
  if (window.innerWidth < 769) {
    window.onscroll = function () {
      implementSticky(startSticky, endSticky);
    };
  }

  console.log("login:", login);
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
