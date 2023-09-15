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
const _profileModal = UTILS.getElementFromDom(".modal__profile");
const _profilePhoto = UTILS.getElementFromDom(".profile__photo");
const _profileName = UTILS.getElementFromDom(".profile__name");
const _cardNumber = UTILS.getElementFromDom(".profile__card .card__number");
const _cardIcon = UTILS.getElementFromDom(".profile__card .card__icon");
const _profileTitle = UTILS.getElementFromDom(".profile .profile__title");
const _visitNumbers=UTILS.getElementFromDom(".icons__container .visit__numbers");

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
const addClickRegisterHandler = (login) => {
  _profileSecond.addEventListener(CONSTANTS.CLICK, function (e) {
    if (login) {
      const data = JSON.parse(window.localStorage.getItem("form"));
      data.login = false;
      console.log(data);
      window.localStorage.setItem("form", JSON.stringify(data));
      console.log(window.localStorage.getItem("form"));
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else {
      _overlayModal.classList.add(CONSTANTS.OPEN);
      _modalRegister.classList.add(CONSTANTS.OPEN);
      _profile.classList.remove(CONSTANTS.OPEN);
    }
  });
};
//todo open modal profile window
//open log in window
const addClickLogInProfileHandler = (login, data) => {
  _profileFist.addEventListener(CONSTANTS.CLICK, function (e) {
    if (login) {

      _overlayModal.classList.add(CONSTANTS.OPEN);
      _profileModal.classList.add(CONSTANTS.OPEN);
      _profile.classList.remove(CONSTANTS.OPEN);
      data && showNameUserProfile(data);
    } else {
      console.log("click else");
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
    if (
      !e.target.closest(".modal__register") &&
      !e.target.closest(".modal__login") &&
      !e.target.closest(".modal__profile")
    ) {
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
const changeMenuProfile = (login, data) => {
  if (login) {
    _profileFist.textContent = "My profile";
    _profileSecond.textContent = "Log out";
    _profileTitle.textContent = data.cardNum;
  } else {
    _profileFist.textContent = "Login in";
    _profileSecond.textContent = "Register";
    _profileTitle.textContent = "Profile";
  }
};
const addClickCopyIconHandler = () => {
  _cardIcon.addEventListener(CONSTANTS.CLICK, function () {
    copyData(_cardNumber);
  });
};

const showNameUserProfile = (data) => {
  const { firstName, lastName, cardNum } = data;
  _profilePhoto.textContent = `${firstName.slice(0, 1).toUpperCase()}${lastName.slice(0, 1).toUpperCase()}`;
  _profileName.textContent = `${firstName} ${lastName}`;
  _cardNumber.textContent = cardNum;
};

function copyData(containerClass) {
  var range = document.createRange();
  range.selectNode(containerClass); //changed here
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("data copied");
}

export {
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
};
