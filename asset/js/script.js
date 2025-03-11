const ul = document.getElementById('usful_info__menu');
const changeTitle = document.getElementById('changeTitle');
const changeText = document.getElementById('changeText');

let activeElement = null;

ul.addEventListener('click', function(event) {
    const target = event.target;
    const li = target.closest('li');


    if (activeElement) {
        activeElement.querySelector('a').style.color = "";
    }

    activeElement = li;
    target.style.color = "#A80021";

    changeTitle.textContent = target.textContent;
    changeText.textContent = li.getAttribute('data-text');
})


const menuToggle = document.querySelector('#menu_toggle')
const body = document.querySelector('body');

menuToggle.addEventListener('click', ()=>{
    body.classList.toggle('burger_click');
})


document.addEventListener('DOMContentLoaded', ()=>{
    const checkbox = document.getElementById('policy');
    const aboutUsBtn = document.getElementById('about_us__btn');
    aboutUsBtn.classList.add('disabled');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            aboutUsBtn.classList.remove('disabled');
        } else {
            aboutUsBtn.classList.add('disabled');
        }
    });
})


document.addEventListener('DOMContentLoaded', ()=>{
    const phoneInput = document.getElementById('phoneInput');

    phoneInput.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, '');

        if (value.length > 0) {
            value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
        }

        this.value = value;
    });
})