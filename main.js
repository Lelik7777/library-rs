(()=>{"use strict";var __webpack_modules__={435:()=>{eval('\n;// CONCATENATED MODULE: ./src/js/config.js\nvar CONSTANTS = {\n  CLICK: "click",\n  OPEN: \'open\',\n  CLOSE: \'close\',\n  HIDDEN: \'hidden\'\n};\n\n;// CONCATENATED MODULE: ./src/js/utils.js\nvar UTILS = {\n  getElementFromDom: function getElementFromDom(selector) {\n    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n    return element.querySelector(selector);\n  },\n  getElementsFromDom: function getElementsFromDom(selector) {\n    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n    return element.querySelectorAll(selector);\n  },\n  deletePointFromSelector: function deletePointFromSelector(selector) {\n    return selector.replace(/\\./g, "");\n  },\n  getDataFromStorage: function getDataFromStorage() {\n    var json = window.localStorage.getItem("form");\n    var data = JSON.parse(json);\n    return data;\n  }\n};\n;// CONCATENATED MODULE: ./src/js/favorites.js\n\n\nvar _cardsBtns = UTILS.getElementsFromDom(".favorites__cards .card__button");\nvar _modalLogin = UTILS.getElementFromDom(".modal__login");\nvar _overlayModal = UTILS.getElementFromDom(".overlay__modal");\nvar _inputsFavorites = UTILS.getElementsFromDom(".favorites__input");\nvar _cardsFavorites = UTILS.getElementsFromDom(".favorites__cards");\nvar _cardModal = UTILS.getElementFromDom(".modal__card");\nvar addClickCardBtnHandler = function addClickCardBtnHandler(login) {\n  _cardsBtns.forEach(function (btn) {\n    btn.addEventListener(CONSTANTS.CLICK, function (e) {\n      if (login) {\n        _overlayModal.classList.add(CONSTANTS.OPEN);\n        _cardModal.classList.add(CONSTANTS.OPEN);\n        btn.textContent = "Own";\n        btn.disabled = true;\n        var book = btn.closest(".card").querySelector(".card_subtitle").textContent.replace(/\\n+\\s+/g, "");\n        var data = UTILS.getDataFromStorage();\n        data.books.push(book);\n        data.countBooks++;\n        window.localStorage.setItem("form", JSON.stringify(data));\n      } else {\n        _modalLogin.classList.add(CONSTANTS.OPEN);\n        _overlayModal.classList.add(CONSTANTS.OPEN);\n      }\n    });\n  });\n};\nvar addClickInputRadioHandler = function addClickInputRadioHandler() {\n  _inputsFavorites.forEach(function (radio) {\n    radio.addEventListener(CONSTANTS.CLICK, function (e) {\n      var _this = this;\n      _cardsFavorites.forEach(function (card) {\n        card.classList.add(CONSTANTS.HIDDEN);\n        if (card.classList.contains(_this.value)) {\n          card.classList.remove(CONSTANTS.HIDDEN);\n        }\n      });\n    });\n  });\n};\n\n;// CONCATENATED MODULE: ./src/js/header.js\n\nvar _profileIcon = UTILS.getElementFromDom(".profile__icon");\n\n//flag for login: if log out then flag=false\nvar changePersonIcon = function changePersonIcon(data, login) {\n  if (data && login) {\n    var firstName = data.firstName,\n      lastName = data.lastName;\n    _profileIcon.textContent = "".concat(firstName.slice(0, 1).toUpperCase()).concat(lastName.slice(0, 1).toUpperCase());\n    _profileIcon.setAttribute(\'title\', "".concat(firstName, " ").concat(lastName));\n    showName();\n  } else {\n    showIcon();\n  }\n};\nvar showName = function showName() {\n  _profileIcon.classList.remove(\'icon__profile\');\n};\nvar showIcon = function showIcon() {\n  _profileIcon.classList.add(\'icon__profile\');\n};\n\n;// CONCATENATED MODULE: ./src/js/implementStickyFavorites.js\n\nfunction implementSticky(start, end) {\n  if (window.pageYOffset > start && window.pageYOffset <= end) {\n    UTILS.getElementFromDom(".favorites__inputs").classList.add("sticky");\n  } else {\n    UTILS.getElementFromDom(".favorites__inputs").classList.remove("sticky");\n  }\n}\n;// CONCATENATED MODULE: ./src/js/libraryCards.js\n\n\nvar _formBtn = UTILS.getElementFromDom(".form__button .button");\nvar _btnSignUp = UTILS.getElementFromDom(".form__buttons .sign-up");\nvar _btnLoginIn = UTILS.getElementFromDom(".form__buttons .log-in");\nvar libraryCards_overlayModal = UTILS.getElementFromDom(".overlay__modal");\nvar _modalRegister = UTILS.getElementFromDom(".modal__register");\nvar libraryCards_modalLogin = UTILS.getElementFromDom(".modal__login");\nvar _formButtonContainer = UTILS.getElementFromDom(".form__button");\nvar _formIcons = UTILS.getElementFromDom(".form_left__container .form__icons");\nvar _readerNameInput = UTILS.getElementFromDom(".reader-name");\nvar _cardNumberInput = UTILS.getElementFromDom(".card-number");\nvar _formButtons = UTILS.getElementsFromDom(".form__buttons .button");\nvar _formRightTitle = UTILS.getElementFromDom(".form_right__title");\nvar _formRightText = UTILS.getElementFromDom(".form_right__text");\nvar _btnProfileCards = UTILS.getElementFromDom(".form__buttons .prof");\nvar _profileModal = UTILS.getElementFromDom(".modal__profile");\nvar addClickFormButtonHandler = function addClickFormButtonHandler(data) {\n  _formBtn.addEventListener(CONSTANTS.CLICK, function (e) {\n    e.preventDefault();\n    if (data) {\n      if (_readerNameInput.value === "".concat(data.firstName, " ").concat(data.lastName) && _cardNumberInput.value === data.cardNum) {\n        _formBtn.style.display = "none";\n        _formIcons.classList.add(CONSTANTS.OPEN);\n        setTimeout(function () {\n          _formBtn.style.display = "inline-block";\n          _formIcons.classList.remove(CONSTANTS.OPEN);\n          _cardNumberInput.value = \'\';\n          _readerNameInput.value = \'\';\n        }, 10000);\n      } else {\n        alert("data not valid");\n      }\n    }\n  });\n};\nvar addClickSignBtnCardsHandler = function addClickSignBtnCardsHandler() {\n  _btnSignUp.addEventListener(CONSTANTS.CLICK, function (e) {\n    e.preventDefault();\n    libraryCards_overlayModal.classList.add(CONSTANTS.OPEN);\n    _modalRegister.classList.add(CONSTANTS.OPEN);\n  });\n};\nvar addClickLogInBtnCardsHandler = function addClickLogInBtnCardsHandler() {\n  _btnLoginIn.addEventListener(CONSTANTS.CLICK, function (e) {\n    e.preventDefault();\n    libraryCards_modalLogin.classList.add(CONSTANTS.OPEN);\n    libraryCards_overlayModal.classList.add(CONSTANTS.OPEN);\n  });\n};\nvar closeBtnOpenIcons = function closeBtnOpenIcons(login) {\n  console.log(login);\n  if (login) {\n    _formButtonContainer.classList.remove(CONSTANTS.OPEN);\n    _formIcons.classList.add(CONSTANTS.OPEN);\n  } else {\n    _formBtn.classList.add(CONSTANTS.OPEN);\n    _formIcons.classList.remove(CONSTANTS.OPEN);\n  }\n};\nvar changeInputsPlaceHolder = function changeInputsPlaceHolder(login, data) {\n  if (login) {\n    _cardNumberInput.placeholder = data.cardNum;\n    _readerNameInput.placeholder = "".concat(data.firstName, " ").concat(data.lastName);\n  } else {\n    _cardNumberInput.placeholder = "Card number ";\n    _readerNameInput.placeholder = "Reader\'s name ";\n  }\n};\nvar closeButtons = function closeButtons(login) {\n  if (login) {\n    _formButtons.forEach(function (button, i) {\n      button.classList.remove(CONSTANTS.OPEN);\n      if (i === 0) {\n        button.classList.add(CONSTANTS.OPEN);\n      }\n    });\n  } else {\n    _formButtons.forEach(function (button, i) {\n      button.classList.add(CONSTANTS.OPEN);\n      if (i === 0) {\n        button.classList.remove(CONSTANTS.OPEN);\n      }\n    });\n  }\n};\nvar changeTextReaderCard = function changeTextReaderCard(login) {\n  if (login) {\n    _formRightTitle.textContent = "Visit your profile";\n    _formRightText.textContent = "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";\n  } else {\n    _formRightTitle.textContent = "Get a reader card";\n    _formRightText.textContent = " You will be able to see a reader card after logging into account or you can register a new account";\n  }\n};\nvar addClickProfileBtnCards = function addClickProfileBtnCards() {\n  _btnProfileCards.addEventListener(CONSTANTS.CLICK, function (e) {\n    e.preventDefault();\n    console.log("click profile btn cards");\n    libraryCards_overlayModal.classList.add(CONSTANTS.OPEN);\n    _profileModal.classList.add(CONSTANTS.OPEN);\n  });\n};\n\n;// CONCATENATED MODULE: ./src/js/modal_card.js\n\n\nvar _bankNum = UTILS.getElementFromDom("#bank__card__number");\nvar _expCode1 = UTILS.getElementFromDom("#exp-code_1");\nvar _expCode2 = UTILS.getElementFromDom("#exp-code_2");\nvar _cvc = UTILS.getElementFromDom("#card__cvc");\nvar _nameCard = UTILS.getElementFromDom("#card__name");\nvar _postalCard = UTILS.getElementFromDom("#card__postal");\nvar _city = UTILS.getElementFromDom("#card__city");\nvar _buyBtn = UTILS.getElementFromDom(".modal__card__form__button .button");\nvar modal_card_overlayModal = UTILS.getElementFromDom(".overlay__modal");\nvar _modalCard = UTILS.getElementFromDom(".modal__card");\nvar _closeBtn = UTILS.getElementFromDom(".modal__card .card__btn_close");\nvar addClickCloseBtnModalCardHandler = function addClickCloseBtnModalCardHandler() {\n  _closeBtn.addEventListener(CONSTANTS.CLICK, function (e) {\n    closeWindow();\n  });\n};\nvar addClickBuyBtnCardHandler = function addClickBuyBtnCardHandler() {\n  _buyBtn.addEventListener(CONSTANTS.CLICK, function (e) {\n    var data = fillForm();\n    if (data.bank.length === 9 && data.ecpCode1.length === 3 && data.ecpCode2.length === 3 && data.cvc.length === 3 && data.name.length > 3 && data.postal.length > 3 && data.city.length > 4) {\n      closeWindow();\n      setTimeout(function () {\n        location.reload();\n      }, 10);\n    } else {\n      alert("entered data wrong ");\n    }\n  });\n};\nvar fillForm = function fillForm() {\n  var form = {};\n  form.bank = _bankNum.value;\n  form.ecpCode1 = _expCode1.value;\n  form.ecpCode2 = _expCode2.value;\n  form.cvc = _cvc.value;\n  form.name = _nameCard.value;\n  form.postal = _postalCard.value;\n  form.city = _city.value;\n  return form;\n};\nfunction closeWindow() {\n  modal_card_overlayModal.classList.remove(CONSTANTS.OPEN);\n  _modalCard.classList.remove(CONSTANTS.OPEN);\n}\n\n;// CONCATENATED MODULE: ./src/js/login.js\n\n\nvar _email = UTILS.getElementFromDom("#email_login");\nvar _password = UTILS.getElementFromDom("#password_login");\nvar login_btnSignUp = UTILS.getElementFromDom(".login__form .register__button");\nvar addClickBtnSignUpLoginHandler = function addClickBtnSignUpLoginHandler() {\n  login_btnSignUp.addEventListener(CONSTANTS.CLICK, function (e) {\n    if (_email.value && _password.value && _password.value.length >= 8) {\n      var form = JSON === null || JSON === void 0 ? void 0 : JSON.parse(window.localStorage.getItem("form"));\n      if (form) {\n        if (form) {}\n        if ((_email.value === form.email || _email.value === form.cardNum) && _password.value === form.password) {\n          form.login = true;\n          form.visits++;\n          window.localStorage.setItem("form", JSON.stringify(form));\n          setTimeout(function () {\n            window.location.reload();\n          }, 1);\n        } else {\n          alert("wrong entered data");\n        }\n      } else {\n        alert(\'you have to sign up\');\n      }\n    }\n  });\n};\n\n;// CONCATENATED MODULE: ./src/js/popUp.js\n\n\nvar _hamburger = UTILS.getElementFromDom(".header__hamburger");\nvar _body = UTILS.getElementFromDom(".body");\nvar _nav = UTILS.getElementFromDom(".header__nav");\nvar _overlay = UTILS.getElementFromDom(".overlay");\nvar active = "active";\nvar lock = "_lock";\n\n//hamburger\nvar addHamburgerClickHandler = function addHamburgerClickHandler() {\n  _hamburger.addEventListener(CONSTANTS.CLICK, function () {\n    this.classList.toggle(active);\n    _body.classList.toggle(lock);\n    _nav.classList.toggle(active);\n    _overlay.classList.toggle(active);\n  });\n};\n\n//overlap\nvar addOverlayClickHandler = function addOverlayClickHandler() {\n  _overlay.addEventListener(CONSTANTS.CLICK, function () {\n    this.classList.toggle(active);\n    _hamburger.classList.toggle(active);\n    _body.classList.toggle(lock);\n    _nav.classList.toggle(active);\n  });\n};\n\n//click on navigation items\nvar addNavItemsClickHandler = function addNavItemsClickHandler() {\n  _nav.addEventListener(CONSTANTS.CLICK, function (e) {\n    if (window.innerWidth < 769) {\n      if (e.target.classList.contains("nav__link")) {\n        _overlay.classList.toggle(active);\n        _hamburger.classList.toggle(active);\n        _body.classList.toggle(lock);\n        _nav.classList.toggle(active);\n      }\n    }\n  });\n};\n\n;// CONCATENATED MODULE: ./src/js/profile.js\n\n\nvar _btnsClose = UTILS.getElementsFromDom(".overlay__modal .btn_close");\nvar profile_profileIcon = UTILS.getElementFromDom(".profile__icon");\nvar _profile = UTILS.getElementFromDom(".profile");\nvar _profileSecond = UTILS.getElementFromDom(".profile__second");\nvar profile_overlayModal = UTILS.getElementFromDom(".overlay__modal");\nvar profile_modalRegister = UTILS.getElementFromDom(".modal__register");\nvar _profileFist = UTILS.getElementFromDom(".profile__first");\nvar profile_modalLogin = UTILS.getElementFromDom(".modal__login");\nvar _linkRegister = UTILS.getElementFromDom(".register__link");\nvar _linkLogin = UTILS.getElementFromDom(".login__link");\nvar profile_profileModal = UTILS.getElementFromDom(".modal__profile");\nvar _profilePhoto = UTILS.getElementFromDom(".profile__photo");\nvar _profileName = UTILS.getElementFromDom(".profile__name");\nvar _cardNumber = UTILS.getElementFromDom(".profile__card .card__number");\nvar _cardIcon = UTILS.getElementFromDom(".profile__card .card__icon");\nvar _profileTitle = UTILS.getElementFromDom(".profile .profile__title");\nvar addClickProfileIconHandler = function addClickProfileIconHandler() {\n  profile_profileIcon.addEventListener(CONSTANTS.CLICK, function () {\n    _profile.classList.toggle(CONSTANTS.OPEN);\n  });\n};\n\n//for closing profile menu\nvar addClickBodyHandler = function addClickBodyHandler() {\n  document.body.addEventListener(CONSTANTS.CLICK, function (e) {\n    if (_profile.classList.contains(CONSTANTS.OPEN) && !e.target.classList.contains("profile__icon") && !e.target.closest(".profile")) {\n      _profile.classList.remove(CONSTANTS.OPEN);\n    }\n  });\n};\n//open register modal window\nvar addClickRegisterHandler = function addClickRegisterHandler(login) {\n  _profileSecond.addEventListener(CONSTANTS.CLICK, function (e) {\n    if (login) {\n      var data = UTILS.getDataFromStorage();\n      data.login = false;\n      window.localStorage.setItem("form", JSON.stringify(data));\n      setTimeout(function () {\n        window.location.reload();\n      }, 100);\n    } else {\n      profile_overlayModal.classList.add(CONSTANTS.OPEN);\n      profile_modalRegister.classList.add(CONSTANTS.OPEN);\n      _profile.classList.remove(CONSTANTS.OPEN);\n    }\n  });\n};\n\n//open log in window\nvar addClickLogInProfileHandler = function addClickLogInProfileHandler(login, data) {\n  _profileFist.addEventListener(CONSTANTS.CLICK, function (e) {\n    if (login) {\n      profile_overlayModal.classList.add(CONSTANTS.OPEN);\n      profile_profileModal.classList.add(CONSTANTS.OPEN);\n      _profile.classList.remove(CONSTANTS.OPEN);\n      data && showNameUserProfile(data);\n    } else {\n      console.log("click else");\n      profile_modalLogin.classList.add(CONSTANTS.OPEN);\n      profile_overlayModal.classList.add(CONSTANTS.OPEN);\n      _profile.classList.remove(CONSTANTS.OPEN);\n    }\n  });\n};\n\n//handlers for closing register and log in modal windows\nvar addClickBtnCloseHandler = function addClickBtnCloseHandler() {\n  _btnsClose.forEach(function (btn) {\n    btn.addEventListener(CONSTANTS.CLICK, function (e) {\n      profile_overlayModal.classList.remove(CONSTANTS.OPEN);\n      profile_modalRegister.classList.remove(CONSTANTS.OPEN);\n      profile_modalLogin.classList.remove(CONSTANTS.OPEN);\n    });\n  });\n};\nvar addClickOverlayModalHandler = function addClickOverlayModalHandler() {\n  profile_overlayModal.addEventListener(CONSTANTS.CLICK, function (e) {\n    if (!e.target.closest(".modal__register") && !e.target.closest(".modal__login") && !e.target.closest(".modal__profile") && !e.target.closest(".modal__card")) {\n      this.classList.remove(CONSTANTS.OPEN);\n      profile_modalRegister.classList.remove(CONSTANTS.OPEN);\n      profile_modalLogin.classList.remove(CONSTANTS.OPEN);\n    }\n  });\n};\n\n//open  login modal  window in register window\nvar addClickLoginBtnRegisterHandler = function addClickLoginBtnRegisterHandler() {\n  _linkRegister.addEventListener(CONSTANTS.CLICK, function (e) {\n    e.preventDefault();\n    profile_modalRegister.classList.remove(CONSTANTS.OPEN);\n    profile_modalLogin.classList.add(CONSTANTS.OPEN);\n  });\n};\n\n//open register modal window in login window\nvar addClickRegisterBtnLoginHandler = function addClickRegisterBtnLoginHandler() {\n  _linkLogin.addEventListener(CONSTANTS.CLICK, function (e) {\n    e.preventDefault();\n    profile_modalRegister.classList.add(CONSTANTS.OPEN);\n    profile_modalLogin.classList.remove(CONSTANTS.OPEN);\n  });\n};\nvar changeMenuProfile = function changeMenuProfile(login, data) {\n  if (login) {\n    _profileFist.textContent = "My profile";\n    _profileSecond.textContent = "Log out";\n    _profileTitle.textContent = data.cardNum;\n  } else {\n    _profileFist.textContent = "Login in";\n    _profileSecond.textContent = "Register";\n    _profileTitle.textContent = "Profile";\n  }\n};\nvar addClickCopyIconHandler = function addClickCopyIconHandler() {\n  _cardIcon.addEventListener(CONSTANTS.CLICK, function () {\n    copyData(_cardNumber);\n  });\n};\nvar showNameUserProfile = function showNameUserProfile(data) {\n  var firstName = data.firstName,\n    lastName = data.lastName,\n    cardNum = data.cardNum;\n  _profilePhoto.textContent = "".concat(firstName.slice(0, 1).toUpperCase()).concat(lastName.slice(0, 1).toUpperCase());\n  _profileName.textContent = "".concat(firstName, " ").concat(lastName);\n  _cardNumber.textContent = cardNum;\n};\nfunction copyData(containerClass) {\n  var range = document.createRange();\n  range.selectNode(containerClass); //changed here\n  window.getSelection().removeAllRanges();\n  window.getSelection().addRange(range);\n  document.execCommand("copy");\n  window.getSelection().removeAllRanges();\n  alert("data copied");\n}\n\n;// CONCATENATED MODULE: ./src/js/register.js\n\n\nvar _registerBtn = UTILS.getElementFromDom(".register__button");\nvar _firstName = UTILS.getElementFromDom("#first-name");\nvar _lastName = UTILS.getElementFromDom("#last-name");\nvar register_email = UTILS.getElementFromDom("#email");\nvar register_password = UTILS.getElementFromDom("#password");\nvar _inputs = UTILS.getElementsFromDom(".register__form .input");\nvar register_overlayModal = UTILS.getElementFromDom(".overlay__modal");\nvar register_modalRegister = UTILS.getElementFromDom(".modal__register");\nvar addClickRegisterSignUpBtnHandler = function addClickRegisterSignUpBtnHandler(data) {\n  _registerBtn.addEventListener(CONSTANTS.CLICK, function (e) {\n    if (Object.values(data).filter(function (x) {\n      return x !== "";\n    }).length > 6 && data.password.length >= 8) {\n      saveForm(data);\n      setTimeout(function () {\n        window.location.reload();\n      }, 1);\n      register_overlayModal.classList.remove(CONSTANTS.OPEN);\n      register_modalRegister.classList.remove(CONSTANTS.OPEN);\n    } else {\n      console.log("check inputs");\n    }\n  });\n};\nvar sendData = function sendData(callback) {\n  var form = getDataFromForm();\n  callback(form);\n};\nvar getDataFromForm = function getDataFromForm() {\n  var form = {};\n  Array.from(_inputs).forEach(function (input) {\n    input.addEventListener("input", function (e) {\n      form.firstName = _firstName.value;\n      form.lastName = _lastName.value;\n      form.email = register_email.value;\n      form.password = register_password.value >= 8 ? register_password.value : "";\n      form.cardNum = getHexNum();\n      form.login = true;\n      form.visits = 1;\n      form.books = [];\n      form.countBooks = 0;\n    });\n  });\n  return form;\n};\nfunction saveForm(data) {\n  var json = JSON.stringify(data);\n  window.localStorage.setItem("form", json);\n}\nfunction getHexNum() {\n  return Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");\n}\n\n;// CONCATENATED MODULE: ./src/js/slider.js\n\nvar _btn_one = UTILS.getElementFromDom(".btn_one");\nvar _btn_two = UTILS.getElementFromDom(".btn_two");\nvar _btn_three = UTILS.getElementFromDom(".btn_three");\nvar _btn_four = UTILS.getElementFromDom(".btn_four");\nvar _btn_five = UTILS.getElementFromDom(".btn_five");\nvar _sliderBtns = UTILS.getElementsFromDom(".slider__buttons .button__container");\nvar _sliderContainer = UTILS.getElementFromDom(".slider__container");\nvar _sliderBtnLeft = UTILS.getElementFromDom(".slider__button_left");\nvar _sliderBtnRight = UTILS.getElementFromDom(".slider__button_right");\nvar count = 1;\nvar buttons = {\n  btn_one: _btn_one,\n  btn_two: _btn_two,\n  btn_three: _btn_three,\n  btn_four: _btn_four,\n  btn_five: _btn_five\n};\nvar arrNums = ["zero", "one", "two_2", "three_3", "four", "five"];\nvar slider_active = "active";\nvar disabled = "disabled";\nvar addSliderBtnsHandler = function addSliderBtnsHandler() {\n  _sliderBtns.forEach(function (btn) {\n    btn.addEventListener("click", function (e) {\n      var closestElement = e.target.closest(".button__container");\n      var numberBtn = closestElement.classList.value.split(" ").filter(function (x) {\n        return x.includes("btn_");\n      }).join("");\n      var classNameButton = closestElement.classList.value.split(" ").filter(function (x) {\n        return x.includes("btn_");\n      }).join("").replace(/btn_/, "");\n      if (window.innerWidth <= 768) {\n        if (classNameButton === "two") {\n          classNameButton = "two_2";\n        }\n        if (classNameButton === "three") {\n          classNameButton = "three_3";\n        }\n      }\n      if (closestElement.querySelector(".button_round").classList.contains(slider_active)) return;\n      changeClassesSliderBtns(_sliderBtns, buttons[numberBtn]);\n      changeClassesForSliderContainer(_sliderContainer, classNameButton);\n      addDisabledButtons(_sliderBtns);\n      addDisabledArrows();\n      listenEndTransition();\n    });\n  });\n};\n//slider arrow  left\nvar addClickArrowLeftHandler = function addClickArrowLeftHandler() {\n  if (count === 1) {\n    _sliderBtnLeft.classList.add(disabled);\n  }\n  _sliderBtnLeft.addEventListener("click", function (e) {\n    count--;\n    changeClassesSliderBtns(_sliderBtns, findSliderBtn(count));\n    _sliderBtnRight.classList.remove(disabled);\n    if (count === 1) {\n      _sliderBtnLeft.classList.add(disabled);\n    }\n    changeClassesForSliderContainer(_sliderContainer, arrNums[count]);\n    addDisabledArrows();\n    listenEndTransition();\n  });\n};\n//slider arrow right\nvar addClickArrowRightHandler = function addClickArrowRightHandler() {\n  if (count === 5) {\n    _sliderBtnRight.classList.add(disabled);\n  }\n  _sliderBtnRight.addEventListener("click", function (e) {\n    count++;\n    changeClassesSliderBtns(_sliderBtns, findSliderBtn(count));\n    _sliderBtnLeft.classList.remove(disabled);\n    if (count === 5) {\n      _sliderBtnRight.classList.add(disabled);\n    }\n    changeClassesForSliderContainer(_sliderContainer, arrNums[count]);\n    addDisabledArrows();\n    listenEndTransition();\n  });\n};\n\n//transition\nfunction listenEndTransition() {\n  _sliderContainer.addEventListener("transitionend", function () {\n    removeDisabledButtons(_sliderBtns);\n    removeDisabledArrows();\n    if (count !== 1) {\n      _sliderBtnLeft.classList.remove(disabled);\n    }\n    if (count !== 5) {\n      _sliderBtnRight.classList.remove(disabled);\n    }\n  });\n}\nfunction changeClassesSliderBtns(arr, el) {\n  console.log(el);\n  var obj = {\n    one: 1,\n    two: 2,\n    three: 3,\n    four: 4,\n    five: 5\n  };\n  var number = el.classList.value.split(" ").filter(function (x) {\n    return x.includes("btn");\n  }).join("").replace(/btn_/, "");\n  count = obj[number];\n  arr.forEach(function (el) {\n    el.querySelector(".button_round").classList.remove(slider_active);\n  });\n  el.querySelector(".button_round").classList.add(slider_active);\n}\nfunction changeClassesForSliderContainer(container, number) {\n  container.classList.remove("one", "two", "two_2", "three", "three_3", "four", "five");\n  container.classList.add(number);\n}\nfunction addDisabledButtons(btns) {\n  btns.forEach(function (btn) {\n    btn.classList.add("disabled");\n  });\n}\nfunction removeDisabledButtons(btns) {\n  btns.forEach(function (btn) {\n    btn.classList.remove("disabled");\n  });\n}\nfunction addDisabledArrows() {\n  _sliderBtnLeft.classList.add(disabled);\n  _sliderBtnRight.classList.add(disabled);\n}\nfunction removeDisabledArrows() {\n  if (count !== 1) {\n    _sliderBtnLeft.classList.remove(disabled);\n  }\n  if (count !== 5) _sliderBtnRight.classList.remove(disabled);\n}\nfunction findSliderBtn(num) {\n  var arr = [_btn_one, _btn_two, _btn_three, _btn_four, _btn_five];\n  return arr[num - 1];\n}\n\n;// CONCATENATED MODULE: ./src/index.js\n\n\n\n\n\n\n\n\n\n\n\n\n\n//\nvar _visitNumbers = UTILS.getElementsFromDom(".visit__numbers");\nvar _booksNumber = UTILS.getElementsFromDom(\'.books-number\');\nvar _booksList = UTILS.getElementFromDom(\'.books__list\');\nvar startSticky = 1700;\nvar endSticky = 4000;\nvar login = false;\nwindow.addEventListener("load", function () {\n  var data = setData();\n  if (data) {\n    login = data.login;\n    setDataForProfile(data);\n  } else {\n    login = (data === null || data === void 0 ? void 0 : data.login) || false;\n  }\n  //popUp.js\n  addHamburgerClickHandler();\n  addOverlayClickHandler();\n  addNavItemsClickHandler();\n\n  //slider.js\n  addSliderBtnsHandler();\n  addClickArrowLeftHandler();\n  addClickArrowRightHandler();\n\n  //profile.js\n  addClickProfileIconHandler(login);\n  addClickBodyHandler();\n  addClickRegisterHandler(login);\n  addClickLoginBtnRegisterHandler();\n  addClickRegisterBtnLoginHandler();\n  changeMenuProfile(login, data);\n  addClickBtnCloseHandler();\n  addClickOverlayModalHandler();\n  addClickCopyIconHandler();\n  addClickLogInProfileHandler(login, data);\n\n  //libraryCards.js\n  addClickFormButtonHandler(data);\n  addClickSignBtnCardsHandler();\n  addClickLogInBtnCardsHandler();\n  closeBtnOpenIcons(login);\n  changeInputsPlaceHolder(login, data);\n  closeButtons(login);\n  addClickProfileBtnCards();\n  changeTextReaderCard(login);\n\n  //register.js\n  sendData(addClickRegisterSignUpBtnHandler);\n\n  //header.js\n  changePersonIcon(data, login);\n\n  //favorites.js\n  addClickCardBtnHandler(login);\n  addClickInputRadioHandler();\n\n  //login.js\n  addClickBtnSignUpLoginHandler();\n\n  //modal_card.js\n  addClickBuyBtnCardHandler();\n  addClickCloseBtnModalCardHandler();\n\n  //sticky favorites\n  if (window.innerWidth < 769) {\n    window.onscroll = function () {\n      implementSticky(startSticky, endSticky);\n    };\n  }\n  console.log("login:", login);\n});\nwindow.addEventListener("resize", function () {\n  var _sliderContainer$clas;\n  var arr = ["one", "two", "two_2", "three", "three_3", "four", "five"];\n  var _sliderContainer = UTILS.getElementFromDom(".slider__container");\n  var _sliderBtns = UTILS.getElementsFromDom(".slider__buttons .button__container");\n  (_sliderContainer$clas = _sliderContainer.classList).remove.apply(_sliderContainer$clas, arr);\n  _sliderContainer.classList.add("one");\n  _sliderBtns.forEach(function (el) {\n    el.querySelector(".button_round").classList.remove("active");\n  });\n  _sliderBtns[0].querySelector(".button_round").classList.add("active");\n\n  //sticky for favorites\n  if (window.innerWidth < 769) {\n    window.onscroll = function () {\n      implementSticky(startSticky, endSticky);\n    };\n  }\n});\nfunction setData() {\n  var data;\n  var json = window.localStorage.getItem("form");\n  if (json || json !== "undefined") {\n    data = JSON.parse(json);\n  } else {\n    data = null;\n  }\n  return data;\n}\nfunction setDataForProfile(data) {\n  console.log(_visitNumbers);\n  _visitNumbers.forEach(function (node) {\n    return node.textContent = data.visits;\n  });\n  _booksNumber.forEach(function (node) {\n    return node.textContent = data.countBooks;\n  });\n  data === null || data === void 0 ? void 0 : data.books.forEach(function (book) {\n    var li = document.createElement(\'li\');\n    li.textContent = book;\n    _booksList.append(li);\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js_+_12_modules?')},208:()=>{eval("// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/sass/style.scss?")}};__webpack_modules__[435]();var __webpack_exports__={};__webpack_modules__[208]()})();