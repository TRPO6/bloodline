const changeTitle = document.getElementById('usful_info_title');
const changeText = document.getElementById('usful_info_text');



function getEventTarget(e) {
    e = e || window.Event;
    return e.target || e.srcElement;
}


const ul = document.getElementById('usful_info__menu');
const usfulInfoItem = document.getElementsByClassName('usful_info__item');


ul.onclick = function(event) {
    var target = getEventTarget(event);

    var help = ul.getElementsByClassName('active');
    if (help.length != 0){
        help[0].classList.remove('active');
    }

    changeTitle.textContent = target.innerHTML;

    target.classList.add('active');

    const target_id =  target.getAttribute('id');

    if (target_id == "usful_info__item_1"){
        changeText.textContent = "text_1";
    } else if (target_id == "usful_info__item_2"){
        changeText.textContent = "У собак донация занимает примерно 30-40 минут, а у кошек 15-20 минут. Кровь у животных берется без наркоза, т.к. это абсолютно безболезненная процедура.";
    }else if (target_id == "usful_info__item_3"){
        changeText.textContent = "text_3";
    }else if (target_id == "usful_info__item_4"){
        changeText.textContent = "text_4";
    }else if (target_id == "usful_info__item_5"){
        changeText.textContent = "text_5";
    }else if (target_id == "usful_info__item_6"){
        changeText.textContent = "text_6";
    }else if (target_id == "usful_info__item_7"){
        changeText.textContent = "text_7";
    }else if (target_id == "usful_info__item_8"){
        changeText.textContent = "text_8";
    }else {
        changeText.textContent = "text_9";
    }
};


const menuToggle = document.querySelector('#menu_toggle')
const body = document.querySelector('body');

menuToggle.addEventListener('click', ()=>{
    body.classList.toggle('burger_click');
})


