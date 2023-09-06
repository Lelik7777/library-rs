import { UTILS } from "./utils";

const _btn_1 = UTILS.getElementFromDom(".btn_1");
const _btn_2 = UTILS.getElementFromDom(".btn_2");
const _btn_3 = UTILS.getElementFromDom(".btn_3");
const _sliderBtns = UTILS.getElementsFromDom(".slider__buttons .button__container");
const _sliderContainer = UTILS.getElementFromDom(".slider__container");

const active = "active";

const addSliderBtnsHandler = () => {
  if (window.innerWidth > 768) {
    _sliderBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        let closestElement = e.target.closest(".button__container");

        if (closestElement.classList.contains("btn_1")) {
          changeClassesSliderBtns(_sliderBtns, _btn_1);
          changeClassesForSliderContainer(_sliderContainer, "one");
        }
        if (closestElement.classList.contains("btn_2")) {
          changeClassesSliderBtns(_sliderBtns, _btn_2);
          changeClassesForSliderContainer(_sliderContainer, "two");
        }
        if (closestElement.classList.contains("btn_3")) {
          changeClassesSliderBtns(_sliderBtns, _btn_3);
          changeClassesForSliderContainer(_sliderContainer, "three");
        }
      });
    });
  }
};

function changeClassesSliderBtns(arr, el) {
  arr.forEach((el) => {
    el.querySelector(".button_round").classList.remove(active);
  });
  el.querySelector(".button_round").classList.add(active);
}

function changeClassesForSliderContainer(container, number) {
  container.classList.remove("one", "two", "three");
  container.classList.add(number);
}
export { addSliderBtnsHandler };
