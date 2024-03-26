'use strict'

//Бургер
const iconMenu = document.querySelector('.nav-icon');
const icons = iconMenu.querySelectorAll('span');
const logo = document.querySelector('.logo-header');
console.log(icons);
if (iconMenu) {
    const navBox = document.querySelector('.nav-box');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');//запретить скролл при открытом меню
        icons.forEach(icon => {
            icon.classList.toggle('_hidden');
        });//меняю крестик и бургер
        navBox.classList.toggle('_active');
        logo.classList.toggle('_show');
    })
}


//---------------------ОТПРАВКА ФОРМЫ------------------------------



//---------------------счетчик знаков в отзыве-------------




console.log('hello');