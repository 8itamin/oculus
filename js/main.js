'use strict'

const tabItem = document.querySelectorAll('.tabs__btn_item');
const tabContents = document.querySelectorAll('tabs__conttent_item');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
});

function open(event){
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item) {
        item.classList.remove('tabs__btn_item--active');
    })

    tabContents.forEach(function(item) {
        item.classList.remove('tabs__content_item--active');
    })

    tabTarget.classList.add('tabs__btn_item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content_item--active');
}