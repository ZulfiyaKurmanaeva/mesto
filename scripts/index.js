const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const saveButton = document.querySelector('.popup__form');
const closeButton = document.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');

let inputName = document.querySelector('.popup__input_type_name');
let inputAbout = document.querySelector('.popup__input_type_about');
let infoName = document.querySelector('.profile__name');
let infoAbout = document.querySelector('.profile__about');

let inputElementTitle = document.querySelector('.popup__input_type_ElementTitle');
let inputElementLink = document.querySelector('.popup__input_type_ElementLink');
let infoElementTitle = document.querySelector('.elements__title');
//let ElementLink = ;

editButton.addEventListener('click', openPopup);
saveButton.addEventListener('submit', saveForm);
closeButton.addEventListener('click', closePopup);
addButton.addEventListener('click', openPopup);



//popup.addEventListener('click', function (event) {
  //  if (!event.defaultPrevented) {
   //     closePopup();
   // }
//})
//document.querySelector('.popup__container').addEventListener('click', function (event) {
   // event.preventDefault();
//})

function openPopup() {
    popup.classList.add('popup_opened');
    inputName.value = infoName.textContent;
    inputAbout.value = infoAbout.textContent;
}

function saveForm(evt) {
    evt.preventDefault();
    infoName.textContent = inputName.value;
    infoAbout.textContent = inputAbout.value;
    closePopup();
}

function closePopup() {
    popup.classList.remove('popup_opened');
}


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 