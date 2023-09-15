import { UTILS } from "./utils";

export function implementSticky(start, end) {
  if (window.pageYOffset > start && window.pageYOffset <= end) {
    UTILS.getElementFromDom(".favorites__inputs").classList.add("sticky");
  } else {
    UTILS.getElementFromDom(".favorites__inputs").classList.remove("sticky");

  }
}
