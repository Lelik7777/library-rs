import { CONSTANTS } from "./config";
import { UTILS } from "./utils";


const _email = UTILS.getElementFromDom("#email_login");
const _password = UTILS.getElementFromDom("#password_login");
const _btnSignUp = UTILS.getElementFromDom(".login__form .register__button");

const addClickBtnSignUpLoginHandler = () => {
  _btnSignUp.addEventListener(CONSTANTS.CLICK, function (e) {
  
if(_email.value&&_password.value){
const form=JSON.parse(window.localStorage.getItem('form'));
if((_email.value===form.email||_email.value===form.cardNum)&&_password.value===form.password){
  form.login=true;
  window.localStorage.setItem('form',JSON.stringify(form));
}else{
  alert('wrong entered data')
}
}

  });
};


export { addClickBtnSignUpLoginHandler};
