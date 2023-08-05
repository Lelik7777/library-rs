import {
  addHamburgerClickHandler,
  addNavItemsClickHandler,
  addOverlayClickHandler,
} from "./js/pop-up";

window.addEventListener("load", function () {
  addHamburgerClickHandler();
  addOverlayClickHandler();
  addNavItemsClickHandler();
});
console.log("Hello World!");
