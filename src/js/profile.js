import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _btnsClose = UTILS.getElementsFromDom(".overlay__modal .btn_close");
const _profileIcon = UTILS.getElementFromDom(".profile__icon");
const _profile = UTILS.getElementFromDom(".profile");
const _profileSecond = UTILS.getElementFromDom(".profile__second");
const _overlayModal = UTILS.getElementFromDom(".overlay__modal");
const _modalRegister = UTILS.getElementFromDom(".modal__register");
const _profileFist = UTILS.getElementFromDom(".profile__first");
const _modalLogin = UTILS.getElementFromDom(".modal__login");
const _linkRegister = UTILS.getElementFromDom(".register__link");
const _linkLogin = UTILS.getElementFromDom(".login__link");

const addClickProfileIconHandler = () => {
  _profileIcon.addEventListener(CONSTANTS.CLICK, function () {
    _profile.classList.toggle(CONSTANTS.OPEN);
  });

};

//for closing profile menu
const addClickBodyHandler = () => {
  document.body.addEventListener(CONSTANTS.CLICK, function (e) {
    if (
      _profile.classList.contains(CONSTANTS.OPEN) &&
      !e.target.classList.contains("profile__icon") &&
      !e.target.closest(".profile")
    ) {
      _profile.classList.remove(CONSTANTS.OPEN);
    }
  });
};
//open register modal window
const addClickRegisterHandler = () => {
  _profileSecond.addEventListener(CONSTANTS.CLICK, function (e) {
    _overlayModal.classList.add(CONSTANTS.OPEN);
    _modalRegister.classList.add(CONSTANTS.OPEN);
    _profile.classList.remove(CONSTANTS.OPEN);
  });
};
//todo open modal profile window
//open log in window
const addClickLogInProfileHandler = (login) => {
  _profileFist.addEventListener(CONSTANTS.CLICK, function (e) {
if (login) {

}else{
  _modalLogin.classList.add(CONSTANTS.OPEN);
  _overlayModal.classList.add(CONSTANTS.OPEN);
  _profile.classList.remove(CONSTANTS.OPEN);
}

  });
};

//handlers for closing register and log in modal windows
const addClickBtnCloseHandler = () => {
  _btnsClose.forEach((btn) => {
    btn.addEventListener(CONSTANTS.CLICK, function (e) {
      _overlayModal.classList.remove(CONSTANTS.OPEN);
      _modalRegister.classList.remove(CONSTANTS.OPEN);
      _modalLogin.classList.remove(CONSTANTS.OPEN);
    });
  });
};

const addClickOverlayModalHandler = () => {
  _overlayModal.addEventListener(CONSTANTS.CLICK, function (e) {
    if (!e.target.closest(".modal__register") && !e.target.closest(".modal__login")) {
      this.classList.remove(CONSTANTS.OPEN);
      _modalRegister.classList.remove(CONSTANTS.OPEN);
      _modalLogin.classList.remove(CONSTANTS.OPEN);
    }
  });
};

//open  login modal  window in register window
const addClickLoginBtnRegisterHandler = () => {
  _linkRegister.addEventListener(CONSTANTS.CLICK, function (e) {
    e.preventDefault();

    _modalRegister.classList.remove(CONSTANTS.OPEN);
    _modalLogin.classList.add(CONSTANTS.OPEN);
  });
};

//open register modal window in login window
const addClickRegisterBtnLoginHandler = () => {
  _linkLogin.addEventListener(CONSTANTS.CLICK, function (e) {
    e.preventDefault();

    _modalRegister.classList.add(CONSTANTS.OPEN);
    _modalLogin.classList.remove(CONSTANTS.OPEN);
  });
};
const changeMenuProfile = (login) => {
  if(login){
    _profileFist.textContent = "My profile";
    _profileSecond.textContent = "Log out"
  }
  else{
    _profileFist.textContent = "Login in";
    _profileSecond.textContent = "Register";

  }

};

export {
  addClickProfileIconHandler,
  addClickBodyHandler,
  addClickRegisterHandler,
  addClickLogInProfileHandler,
  addClickBtnCloseHandler,
  addClickOverlayModalHandler,
  addClickLoginBtnRegisterHandler,
  addClickRegisterBtnLoginHandler,
  changeMenuProfile,
};
