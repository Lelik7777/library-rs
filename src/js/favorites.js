import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _cardsBtns = UTILS.getElementsFromDom(".favorites__cards .card__button");
const _modalLogin = UTILS.getElementFromDom(".modal__login");
const _overlayModal = UTILS.getElementFromDom(".overlay__modal");
const _inputsFavorites = UTILS.getElementsFromDom(".favorites__input");
const _cardsFavorites = UTILS.getElementsFromDom(".favorites__cards");
const _cardModal = UTILS.getElementFromDom(".modal__card");
const _bankNum=UTILS.getElementFromDom("#bank__card");
const _expCode1=UTILS.getElementFromDom("#exp-code_1");
const _expCode2=UTILS.getElementFromDom("#exp-code_2");
const _cvc=UTILS.getElementFromDom("#card__cvc");
const _nameCard=UTILS.getElementFromDom("#card__name");
const _postalCard=UTILS.getElementFromDom("#card__postal");
const _city=UTILS.getElementFromDom("#card__city");
const _inputs=UTILS.getElementsFromDom('.card__container__form input');


//todo when log in true then  open модальное окно BUY A LIBRARY CARD
const addClickCardBtnHandler = (login) => {
  _cardsBtns.forEach((btn) => {
    btn.addEventListener(CONSTANTS.CLICK, function (e) {
      if (login) {
        _overlayModal.classList.add(CONSTANTS.OPEN);
        _cardModal.classList.add(CONSTANTS.OPEN);
        //console.log(getDateFromForm(_inputs));
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
//todo разобраться,как получить данные из инпутов, удалить эту ф-цию из index.js
function getDateFromForm(inputs) {
  const form={}
  console.log(_bankNum);
  Array.from(inputs).forEach((input) => {
// input.addEventListener('input', function (e) {
//   form.bank=_bankNum.value;
//   form.ecpCode1=_expCode1.value;
//   form.ecpCode2=_expCode2.value;
//   form.cvc=_cvc.value;
//   form.name=_nameCard.value;
//   form.postal=_postalCard.value;
//   form.city=_city.value;
// });
console.log(form);
return form;
  });
}
export { addClickCardBtnHandler, addClickInputRadioHandler,getDateFromForm };
