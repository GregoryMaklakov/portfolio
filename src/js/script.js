// Команда - при нажатии на гамбурсер выезжает меню и при нажатии на крестик оно скрывается 

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    
});

//создание елементов шкала

const percents = document.querySelectorAll('.skills__percent'),
    mains = document.querySelectorAll('.skills__main');

    percents.forEach((item, i) => {
        mains[i].style.width = item.innerHTML;
});



