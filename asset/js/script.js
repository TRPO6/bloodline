const data = {
    0: 'текст 1',
    1: 'текст 2',
    2: 'текст 3',
    3: 'текст 4',
    4: 'текст 5',
    5: 'текст 6',
    6: 'текст 7',
    7: 'текст 8',
    8: 'текст 9',
};


const section_usful_info = document.querySelector('.usful_info');



if(section_usful_info){


    const usful_info__text = section_usful_info.querySelector('.usful_info__text');
    const usful_info__text__title = usful_info__text.querySelector('.usful_info__text__title');
    const usful_info__text__describe = usful_info__text.querySelector('.usful_info__text__describe');




    // ---------------------------------------------------------------------------------------------------



    const usful_info__menu = section_usful_info.querySelector('.usful_info__menu');
    const usful_info__list = usful_info__menu.querySelectorAll('li');
    usful_info__list.forEach( el =>{
        el.addEventListener('click', () =>{

            usful_info__text__describe.innerHTML = data[el.getAttribute('data-id')];
            usful_info__text__title.textContent = el.textContent;

            usful_info__list.forEach( el =>{
               if (el.classList.contains('active')){
                el.classList.remove('active');
               }
            })
            el.classList.add('active')
        })
    });
 
}



const menuToggle = document.querySelector('#menu_toggle')
const body = document.querySelector('body');



menuToggle.addEventListener( 'click', ()=>{
    console.log('click')

    body.classList.add('_lock');


})