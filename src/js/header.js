import { CONSTANTS } from "./config";
import { UTILS } from "./utils";

const _profileIcon = UTILS.getElementFromDom(".profile__icon");
const _profileName = UTILS.getElementFromDom(".profile__name");

//flag for login: if log out then flag=false
const changePersonIcon = (data, flag = true) => {
  if (data && flag) {
const {firstName,lastName}=data;
    _profileName.textContent = `${firstName.slice(0, 1).toUpperCase()}${lastName.slice(0, 1).toUpperCase()}`;
    _profileName.setAttribute('title',`${firstName} ${lastName}`)
    showName();
  } else {
    console.log(false);
    closeIcon();
  }
};

const showName = () => {
  _profileIcon.classList.remove(CONSTANTS.OPEN);
  _profileName.classList.add(CONSTANTS.OPEN);
};
const closeIcon = () => {
  _profileIcon.classList.add(CONSTANTS.OPEN);
  _profileName.classList.remove(CONSTANTS.OPEN);
};

export { changePersonIcon };
