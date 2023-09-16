import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _bankNum = UTILS.getElementFromDom("#bank__card__number");
const _expCode1 = UTILS.getElementFromDom("#exp-code_1");
const _expCode2 = UTILS.getElementFromDom("#exp-code_2");
const _cvc = UTILS.getElementFromDom("#card__cvc");
const _nameCard = UTILS.getElementFromDom("#card__name");
const _postalCard = UTILS.getElementFromDom("#card__postal");
const _city = UTILS.getElementFromDom("#card__city");
const _buyBtn = UTILS.getElementFromDom(".modal__card__form__button .button");
const _overlayModal = UTILS.getElementFromDom(".overlay__modal");
const _modalCard = UTILS.getElementFromDom(".modal__card");

const addClickBuyBtnCardHandler = () => {
  _buyBtn.addEventListener(CONSTANTS.CLICK, function (e) {
    const data = fillForm();
    if (
      data.bank.length === 9 &&
      data.ecpCode1.length === 3 &&
      data.ecpCode2.length === 3 &&
      data.cvc.length === 3 &&
      data.name.length > 3 &&
      data.postal.length > 3 &&
      data.city.length > 4
    ) {
      _overlayModal.classList.remove(CONSTANTS.OPEN);
      _modalCard.classList.remove(CONSTANTS.OPEN);
      setTimeout(() => {
        location.reload();
      }, 10);
    } else {
      alert("entered data wrong ");
    }
  });
};

const fillForm = () => {
  const form = {};
  form.bank = _bankNum.value;
  form.ecpCode1 = _expCode1.value;
  form.ecpCode2 = _expCode2.value;
  form.cvc = _cvc.value;
  form.name = _nameCard.value;
  form.postal = _postalCard.value;
  form.city = _city.value;
  return form;
};


export { addClickBuyBtnCardHandler };
