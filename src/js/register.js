import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _btnClose = UTILS.getElementFromDom(".modal__register .btn_close");
const _overlayModal = UTILS.getElementFromDom(".overlay__modal");
const _modalRegister = UTILS.getElementFromDom(".modal__register");
const _registerBtn = UTILS.getElementFromDom(".register__button");
const _firstName = UTILS.getElementFromDom("#first-name");
const _lastName = UTILS.getElementFromDom("#last-name");
const _email = UTILS.getElementFromDom("#email");
const _password = UTILS.getElementFromDom("#password");
const _inputs = UTILS.getElementsFromDom(".register__form .input");

const addClickBtnCloseHandler = () => {
  _btnClose.addEventListener(CONSTANTS.CLICK, function (e) {
    _overlayModal.classList.remove(CONSTANTS.OPEN);
    _modalRegister.classList.remove(CONSTANTS.OPEN);
  });
};

const addClickOverlayModalHandler = () => {
  _overlayModal.addEventListener(CONSTANTS.CLICK, function (e) {
    if (!e.target.closest(".modal__register")) {
      this.classList.remove(CONSTANTS.OPEN);
      _modalRegister.classList.remove(CONSTANTS.OPEN);
    }
  });
};


const getDataFromForm = () => {
  let form;
  Array.from(_inputs).forEach((input) => {
    input.addEventListener("input", function (e) {
      form = {};
      form.firstName = _firstName.value;
      form.lastName = _lastName.value;
      form.email = _email.value;
      form.password = _password.value;
      console.log(form);
    });
  });
  const addClickRegisterSignUpBtnHandler = (data) => {
    _registerBtn.addEventListener(CONSTANTS.CLICK, function (e) {

      saveForm(data);
    });
  };
  addClickRegisterSignUpBtnHandler(form);
};
function saveForm(data) {
  const json = JSON.stringify(data);
  window.localStorage.setItem("form", json);
}

export { addClickBtnCloseHandler, addClickOverlayModalHandler,getDataFromForm };
