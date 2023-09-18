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
import { addClickBuyBtnCardHandler, addClickCloseBtnModalCardHandler } from "./js/modal_card";
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

//
const _visitNumbers = UTILS.getElementsFromDom(".visit__numbers");
const _booksNumber=UTILS.getElementsFromDom('.books-number');
const _booksList=UTILS.getElementFromDom('.books__list');
const startSticky = 1700;
const endSticky = 4000;
let login = false;

window.addEventListener("load", function () {
  let data=setData();

  if (data) {
    login = data.login;
    setDataForProfile(data);
  } else {
    login = data?.login || false;
  }
  //popUp.js
  addHamburgerClickHandler();
  addOverlayClickHandler();
  addNavItemsClickHandler();

  //slider.js
  addSliderBtnsHandler();
  addClickArrowLeftHandler();
  addClickArrowRightHandler();

  //profile.js
  addClickProfileIconHandler(login);
  addClickBodyHandler();
  addClickRegisterHandler(login);
  addClickLoginBtnRegisterHandler();
  addClickRegisterBtnLoginHandler();
  changeMenuProfile(login, data);
  addClickBtnCloseHandler();
  addClickOverlayModalHandler();
  addClickCopyIconHandler();
  addClickLogInProfileHandler(login, data);

  //libraryCards.js
  addClickFormButtonHandler(data);
  addClickSignBtnCardsHandler();
  addClickLogInBtnCardsHandler();
  closeBtnOpenIcons(login);
  changeInputsPlaceHolder(login, data);
  closeButtons(login);
  addClickProfileBtnCards();
  changeTextReaderCard(login);

  //register.js
  sendData(addClickRegisterSignUpBtnHandler);

  //header.js
  changePersonIcon(data, login);

  //favorites.js
  addClickCardBtnHandler(login);
  addClickInputRadioHandler();

  //login.js
  addClickBtnSignUpLoginHandler();

  //modal_card.js
  addClickBuyBtnCardHandler();
  addClickCloseBtnModalCardHandler();

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

function setData() {
  let data;
  let json = window.localStorage.getItem("form");
  if (json || json !== "undefined") {
    data = JSON.parse(json);
  } else {
    data = null;
  }
  return data;
}
//todo fix bug on gh pages with this function
function setDataForProfile(data) {
  console.log(_visitNumbers);
  if(data!=='undefined'){
    _visitNumbers.forEach(node=>node.textContent = data.visits);
    _booksNumber.forEach(node=>node.textContent=data.countBooks);
    data?.books.forEach(book=>{
      const li=document.createElement('li');
      li.textContent=book;
      _booksList.append(li);
    })
  }

}
