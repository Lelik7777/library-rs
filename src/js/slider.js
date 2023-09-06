import { UTILS } from "./utils";

const _btn_one = UTILS.getElementFromDom(".btn_one");
const _btn_two = UTILS.getElementFromDom(".btn_two");
const _btn_three = UTILS.getElementFromDom(".btn_three");
const _btn_four = UTILS.getElementFromDom(".btn_four");
const _btn_five = UTILS.getElementFromDom(".btn_five");
const _sliderBtns = UTILS.getElementsFromDom(".slider__buttons .button__container");
const _sliderContainer = UTILS.getElementFromDom(".slider__container");

const buttons = {
  btn_one: _btn_one,
  btn_two: _btn_two,
  btn_three: _btn_three,
  btn_four: _btn_four,
  btn_five: _btn_five,
};
const active = "active";

const addSliderBtnsHandler = () => {
  _sliderBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let closestElement = e.target.closest(".button__container");
      let numberBtn = closestElement.classList.value
        .split(" ")
        .filter((x) => x.includes("btn_"))
        .join("");
      let classNameButton = closestElement.classList.value
        .split(" ")
        .filter((x) => x.includes("btn_"))
        .join("")
        .replace(/btn_/, "");

      if (window.innerWidth <= 768) {
        if (classNameButton === "two") {
          classNameButton = "two_2";
        }
        if (classNameButton === "three") {
          classNameButton = "three_3";
        }
      }
      if (closestElement.querySelector(".button_round").classList.contains(active)) return;

      changeClassesSliderBtns(_sliderBtns, buttons[numberBtn]);
      changeClassesForSliderContainer(_sliderContainer, classNameButton);
      addDisabledButtons(_sliderBtns);

      listenEndTransition();
    });
  });
};

function listenEndTransition() {
  _sliderContainer.addEventListener("transitionend", function () {
    removeDisabledButtons(_sliderBtns);
  });
}
function changeClassesSliderBtns(arr, el) {
  arr.forEach((el) => {
    el.querySelector(".button_round").classList.remove(active);
  });
  el.querySelector(".button_round").classList.add(active);
}

function changeClassesForSliderContainer(container, number) {
  container.classList.remove("one", "two", "two_2", "three", "three_3", "four", "five");
  container.classList.add(number);
}
function addDisabledButtons(btns) {
  btns.forEach((btn) => {
    btn.classList.add("disabled");
  });
}
function removeDisabledButtons(btns) {
  btns.forEach((btn) => {
    btn.classList.remove("disabled");
  });
}
export { addSliderBtnsHandler };
