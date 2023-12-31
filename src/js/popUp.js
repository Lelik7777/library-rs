import { UTILS } from "./utils";
import { CONSTANTS } from "./config";

const _hamburger = UTILS.getElementFromDom(".header__hamburger");
const _body = UTILS.getElementFromDom(".body");
const _nav = UTILS.getElementFromDom(".header__nav");
const _overlay = UTILS.getElementFromDom(".overlay");
const active = "active";
const lock = "_lock";

//hamburger
const addHamburgerClickHandler = () => {
  _hamburger.addEventListener(CONSTANTS.CLICK, function () {
    this.classList.toggle(active);
    _body.classList.toggle(lock);
    _nav.classList.toggle(active);
    _overlay.classList.toggle(active);
  });
};

//overlap
const addOverlayClickHandler = () => {
  _overlay.addEventListener(CONSTANTS.CLICK, function () {
    this.classList.toggle(active);
    _hamburger.classList.toggle(active);
    _body.classList.toggle(lock);
    _nav.classList.toggle(active);
  });
};

//click on navigation items
const addNavItemsClickHandler = () => {
  _nav.addEventListener(CONSTANTS.CLICK, function (e) {
    if(window.innerWidth<769){
      if (e.target.classList.contains("nav__link")) {
        _overlay.classList.toggle(active);
        _hamburger.classList.toggle(active);
        _body.classList.toggle(lock);
        _nav.classList.toggle(active);
      }
    }

  });
};

export {
  addHamburgerClickHandler,
  addOverlayClickHandler,
  addNavItemsClickHandler,
};
