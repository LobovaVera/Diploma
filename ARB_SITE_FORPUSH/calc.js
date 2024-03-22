"use strict";
 // рассчеты калькулятора
 const methodChoise = document.getElementsByName('arb_method');
 const calcBtn = document.querySelector("#calc-btn");
 const calcForm = document.querySelector('calc');
 /**
 * функция isCheck возвращает выбранный элемент на чистом JS без каких-либо библиотек
 * @param name 
 * @returns {Element}
 */
function isCheck(){
 for (var i = 0; i < methodChoise.length; i++) {
    if (methodChoise[i].type == "radio" && methodChoise[i].checked) {
        alert("selected: " + methodChoise[i].value);
    }
}
}
calcBtn.addEventListener('click', isCheck());

const form = document.querySelector("form");
const log = document.querySelector("#log");

calcForm.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}\r`;
    }
    log.innerText = output;
    event.preventDefault();
  },
  false,
);