import { addHamburgerClickHandler, addNavItemsClickHandler, addOverlayClickHandler } from "./js/pop-up";
import { addSliderBtnsHandler } from "./js/slider";

window.addEventListener("load", function () {
  addHamburgerClickHandler();
  addOverlayClickHandler();
  addNavItemsClickHandler();
  addSliderBtnsHandler();
});
console.log("Hello World!");
