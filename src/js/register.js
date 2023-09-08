import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _btnClose = UTILS.getElementFromDom(".modal__register .btn_close");
const _overlayModal = UTILS.getElementFromDom(".overlay__modal");
const _modalRegister = UTILS.getElementFromDom(".modal__register");

const addClickBtnCloseHandler = () => {
  _btnClose.addEventListener(CONSTANTS.CLICK, function (e) {
    _overlayModal.classList.remove(CONSTANTS.OPEN);
    _modalRegister.classList.remove(CONSTANTS.OPEN);
  });
};

const addClickOverlayModalHandler=() => {
_overlayModal.addEventListener(CONSTANTS.CLICK, function (e) {
  if(!e.target.closest('.modal__register')){
    this.classList.remove(CONSTANTS.OPEN);
    _modalRegister.classList.remove(CONSTANTS.OPEN);
  }

});
}

export { addClickBtnCloseHandler,addClickOverlayModalHandler };
