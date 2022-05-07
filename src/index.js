// import add from "./js/add.js";
// import { mult, sub } from "./js/calc";
// import * as calc from "./js/calc";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";
import Typed from "typed.js";
import tippy from "tippy.js";
import "tippy.js/dist/tippy-bundle.umd";
import { info, alert, success } from "@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

import Siema from "siema";
import "./sass/main.scss";

const typed = new Typed(".element", {
  strings: ["First ^1000 sentence.", "Logo HTML CSS JS"],
  typeSpeed: 30,
});

tippy("#myButton", {
  content: "My tooltip!",
  trigger: "click",
});

flatpickr("#date-picker", {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
});

info({
  text: "Notice me!",
});
const mySiema = new Siema({ selector: ".siema" });
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

btnPrev.addEventListener("click", () => mySiema.prev());
btnNext.addEventListener("click", () => mySiema.next());
