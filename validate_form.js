'use strict';
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
}
