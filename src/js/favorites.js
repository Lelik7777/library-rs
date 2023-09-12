import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _cardsBtns = UTILS.getElementsFromDom(".favorites__cards .card__button");
const _modalLogin = UTILS.getElementFromDom(".modal__login");
const _overlayModal = UTILS.getElementFromDom(".overlay__modal");
const _inputsFavorites = UTILS.getElementsFromDom(".favorites__input");
const _cardsFavorites = UTILS.getElementsFromDom(".favorites__cards");

//todo when log in true then  open модальное окно BUY A LIBRARY CARD
const addClickCardBtnHandler = () => {
  _cardsBtns.forEach((btn) => {
    btn.addEventListener(CONSTANTS.CLICK, function (e) {
      _modalLogin.classList.add(CONSTANTS.OPEN);
      _overlayModal.classList.add(CONSTANTS.OPEN);
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
