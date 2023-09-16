export const UTILS = {
  getElementFromDom(selector, element = document) {
    return element.querySelector(selector);
  },
  getElementsFromDom(selector, element = document) {
    return element.querySelectorAll(selector);
  },
  deletePointFromSelector(selector) {
    return selector.replace(/\./g, "");
  },
  getDataFromStorage() {
    const json = window.localStorage.getItem("form");
    const data = JSON.parse(json);
    return data;
  },
};
