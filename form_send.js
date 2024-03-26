'use strict';

// получаем всю форму по id-form
const form = document.getElementById('callbackform');

//вешаем событие на эту форму (при отправке формы, мы должны перейти в ф-цию formSend)
form.addEventListener('submit', formSend);

//ее и пишем
async function formSend(e) {

    //первым делом запрещаем стандартное поведение
    e.preventDefault();
    //ищем попапы и прячем
    const popup_right = document.querySelector('._right');
    const popup_wrong = document.querySelector('._wrong');
    popup_right.classList.remove('_open');
    popup_wrong.classList.remove('_open');
    //далее простая валидация формы
    //объяв. переменную и присваиваем ей результат работы ф-ции formValidate, куда передаем собст-но форму
    let error = formValidate(form);

    //получаем данные формы с помощью формдата() вытягивает все поля из формы
    let formdata = new FormData(form);

    //если из ф-йии вернулся 0 ошибок, то отправляем форму !!!ПРОПИСАТЬ!!!!
    if (error === 0) {
        console.log(formdata);


        popup_right.classList.add('_open');//показываем успешный попап и чистим форму
        form.reset();
    }

    else {
        popup_wrong.classList.add('_open');//показываем неуспешный попап
    }

}

