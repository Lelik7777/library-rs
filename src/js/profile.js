import { UTILS } from "./utils";

const _profileIcon = UTILS.getElementFromDom(".profile__icon");
const _profile = UTILS.getElementFromDom(".profile");

const addClickProfileIconHandler = () => {
  _profileIcon.addEventListener("click", function () {
    _profile.classList.toggle("open");
  });
};

//for closing profile menu
const addClickBodyHandler = () => {
  document.body.addEventListener("click", function (e) {

    if (_profile.classList.contains("open") && !e.target.classList.contains("profile__icon")&&!e.target.closest('.profile')) {

      _profile.classList.remove("open");
    }
  });
};

export { addClickProfileIconHandler, addClickBodyHandler };
