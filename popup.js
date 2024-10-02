//Seleciona todos os cards
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

const allCards = document.querySelectorAll(".card");

//Faz com que todos os cards executem a função openPopup() ao serem clicados
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

allCards.forEach((card)=>{
    card.addEventListener("click",openPopup)
});

const popupButton = document.querySelector('.popup-close');
popupButton.addEventListener("click",closePopup);

function closePopup(){
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
}

function openPopup(){
    const popup = document.querySelector('.popup');
    popup.style.display = 'flex';
}