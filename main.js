(()=>{"use strict";var __webpack_modules__={81:()=>{eval('\n;// CONCATENATED MODULE: ./src/js/config.js\nvar CONSTANTS = {\n  CLICK: "click",\n  OPEN: \'open\',\n  CLOSE: \'close\'\n};\n\n;// CONCATENATED MODULE: ./src/js/utils.js\nvar UTILS = {\n  getElementFromDom: function getElementFromDom(selector) {\n    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n    return element.querySelector(selector);\n  },\n  getElementsFromDom: function getElementsFromDom(selector) {\n    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n    return element.querySelectorAll(selector);\n  },\n  deletePointFromSelector: function deletePointFromSelector(selector) {\n    return selector.replace(/\\./g, "");\n  }\n};\n;// CONCATENATED MODULE: ./src/js/header.js\n\n\nvar _profileIcon = UTILS.getElementFromDom(".profile__icon");\nvar _profileName = UTILS.getElementFromDom(".profile__name");\n\n//flag for login: if log out then flag=false\nvar changePersonIcon = function changePersonIcon(data) {\n  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  if (data && flag) {\n    _profileName.textContent = "".concat(data.firstName.slice(0, 1).toUpperCase()).concat(data.lastName.slice(0, 1).toUpperCase());\n    showName();\n  } else {\n    console.log(false);\n    closeIcon();\n  }\n};\nvar showName = function showName() {\n  _profileIcon.classList.remove(CONSTANTS.OPEN);\n  _profileName.classList.add(CONSTANTS.OPEN);\n};\nvar closeIcon = function closeIcon() {\n  _profileIcon.classList.add(CONSTANTS.OPEN);\n  _profileName.classList.remove(CONSTANTS.OPEN);\n};\n\n;// CONCATENATED MODULE: ./src/js/implementStickyFavorites.js\n\nfunction implementSticky(start, end) {\n  if (window.pageYOffset > start && window.pageYOffset <= end) {\n    UTILS.getElementFromDom(".favorites__inputs").classList.add("sticky");\n  } else {\n    UTILS.getElementFromDom(".favorites__inputs").classList.remove("sticky");\n  }\n}\n;// CONCATENATED MODULE: ./src/js/libraryCards.js\n\n\nvar _formBtn = UTILS.getElementFromDom(".form__button .button");\nvar _btnSignUp = UTILS.getElementFromDom(".form__buttons .sign-up");\nvar _overlayModal = UTILS.getElementFromDom(".overlay__modal");\nvar _modalRegister = UTILS.getElementFromDom(".modal__register");\nvar addClickFormButtonHandler = function addClickFormButtonHandler() {\n  _formBtn.addEventListener(CONSTANTS.CLICK, function (e) {\n    e.preventDefault();\n  });\n};\nvar addClickSignBtnHandler = function addClickSignBtnHandler() {\n  _btnSignUp.addEventListener(CONSTANTS.CLICK, function (e) {\n    e.preventDefault();\n    _overlayModal.classList.add(CONSTANTS.OPEN);\n    _modalRegister.classList.add(CONSTANTS.OPEN);\n  });\n};\n\n;// CONCATENATED MODULE: ./src/js/popUp.js\n\n\nvar _hamburger = UTILS.getElementFromDom(".header__hamburger");\nvar _body = UTILS.getElementFromDom(".body");\nvar _nav = UTILS.getElementFromDom(".header__nav");\nvar _overlay = UTILS.getElementFromDom(".overlay");\nvar active = "active";\nvar lock = "_lock";\n\n//hamburger\nvar addHamburgerClickHandler = function addHamburgerClickHandler() {\n  _hamburger.addEventListener(CONSTANTS.CLICK, function () {\n    this.classList.toggle(active);\n    _body.classList.toggle(lock);\n    _nav.classList.toggle(active);\n    _overlay.classList.toggle(active);\n  });\n};\n\n//overlap\nvar addOverlayClickHandler = function addOverlayClickHandler() {\n  _overlay.addEventListener(CONSTANTS.CLICK, function () {\n    this.classList.toggle(active);\n    _hamburger.classList.toggle(active);\n    _body.classList.toggle(lock);\n    _nav.classList.toggle(active);\n  });\n};\n\n//click on navigation items\nvar addNavItemsClickHandler = function addNavItemsClickHandler() {\n  _nav.addEventListener(CONSTANTS.CLICK, function (e) {\n    if (window.innerWidth < 769) {\n      if (e.target.classList.contains("nav__link")) {\n        _overlay.classList.toggle(active);\n        _hamburger.classList.toggle(active);\n        _body.classList.toggle(lock);\n        _nav.classList.toggle(active);\n      }\n    }\n  });\n};\n\n;// CONCATENATED MODULE: ./src/js/profile.js\n\n\nvar profile_profileIcon = UTILS.getElementFromDom(".profile__icon");\nvar _profile = UTILS.getElementFromDom(".profile");\nvar _profileSecond = UTILS.getElementFromDom(".profile__second");\nvar profile_overlayModal = UTILS.getElementFromDom(".overlay__modal");\nvar profile_modalRegister = UTILS.getElementFromDom(".modal__register");\nvar addClickProfileIconHandler = function addClickProfileIconHandler() {\n  profile_profileIcon.addEventListener(CONSTANTS.CLICK, function () {\n    _profile.classList.toggle(CONSTANTS.OPEN);\n  });\n};\n\n//for closing profile menu\nvar addClickBodyHandler = function addClickBodyHandler() {\n  document.body.addEventListener(CONSTANTS.CLICK, function (e) {\n    if (_profile.classList.contains(CONSTANTS.OPEN) && !e.target.classList.contains("profile__icon") && !e.target.closest(".profile")) {\n      _profile.classList.remove(CONSTANTS.OPEN);\n    }\n  });\n};\nvar addClickRegisterHandler = function addClickRegisterHandler() {\n  _profileSecond.addEventListener(CONSTANTS.CLICK, function (e) {\n    profile_overlayModal.classList.add(CONSTANTS.OPEN);\n    profile_modalRegister.classList.add(CONSTANTS.OPEN);\n    _profile.classList.remove(CONSTANTS.OPEN);\n  });\n};\n\n;// CONCATENATED MODULE: ./src/js/register.js\n\n\nvar _btnClose = UTILS.getElementFromDom(".modal__register .btn_close");\nvar register_overlayModal = UTILS.getElementFromDom(".overlay__modal");\nvar register_modalRegister = UTILS.getElementFromDom(".modal__register");\nvar _registerBtn = UTILS.getElementFromDom(".register__button");\nvar _firstName = UTILS.getElementFromDom("#first-name");\nvar _lastName = UTILS.getElementFromDom("#last-name");\nvar _email = UTILS.getElementFromDom("#email");\nvar _password = UTILS.getElementFromDom("#password");\nvar _inputs = UTILS.getElementsFromDom(".register__form .input");\nvar addClickBtnCloseHandler = function addClickBtnCloseHandler() {\n  _btnClose.addEventListener(CONSTANTS.CLICK, function (e) {\n    register_overlayModal.classList.remove(CONSTANTS.OPEN);\n    register_modalRegister.classList.remove(CONSTANTS.OPEN);\n  });\n};\nvar addClickOverlayModalHandler = function addClickOverlayModalHandler() {\n  register_overlayModal.addEventListener(CONSTANTS.CLICK, function (e) {\n    if (!e.target.closest(".modal__register")) {\n      this.classList.remove(CONSTANTS.OPEN);\n      register_modalRegister.classList.remove(CONSTANTS.OPEN);\n    }\n  });\n};\nvar addClickRegisterSignUpBtnHandler = function addClickRegisterSignUpBtnHandler(data) {\n  _registerBtn.addEventListener(CONSTANTS.CLICK, function (e) {\n    if (data) {\n      saveForm(data);\n      location.reload();\n    }\n  });\n};\nvar sendData = function sendData(callback) {\n  var form = getDataFromForm();\n  callback(form);\n};\nvar getDataFromForm = function getDataFromForm() {\n  var form = {};\n  Array.from(_inputs).forEach(function (input) {\n    input.addEventListener("input", function (e) {\n      form.firstName = _firstName.value;\n      form.lastName = _lastName.value;\n      form.email = _email.value;\n      form.password = _password.value;\n      form.cardNum = getHexNum();\n    });\n  });\n  return form;\n};\nfunction saveForm(data) {\n  var json = JSON.stringify(data);\n  window.localStorage.setItem("form", json);\n}\nfunction getHexNum() {\n  return Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");\n}\n\n;// CONCATENATED MODULE: ./src/js/slider.js\n\nvar _btn_one = UTILS.getElementFromDom(".btn_one");\nvar _btn_two = UTILS.getElementFromDom(".btn_two");\nvar _btn_three = UTILS.getElementFromDom(".btn_three");\nvar _btn_four = UTILS.getElementFromDom(".btn_four");\nvar _btn_five = UTILS.getElementFromDom(".btn_five");\nvar _sliderBtns = UTILS.getElementsFromDom(".slider__buttons .button__container");\nvar _sliderContainer = UTILS.getElementFromDom(".slider__container");\nvar _sliderBtnLeft = UTILS.getElementFromDom(".slider__button_left");\nvar _sliderBtnRight = UTILS.getElementFromDom(".slider__button_right");\nvar count = 1;\nvar buttons = {\n  btn_one: _btn_one,\n  btn_two: _btn_two,\n  btn_three: _btn_three,\n  btn_four: _btn_four,\n  btn_five: _btn_five\n};\nvar arrNums = ["zero", "one", "two_2", "three_3", "four", "five"];\nvar slider_active = "active";\nvar disabled = "disabled";\nvar addSliderBtnsHandler = function addSliderBtnsHandler() {\n  _sliderBtns.forEach(function (btn) {\n    btn.addEventListener("click", function (e) {\n      var closestElement = e.target.closest(".button__container");\n      var numberBtn = closestElement.classList.value.split(" ").filter(function (x) {\n        return x.includes("btn_");\n      }).join("");\n      var classNameButton = closestElement.classList.value.split(" ").filter(function (x) {\n        return x.includes("btn_");\n      }).join("").replace(/btn_/, "");\n      if (window.innerWidth <= 768) {\n        if (classNameButton === "two") {\n          classNameButton = "two_2";\n        }\n        if (classNameButton === "three") {\n          classNameButton = "three_3";\n        }\n      }\n      if (closestElement.querySelector(".button_round").classList.contains(slider_active)) return;\n      changeClassesSliderBtns(_sliderBtns, buttons[numberBtn]);\n      changeClassesForSliderContainer(_sliderContainer, classNameButton);\n      addDisabledButtons(_sliderBtns);\n      addDisabledArrows();\n      listenEndTransition();\n    });\n  });\n};\n//slider arrow  left\nvar addClickArrowLeftHandler = function addClickArrowLeftHandler() {\n  if (count === 1) {\n    _sliderBtnLeft.classList.add(disabled);\n  }\n  _sliderBtnLeft.addEventListener("click", function (e) {\n    count--;\n    changeClassesSliderBtns(_sliderBtns, findSliderBtn(count));\n    _sliderBtnRight.classList.remove(disabled);\n    if (count === 1) {\n      _sliderBtnLeft.classList.add(disabled);\n    }\n    changeClassesForSliderContainer(_sliderContainer, arrNums[count]);\n    addDisabledArrows();\n    listenEndTransition();\n  });\n};\n//slider arrow right\nvar addClickArrowRightHandler = function addClickArrowRightHandler() {\n  if (count === 5) {\n    _sliderBtnRight.classList.add(disabled);\n  }\n  _sliderBtnRight.addEventListener("click", function (e) {\n    count++;\n    changeClassesSliderBtns(_sliderBtns, findSliderBtn(count));\n    _sliderBtnLeft.classList.remove(disabled);\n    if (count === 5) {\n      _sliderBtnRight.classList.add(disabled);\n    }\n    changeClassesForSliderContainer(_sliderContainer, arrNums[count]);\n    addDisabledArrows();\n    listenEndTransition();\n  });\n};\n\n//transition\nfunction listenEndTransition() {\n  _sliderContainer.addEventListener("transitionend", function () {\n    removeDisabledButtons(_sliderBtns);\n    removeDisabledArrows();\n    if (count !== 1) {\n      _sliderBtnLeft.classList.remove(disabled);\n    }\n    if (count !== 5) {\n      _sliderBtnRight.classList.remove(disabled);\n    }\n  });\n}\nfunction changeClassesSliderBtns(arr, el) {\n  console.log(el);\n  var obj = {\n    one: 1,\n    two: 2,\n    three: 3,\n    four: 4,\n    five: 5\n  };\n  var number = el.classList.value.split(" ").filter(function (x) {\n    return x.includes("btn");\n  }).join("").replace(/btn_/, "");\n  count = obj[number];\n  arr.forEach(function (el) {\n    el.querySelector(".button_round").classList.remove(slider_active);\n  });\n  el.querySelector(".button_round").classList.add(slider_active);\n}\nfunction changeClassesForSliderContainer(container, number) {\n  container.classList.remove("one", "two", "two_2", "three", "three_3", "four", "five");\n  container.classList.add(number);\n}\nfunction addDisabledButtons(btns) {\n  btns.forEach(function (btn) {\n    btn.classList.add("disabled");\n  });\n}\nfunction removeDisabledButtons(btns) {\n  btns.forEach(function (btn) {\n    btn.classList.remove("disabled");\n  });\n}\nfunction addDisabledArrows() {\n  _sliderBtnLeft.classList.add(disabled);\n  _sliderBtnRight.classList.add(disabled);\n}\nfunction removeDisabledArrows() {\n  if (count !== 1) {\n    _sliderBtnLeft.classList.remove(disabled);\n  }\n  if (count !== 5) _sliderBtnRight.classList.remove(disabled);\n}\nfunction findSliderBtn(num) {\n  var arr = [_btn_one, _btn_two, _btn_three, _btn_four, _btn_five];\n  return arr[num - 1];\n}\n\n;// CONCATENATED MODULE: ./src/index.js\n\n\n\n\n\n\n\n\n\nvar startSticky = 1700;\nvar endSticky = 4000;\nalert("Приветствую тебя 👋, проверяющий! Работа над реализацией еще продолжается 👨‍💻. Если есть возможность 🙏,то проверь в четверг,чтобы сейчас не тратить время. В остальном поступай так,как пожелаешь. Хорошего и продуктивного дня!😉");\nwindow.addEventListener("load", function () {\n  var data = null;\n  if (this.localStorage.getItem("form") !== \'null\') {\n    console.log(\'it is form\');\n    data = JSON.parse(this.localStorage.getItem(\'form\'));\n  }\n  addHamburgerClickHandler();\n  addOverlayClickHandler();\n  addNavItemsClickHandler();\n  addSliderBtnsHandler();\n  addClickArrowLeftHandler();\n  addClickArrowRightHandler();\n  addClickProfileIconHandler();\n  addClickBodyHandler();\n  addClickRegisterHandler();\n  addClickBtnCloseHandler();\n  addClickOverlayModalHandler();\n  addClickFormButtonHandler();\n  addClickSignBtnHandler();\n  sendData(addClickRegisterSignUpBtnHandler);\n  changePersonIcon(data);\n\n  // document.querySelector(\'.log-in\').addEventListener(\'click\',function(){\n  //   changePersonIcon(data,false)\n  // })\n\n  //sticky favorites\n  if (window.innerWidth < 769) {\n    window.onscroll = function () {\n      implementSticky(startSticky, endSticky);\n    };\n  }\n});\nwindow.addEventListener("resize", function () {\n  var _sliderContainer$clas;\n  var arr = ["one", "two", "two_2", "three", "three_3", "four", "five"];\n  var _sliderContainer = UTILS.getElementFromDom(".slider__container");\n  var _sliderBtns = UTILS.getElementsFromDom(".slider__buttons .button__container");\n  (_sliderContainer$clas = _sliderContainer.classList).remove.apply(_sliderContainer$clas, arr);\n  _sliderContainer.classList.add("one");\n  _sliderBtns.forEach(function (el) {\n    el.querySelector(".button_round").classList.remove("active");\n  });\n  _sliderBtns[0].querySelector(".button_round").classList.add("active");\n\n  //sticky for favorites\n  if (window.innerWidth < 769) {\n    window.onscroll = function () {\n      implementSticky(startSticky, endSticky);\n    };\n  }\n});\n\n// const getForm = () => {\n//   console.log(\'get form\');\n//   let data = window.localStorage.getItem("form")||null;\n\n//    return data;\n// };\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js_+_9_modules?')},208:()=>{eval("// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/sass/style.scss?")}};__webpack_modules__[81]();var __webpack_exports__={};__webpack_modules__[208]()})();