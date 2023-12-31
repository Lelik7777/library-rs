import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _formBtn = UTILS.getElementFromDom(".form__button .button");
const _btnSignUp = UTILS.getElementFromDom(".form__buttons .sign-up");
const _btnLoginIn = UTILS.getElementFromDom(".form__buttons .log-in");
const _overlayModal = UTILS.getElementFromDom(".overlay__modal");
const _modalRegister = UTILS.getElementFromDom(".modal__register");
const _modalLogin = UTILS.getElementFromDom(".modal__login");
const _formButtonContainer = UTILS.getElementFromDom(".form__button");
const _formIcons = UTILS.getElementFromDom(".form_left__container .form__icons");
const _readerNameInput = UTILS.getElementFromDom(".reader-name");
const _cardNumberInput = UTILS.getElementFromDom(".card-number");
const _formButtons = UTILS.getElementsFromDom(".form__buttons .button");
const _formRightTitle = UTILS.getElementFromDom(".form_right__title");
const _formRightText = UTILS.getElementFromDom(".form_right__text");
const _btnProfileCards = UTILS.getElementFromDom(".form__buttons .prof");
const _profileModal = UTILS.getElementFromDom(".modal__profile");


const addClickFormButtonHandler = (data) => {
  _formBtn.addEventListener(CONSTANTS.CLICK, function (e) {
    e.preventDefault();

    if (data) {
      if (_readerNameInput.value === `${data.firstName} ${data.lastName}` && _cardNumberInput.value === data.cardNum) {
        _formBtn.style.display = "none";
        _formIcons.classList.add(CONSTANTS.OPEN);
        setTimeout(() => {
          _formBtn.style.display = "inline-block";
          _formIcons.classList.remove(CONSTANTS.OPEN);
          _cardNumberInput.value='';
          _readerNameInput.value='';
        }, 10_000);
      } else {
        alert("data not valid");
      }
    }
  });
};

const addClickSignBtnCardsHandler = () => {
  _btnSignUp.addEventListener(CONSTANTS.CLICK, function (e) {
    e.preventDefault();
    _overlayModal.classList.add(CONSTANTS.OPEN);
    _modalRegister.classList.add(CONSTANTS.OPEN);
  });
};

const addClickLogInBtnCardsHandler = () => {
  _btnLoginIn.addEventListener(CONSTANTS.CLICK, function (e) {
    e.preventDefault();
    _modalLogin.classList.add(CONSTANTS.OPEN);
    _overlayModal.classList.add(CONSTANTS.OPEN);
  });
};

const closeBtnOpenIcons = (login) => {
  console.log(login);
  if (login) {
    _formButtonContainer.classList.remove(CONSTANTS.OPEN);
    _formIcons.classList.add(CONSTANTS.OPEN);
  } else {
    _formBtn.classList.add(CONSTANTS.OPEN);
    _formIcons.classList.remove(CONSTANTS.OPEN);
  }
};
const changeInputsPlaceHolder = (login, data) => {
  if (login) {
    _cardNumberInput.placeholder = data.cardNum;
    _readerNameInput.placeholder = `${data.firstName} ${data.lastName}`;
  } else {
    _cardNumberInput.placeholder = "Card number ";
    _readerNameInput.placeholder = "Reader's name ";
  }
};
const closeButtons = (login) => {
  if (login) {
    _formButtons.forEach((button, i) => {
      button.classList.remove(CONSTANTS.OPEN);
      if (i === 0) {
        button.classList.add(CONSTANTS.OPEN);
      }
    });
  } else {
    _formButtons.forEach((button, i) => {
      button.classList.add(CONSTANTS.OPEN);
      if (i === 0) {
        button.classList.remove(CONSTANTS.OPEN);
      }
    });
  }
};
const changeTextReaderCard = (login) => {
  if (login) {
    _formRightTitle.textContent = "Visit your profile";
    _formRightText.textContent =
      "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";
  } else {
    _formRightTitle.textContent = "Get a reader card";
    _formRightText.textContent =
      " You will be able to see a reader card after logging into account or you can register a new account";
  }
};

const addClickProfileBtnCards = () => {
  _btnProfileCards.addEventListener(CONSTANTS.CLICK, function (e) {
    e.preventDefault();
    console.log("click profile btn cards");
    _overlayModal.classList.add(CONSTANTS.OPEN);
    _profileModal.classList.add(CONSTANTS.OPEN);
  });
};

export {
  addClickFormButtonHandler,
  addClickSignBtnCardsHandler,
  addClickLogInBtnCardsHandler,
  closeBtnOpenIcons,
  changeInputsPlaceHolder,
  closeButtons,
  changeTextReaderCard,
  addClickProfileBtnCards,
};
