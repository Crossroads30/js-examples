// Burger Menu
const burger = () => {
    const burgerBtn = document.querySelector('.hamburger');
    const headerMenu = document.querySelector('.header__nav');
    const menuItem = document.querySelectorAll('.navigation__link');

    const burgerClick = () => {
            burgerBtn.classList.toggle('hamburger-active');
            headerMenu.classList.toggle('header__nav-active');
            document.body.classList.toggle('lock');
    };
    const closeBurgerMenu = () => {
        burgerBtn.classList.toggle('hamburger-active')
        headerMenu.classList.toggle('header__nav-active');
        document.body.classList.toggle('lock');
    };

    const pressOutArea = () => {
        document.addEventListener('click', (event) => {
            const isOutputArea = headerMenu.contains(event.target) || burgerBtn.contains(event.target);
            if (!isOutputArea) {
                burgerBtn.classList.remove('hamburger-active')
                headerMenu.classList.remove('header__nav-active')
                document.body.classList.remove('lock');
            } 
        });
    }

    burgerBtn.addEventListener('click', burgerClick);
    menuItem.forEach(item => {
            item.addEventListener('click', () => {
                closeBurgerMenu();
            })
        })
    pressOutArea();
}
burger();


// Service Buttons

const serviceBtn = document.querySelectorAll('.button__service');

const btnGarden = document.querySelector('.button-garden');
const btnLawn = document.querySelector('.button-lawn');
const btnPlanting = document.querySelector('.button-planting');

const allCards = document.querySelectorAll('.card');

const cardsGarden = document.querySelectorAll('.garden-card');
const cardsLawn = document.querySelectorAll('.lawn-card');
const cardsPlanting = document.querySelectorAll('.planting-card');
let statusBtn = false;
let count = 0;
const setUnblurCards = (cardsGroup) => {
    cardsGroup.forEach((card) => {
        if(card.classList.contains('unblured')){
            card.classList.remove('unblured');
        } else{
          card.classList.add('unblured');  
        }
    })
}
const setBlur = (cards) => {
    cards.forEach(card =>{
        if(!card.classList.contains('unblured')){
            card.classList.add('card__unactive'); 
        } else if(card.classList.contains('card__unactive')){
            card.classList.remove('card__unactive'); 
        }
    })
}
// функции для кнопок (активация и сброс стилей)
const activeBtn = (button) => {
    button.classList.toggle('button__service-active');
    if(button.classList.contains('button__service-active')){
        count ++;
        statusBtn = true;
    } else {
        count --;
        statusBtn = false;
    } 
    if(count > 2 && !button.currentTarget ){
        serviceBtn.forEach(btn => {
            if(btn.classList.contains('button__service-active')){
                btn.classList.remove('button__service-active')
                count = 0;
                statusBtn = false;
            }
        })
        removed(allCards);
    }
}
function removed (cards){
    cards.forEach(card=> {
        if(card.classList.contains('unblured')){
            card.classList.remove('unblured');
            card.classList.remove('card__unactive');
        }
    })
}
btnGarden.addEventListener('click', (event) =>{
    setUnblurCards(cardsGarden);
    setBlur(allCards);
    activeBtn(btnGarden);

    if(statusBtn != true && btnGarden.contains(event.target)){
        if(count < 1){
            allCards.forEach(card => {
                card.classList.remove('card__unactive')
            }) 
        }
        if(count == 2){
            cardsGarden.forEach(card => {
            card.classList.add('card__unactive')
        })
        }        
    }
})

btnLawn.addEventListener('click', (event) => {
    setUnblurCards(cardsLawn);
    setBlur(allCards)
    activeBtn(btnLawn);
    if(statusBtn != true && btnLawn.contains(event.target)){
        if(count < 1){
            allCards.forEach(card => {
                card.classList.remove('card__unactive')
            }) 
        }
        if(count == 2){
        cardsLawn.forEach(card => {
            card.classList.add('card__unactive')
            })
        } 
    }
})
btnPlanting.addEventListener('click', (event) => {
    setUnblurCards(cardsPlanting);
    setBlur(allCards)
    activeBtn(btnPlanting);
    if(statusBtn != true && btnPlanting.contains(event.target)){
        if(count < 1){
            allCards.forEach(card => {
                card.classList.remove('card__unactive')
            }) 
        }
        if(count == 2){
        cardsPlanting.forEach(card => {
            card.classList.add('card__unactive')
            })
        } 
    }
})

/// PRICES ACCORDION

const accordionsBtn = document.querySelectorAll(".accordion__control");
const accordions = document.querySelectorAll('.accordion__item')

accordionsBtn.forEach(el => {
    el.addEventListener('click', function() {
        const self = el.parentNode;
        if(self.classList.contains('active')){
            self.classList.remove('active')
        } else {
            accordions.forEach(item => {
                item.classList.remove('active');
                el.parentNode.classList.add('active');
            })
        }
    })
})

/// Custom Select

import cities from '../assets/js/cities.js';

const selector = document.querySelector('.select');
const adressCard = document.querySelector('.select__container');
const selectBtn = document.querySelector('.select__control');

const city = document.querySelector('.select__title');
let cityPhone = document.querySelector('.phone__number');

/// основная функция которая отслеживает нажатия на элементы селекта.
const selectCity = () => {
    const selectItem = document.querySelectorAll('.select__item');

    selectBtn.addEventListener('click', selectToggle);
    selectItem.forEach(item => {
        item.addEventListener('click',  selectChooseItem)
    });
}
// фунция закрытия при клике вне селекта
const clickOut = () => {
    document.addEventListener('click', (event) => {
        let isOutputArea = selector.contains(event.target);
        let adressIsShowed = adressCard.classList.contains('showed');
        if (!isOutputArea && selector.classList.contains('active') && city.innerText == 'City'){
            selector.classList.remove('active');
            selectBtn.classList.remove('active-select');
            document.querySelector('.select__ico').classList.remove('active-ico');
        } else if (!isOutputArea && city.innerText !== 'City' && !adressIsShowed) {
            document.querySelector('.select__ico').classList.remove('active-ico');
            selector.classList.remove('active');
            adressCard.classList.add('showed')
        }
    });
}
// функция тоглит класс у всего селекта на эктив
function selectToggle() {
    selector.classList.toggle('active');
    document.querySelector('.select__ico').classList.toggle('active-ico');
    cityValueEmpty();
    
    if(adressCard.classList.contains('showed')){
        adressCard.classList.remove('showed')
    } else if(city.innerText !== 'City') {
        adressCard.classList.add('showed')
    }
}
// функция для проверки наличия выбранного города, если город не выбран, отменяет класс актив
function cityValueEmpty(){
    if(selector.classList.contains('active')){
        selectBtn.classList.add('active-select')
    } else if(city.innerText == 'City') {
        selectBtn.classList.remove('active-select')
    }
}
// функция для элементов списка, при нажатии подставляет выбранное значение, также заполняет функции для показа блока с карточкой адреса и 
function selectChooseItem() {
    let text = this.innerText,
        select = this.closest('.select'),
        currentText = select.querySelector('.select__title');
    currentText.innerText = text;
    select.classList.remove('active');
    document.querySelector('.select__ico').classList.toggle('active-ico');

    setTimeout(function(){
       adressCard.classList.add('showed'); 
    }, 300) 
    showedCity();
};
// функция которая подставляет выбранное значение из данных по городам.
function showedCity() {
    let cityName = document.querySelector('.city__name');
    let cityAdress = document.querySelector('.office__adress');
    city.classList.add('active-title');
    switch(city.innerText) {
        case cities[0].city :
            cityName.textContent = cities[0].city;
            cityPhone.textContent = cities[0].phone;
            cityAdress.textContent = cities[0].adress;
            break;
        case cities[1].city :
            cityName.textContent = cities[1].city;
            cityPhone.textContent = cities[1].phone;
            cityAdress.textContent = cities[1].adress;
            break;
        case cities[2].city :
            cityName.textContent = cities[2].city;
            cityPhone.textContent = cities[2].phone;
            cityAdress.textContent = cities[2].adress;
            break;
        case cities[3].city :
            cityName.textContent = cities[3].city;
            cityPhone.textContent = cities[3].phone;
            cityAdress.textContent = cities[3].adress;
            break;
    }
}
function callButton() {
    let tel = cityPhone.textContent
    window.open('tel:'+ `${tel}`)
}
clickOut();
selectCity();
document.querySelector('.button__select').addEventListener('click', callButton);
