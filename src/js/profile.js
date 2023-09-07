import { UTILS } from "./utils";

const _profileIcon = UTILS.getElementFromDom(".profile__icon");
const _profile = UTILS.getElementFromDom(".profile");

const addClickProfileIconHandler = () => {
  _profileIcon.addEventListener("click", function () {
    _profile.classList.toggle("open");
  });
};

export { addClickProfileIconHandler };
