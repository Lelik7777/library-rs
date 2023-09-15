import { UTILS } from "./utils";

const _btn_one = UTILS.getElementFromDom(".btn_one");
const _btn_two = UTILS.getElementFromDom(".btn_two");
const _btn_three = UTILS.getElementFromDom(".btn_three");
const _btn_four = UTILS.getElementFromDom(".btn_four");
const _btn_five = UTILS.getElementFromDom(".btn_five");
const _sliderBtns = UTILS.getElementsFromDom(".slider__buttons .button__container");
const _sliderContainer = UTILS.getElementFromDom(".slider__container");
const _sliderBtnLeft = UTILS.getElementFromDom(".slider__button_left");
const _sliderBtnRight = UTILS.getElementFromDom(".slider__button_right");

let count = 1;
const buttons = {
  btn_one: _btn_one,
  btn_two: _btn_two,
  btn_three: _btn_three,
  btn_four: _btn_four,
  btn_five: _btn_five,
};
const arrNums = ["zero", "one", "two_2", "three_3", "four", "five"];
const active = "active";
const disabled = "disabled";

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
      addDisabledArrows();
      listenEndTransition();
    });
  });
};
//slider arrow  left
const addClickArrowLeftHandler = () => {
  if (count === 1) {
    _sliderBtnLeft.classList.add(disabled);
  }

  _sliderBtnLeft.addEventListener("click", function (e) {
    count--;
    changeClassesSliderBtns(_sliderBtns, findSliderBtn(count));
    _sliderBtnRight.classList.remove(disabled);
    if (count === 1) {
      _sliderBtnLeft.classList.add(disabled);
    }
    changeClassesForSliderContainer(_sliderContainer, arrNums[count]);
    addDisabledArrows();
    listenEndTransition();
  });
};
//slider arrow right
const addClickArrowRightHandler = () => {
  if (count === 5) {
    _sliderBtnRight.classList.add(disabled);
  }
  _sliderBtnRight.addEventListener("click", function (e) {
    count++;
    changeClassesSliderBtns(_sliderBtns, findSliderBtn(count));
    _sliderBtnLeft.classList.remove(disabled);
    if (count === 5) {
      _sliderBtnRight.classList.add(disabled);
    }
    changeClassesForSliderContainer(_sliderContainer, arrNums[count]);
    addDisabledArrows();
    listenEndTransition();
  });
};

//transition
function listenEndTransition() {
  _sliderContainer.addEventListener("transitionend", function () {
    removeDisabledButtons(_sliderBtns);
    removeDisabledArrows();
    if (count !== 1) {
      _sliderBtnLeft.classList.remove(disabled);
    }
    if (count !== 5) {
      _sliderBtnRight.classList.remove(disabled);
    }
  });
}
function changeClassesSliderBtns(arr, el) {
  console.log(el);
  const obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  };
  const number = el.classList.value
    .split(" ")
    .filter((x) => x.includes("btn"))
    .join("")
    .replace(/btn_/, "");

  count = obj[number];
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

function addDisabledArrows() {
  _sliderBtnLeft.classList.add(disabled);
  _sliderBtnRight.classList.add(disabled);
}
function removeDisabledArrows() {
  if (count !== 1) {
    _sliderBtnLeft.classList.remove(disabled);
  }
  if (count !== 5) _sliderBtnRight.classList.remove(disabled);
}
function findSliderBtn(num) {
  const arr = [_btn_one, _btn_two, _btn_three, _btn_four, _btn_five];
  return arr[num - 1];
}
export { addSliderBtnsHandler, addClickArrowLeftHandler, addClickArrowRightHandler };
