
import { UTILS } from "./utils";

const _profileIcon = UTILS.getElementFromDom(".profile__icon");


//flag for login: if log out then flag=false
const changePersonIcon = (data, login ) => {
  if (data && login) {
const {firstName,lastName}=data;
    _profileIcon.textContent = `${firstName.slice(0, 1).toUpperCase()}${lastName.slice(0, 1).toUpperCase()}`;
    _profileIcon.setAttribute('title',`${firstName} ${lastName}`)
    showName();
  } else {

    showIcon();
  }
};

const showName = () => {
  _profileIcon.classList.remove('icon__profile');

};
const showIcon = () => {
  _profileIcon.classList.add('icon__profile');

};

export { changePersonIcon };
