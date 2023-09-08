import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _profileIcon = UTILS.getElementFromDom(".profile__icon");
const _profile = UTILS.getElementFromDom(".profile");
const _profileSecond = UTILS.getElementFromDom(".profile__second");
const _overlayModal = UTILS.getElementFromDom(".overlay__modal");
const _modalRegister = UTILS.getElementFromDom(".modal__register");


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

const addClickRegisterHandler = () => {
  _profileSecond.addEventListener(CONSTANTS.CLICK, function (e) {
    _overlayModal.classList.add(CONSTANTS.OPEN);
    _modalRegister.classList.add(CONSTANTS.OPEN);
    _profile.classList.remove(CONSTANTS.OPEN);
  });
};

export { addClickProfileIconHandler, addClickBodyHandler, addClickRegisterHandler };
