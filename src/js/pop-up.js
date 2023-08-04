import { UTILS } from "./utils";
import { CONSTANTS } from "./config";

const _hamburger = UTILS.getElementFromDom(".header__hamburger");
const _body = UTILS.getElementFromDom(".body");
const _nav = UTILS.getElementFromDom(".header__nav");
const active = "active";
const lock = "_lock";

const addHamburgerClickHandler = () => {
  _hamburger.addEventListener(CONSTANTS.CLICK, function () {
    this.classList.toggle(active);
    _body.classList.toggle(lock);
    _nav.classList.toggle(active);
  });
};

export { addHamburgerClickHandler };
