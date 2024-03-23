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


// получаем всю форму по id-form
const form = document.getElementById('callbackform');

//вешаем событие на эту форму (при отправке формы, мы должны перейти в ф-цию formSend)
form.addEventListener('submit', formSend);

//ее и пишем
async function formSend(e) {

    //первым делом запрещаем стандартное поведение
    e.preventDefault();

    //далее простая валидация формы
    //объяв переменную и присваиваем ей результат работы ф-ции formValidate, куда передаем собст-но форму
    let error = formValidate(form);

    //получаем данные формы с помощью формдата() вытягивает все поля из формы
    let formdata = new FormData(form);

    //если из ф-йии вернулся 0 ошибок, то отправляем форму !!!ПРОПИСАТЬ!!!!





    if (error === 0) {
        alert('данные проверены, как бы отправить их бэку')
    }
    else {
        alert('Заполните обязательные поля');
    }

}

function formValidate(form) {
    let error = 0;
    let inputs = document.querySelectorAll('.form-input')
    console.log(inputs);
    //сначала уберем у все класс error
    for (let i = 0; i < inputs.length; i++) {
        removeError(inputs[i]);
        if (inputs[i].classList.contains('_user-phone')) {
            //если не прошел проверку в ф-ции phoneTest
            if (phoneTest(inputs[i])) {
                //то добавляем класс error
                addError(inputs[i]);
                error++;
            }
        }
        else {
            //проверка на пустое значение
            if (inputs[i].value === '') {
                addError(inputs[i]);
                error++;
            }
        }
    } return error;
}


function addError(input) {
    input.parentElement.classList.add('_error-icon');
    input.classList.add('_error');
}

function removeError(input) {
    input.parentElement.classList.remove('_error-icon');
    input.classList.remove('_error');
}
function phoneTest(input) {
    console.log(input.value);
    return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
    // return !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.

}







