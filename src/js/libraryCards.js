import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _formBtn = UTILS.getElementFromDom(".form__button .button");
const _btnSignUp = UTILS.getElementFromDom(".form__buttons .sign-up");
const _btnLoginIn = UTILS.getElementFromDom(".form__buttons .log-in");
const _overlayModal = UTILS.getElementFromDom(".overlay__modal");
const _modalRegister = UTILS.getElementFromDom(".modal__register");
const _modalLogin = UTILS.getElementFromDom(".modal__login");

//todo При наличии регистрации, но будучи не авторизованным:
//todo 1.Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд. +2
//todo 2.Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются. +2

const addClickFormButtonHandler = () => {
  _formBtn.addEventListener(CONSTANTS.CLICK, function (e) {

  });
};

const addClickSignBtnCardsHandler = () => {
  _btnSignUp.addEventListener(CONSTANTS.CLICK, function (e) {

    _overlayModal.classList.add(CONSTANTS.OPEN);
    _modalRegister.classList.add(CONSTANTS.OPEN);
  });
};

const addClickLogInBtnCardsHandler = () => {
  _btnLoginIn.addEventListener(CONSTANTS.CLICK, function (e) {
    
    _modalLogin.classList.add(CONSTANTS.OPEN);
    _overlayModal.classList.add(CONSTANTS.OPEN);
  });
};
export { addClickFormButtonHandler, addClickSignBtnCardsHandler, addClickLogInBtnCardsHandler};
