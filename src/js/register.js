import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _registerBtn = UTILS.getElementFromDom(".register__button");
const _firstName = UTILS.getElementFromDom("#first-name");
const _lastName = UTILS.getElementFromDom("#last-name");
const _email = UTILS.getElementFromDom("#email");
const _password = UTILS.getElementFromDom("#password");
const _inputs = UTILS.getElementsFromDom(".register__form .input");
const _overlayModal = UTILS.getElementFromDom(".overlay__modal");
const _modalRegister = UTILS.getElementFromDom(".modal__register");


const addClickRegisterSignUpBtnHandler = (data) => {
  _registerBtn.addEventListener(CONSTANTS.CLICK, function (e) {
    if (Object.values(data).filter((x) => x !== "").length > 6 && data.password.length >= 8) {
      saveForm(data);
      setTimeout(() => {
        window.location.reload();
      }, 1);
      _overlayModal.classList.remove(CONSTANTS.OPEN);
      _modalRegister.classList.remove(CONSTANTS.OPEN);
    } else {
      console.log("check inputs");
    }
  });
};
const sendData = (callback) => {
  const form = getDataFromForm();

  callback(form);
};

const getDataFromForm = () => {
  let form = {};
  Array.from(_inputs).forEach((input) => {
    input.addEventListener("input", function (e) {
      form.firstName = _firstName.value;
      form.lastName = _lastName.value;
      form.email = _email.value;

      form.password = _password.value >= 8 ? _password.value : "";
      form.cardNum = getHexNum();
      form.login = true;
      form.registration = true;
    });
  });

  return form;
};
function saveForm(data) {
  const json = JSON.stringify(data);
  window.localStorage.setItem("form", json);
}

function getHexNum() {
  return Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0");
}
export { sendData, addClickRegisterSignUpBtnHandler };
