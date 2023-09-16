import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _cardsBtns = UTILS.getElementsFromDom(".favorites__cards .card__button");
const _modalLogin = UTILS.getElementFromDom(".modal__login");
const _overlayModal = UTILS.getElementFromDom(".overlay__modal");
const _inputsFavorites = UTILS.getElementsFromDom(".favorites__input");
const _cardsFavorites = UTILS.getElementsFromDom(".favorites__cards");
const _cardModal = UTILS.getElementFromDom(".modal__card");

const addClickCardBtnHandler = (login) => {
  _cardsBtns.forEach((btn) => {
    btn.addEventListener(CONSTANTS.CLICK, function (e) {
      if (login) {
        _overlayModal.classList.add(CONSTANTS.OPEN);
        _cardModal.classList.add(CONSTANTS.OPEN);
        btn.textContent = "Own";
        btn.disabled = true;
        const book = btn
          .closest(".card")
          .querySelector(".card_subtitle")
          .textContent.replace(/\n+\s+/g, "");
        let data = UTILS.getDataFromStorage();
        data.books.push(book);
        data.countBooks++;
        window.localStorage.setItem("form", JSON.stringify(data));
      } else {
        _modalLogin.classList.add(CONSTANTS.OPEN);
        _overlayModal.classList.add(CONSTANTS.OPEN);
      }
    });
  });
};

const addClickInputRadioHandler = () => {
  _inputsFavorites.forEach((radio) => {
    radio.addEventListener(CONSTANTS.CLICK, function (e) {
      _cardsFavorites.forEach((card) => {
        card.classList.add(CONSTANTS.HIDDEN);
        if (card.classList.contains(this.value)) {
          card.classList.remove(CONSTANTS.HIDDEN);
        }
      });
    });
  });
};

export { addClickCardBtnHandler, addClickInputRadioHandler };
