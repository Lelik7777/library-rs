import { UTILS } from "./utils";

const _bankNum=UTILS.getElementFromDom("#bank__card__number");
const _expCode1=UTILS.getElementFromDom("#exp-code_1");
const _expCode2=UTILS.getElementFromDom("#exp-code_2");
const _cvc=UTILS.getElementFromDom("#card__cvc");
const _nameCard=UTILS.getElementFromDom("#card__name");
const _postalCard=UTILS.getElementFromDom("#card__postal");
const _city=UTILS.getElementFromDom("#card__city");
const _inputs=UTILS.getElementsFromDom('.card__container__form input');
const _buyBtn=UTILS.getElementFromDom('.modal__card__form__button .button');

const addClickBuyBtnCardHandler=() => {

  console.log('buy');
}

//todo разобраться,как получить данные из инпутов, удалить эту ф-цию из index.js
function getDateFromForm(inputs) {
  const form={}
  console.log(_bankNum);
  Array.from(inputs).forEach((input) => {
input.addEventListener('input', function (e) {
  form.bank=_bankNum.value;
  form.ecpCode1=_expCode1.value;
  form.ecpCode2=_expCode2.value;
  form.cvc=_cvc.value;
  form.name=_nameCard.value;
  form.postal=_postalCard.value;
  form.city=_city.value;
});
console.log(form);
return form;
  });
}
export{addClickBuyBtnCardHandler}