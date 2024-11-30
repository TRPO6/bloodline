console.log('555')

const menuToggle = document.querySelector('#menu_toggle');

const body = document.querySelector('body');



menuToggle.addEventListener( 'click', ()=>{
    console.log('click')

    body.classList.add('_lock');


})