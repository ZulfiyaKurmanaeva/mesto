const initialCards = [
  {
    elementsTitle: 'Архыз',
    elementsLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    elementsTitle: 'Челябинская область',
    elementsLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    elementsTitle: 'Иваново',
    elementsLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    elementsTitle: 'Камчатка',
    elementsLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    elementsTitle: 'Холмогорский район',
    elementsLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    elementsTitle: 'Байкал',
    elementsLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const saveButton = document.querySelector('.popup__form');
const closeButton = document.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');


let inputName = document.querySelector('.popup__input_type_name');
let inputAbout = document.querySelector('.popup__input_type_about');
let infoName = document.querySelector('.profile__name');
let infoAbout = document.querySelector('.profile__about');



editButton.addEventListener('click', openPopup);
saveButton.addEventListener('submit', saveForm);
closeButton.addEventListener('click', closePopup);
addButton.addEventListener('click', openPopup);

// initialCards.unshift(...items) - добавляет элемент в начало строки

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

//const elementsTemplate = document.querySelector('#elementsTemplate');
//const elementsTemplate = document.querySelector('#elementsTemplate').content;
//const onlineTemplate = document.querySelector('.onlineTemplate');

// клонируем содержимое тега template
//const newElement = elementsTemplate.querySelector('.elementsTemplate').cloneNode(true);

// наполняем содержимым
//newElement.querySelector('.elements__image').src = 'tinyurl.com/v4pfzwy';
//newElement.querySelector('.elements__title').textContent = 'Дюк Корморант';

// отображаем на странице
//onlineTemplate.append(newElement);


const elementsContainer = document.querySelector('.elements');
//const form
const inputElementsTitle = document.querySelector('.popup__input_type_ElementsTitle');
const inputElementsLink = document.querySelector('.popup__input_type_ElementsLink');
//const infoElementsTitle = document.querySelector('.elements__title');
//const infoElementsLink = document.querySelector('.elements__link');
const elementsTemplate = document.querySelector('#elementsTemplate');

function createItem(elementsTitle, elementsLink) {
  const elementsItem = elementsTemplate.content.querySelector('.elements__item').cloneNode(true);
  elementsItem.querySelector('.elements__title').textContent = elementsTitle;
  elementsItem.querySelector('.elements__link').src = elementsLink;
  elementsItem.querySelector('.elements__link').alt = `${elementsTitle}`;
  elementsItem.querySelector('.elements__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('.elements__like-button_active');    
  })

  elementsItem.querySelector ('.elements__remove').addEventListener('click', function(evt) {
    evt.target.classList.toggle.remove();
  })

  elementsItem.querySelector('.elements__link').addEventListener('click', function(evt) {
    openPopup(openPopupImage);
    PopupImage.src = evt.target.src;
    PopupImage.alt = evt.target.alt;
    PopupImageTitle.textContent = elementsTitle;
  })
return elementsItem;
} 
  
elementsContainer.append(...initialCards.map(createItem));

function elementsAdd(evt) {
  evt.preventDefault();
  elementsItem.prepend(createItem(inputElementsLink.value, inputElementsLink.value));
  closePopup(popupAdd);
}