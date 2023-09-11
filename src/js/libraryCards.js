import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _formBtn = UTILS.getElementFromDom(".form__button .button");
const _btnSignUp = UTILS.getElementFromDom(".form__buttons .sign-up");
const _overlayModal = UTILS.getElementFromDom(".overlay__modal");
const _modalRegister = UTILS.getElementFromDom(".modal__register");

const addClickFormButtonHandler = () => {
  _formBtn.addEventListener(CONSTANTS.CLICK, function (e) {
    e.preventDefault();
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
  _btnSignUp.addEventListener(CONSTANTS.CLICK, function (e) {
    e.preventDefault();
    _overlayModal.classList.add(CONSTANTS.OPEN);
    _modalRegister.classList.add(CONSTANTS.OPEN);
  });
};
export { addClickFormButtonHandler, addClickSignBtnCardsHandler };
