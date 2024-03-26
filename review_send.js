'use strict';

const userText = document.querySelector('.user-review');
const userTextCounter = document.querySelector('.counter');
userText.addEventListener('input', symbolCalculate);
const maxSymbols = 500;
let remainedSymbols = maxSymbols;

function symbolCalculate(e) {
    remainedSymbols = maxSymbols - e.target.value.length;
    userTextCounter.textContent = `${remainedSymbols}/${maxSymbols}`;
}

const formReview = document.getElementById('review-form');
formReview.addEventListener('submit', sendReview);

async function sendReview(e) {
    e.preventDefault();
    const popup_right = document.querySelector('._right');
    const popup_wrong = document.querySelector('._wrong');
    popup_right.classList.remove('_open');
    popup_wrong.classList.remove('_open');
    console.log(popup_right);

    let error = formValidate(formReview); //см файл form_send.js

    //получаем данные формы с помощью формдата() вытягивает все поля из формы
    let formdata = new FormData(formReview);

    //если из ф-йии вернулся 0 ошибок, то отправляем форму !!!ПРОПИСАТЬ!!!!
    if (error === 0) {
        console.log(formdata);
        popup_right.classList.add('_open');
        formReview.reset();
    }

    else {
        popup_wrong.classList.add('_open');
    }


}


