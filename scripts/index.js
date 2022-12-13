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
const newCard = (taskName) => {
  const template = document.querySelector('#elementsTemplate')
  const elementsItem = template.content.querySelector('.elements__item').cloneNode(true);
  elementsItem.querySelector('.elements__title').textContent = elementsTitle;
  elementsItem.querySelector('.elements__image').src = elementsLink;


  elementsItem.append(elementsImage, elementsCaption, elementsTitle, elementsLikeButton)
  return elementsItem;
}

const elementsTodo = (ElementTitle) => {
  elementsContainer.append(newElement(ElementTitle))
}

initialCards.forEach((title) => {
  elementsTodo(title);
})

//task = elementsItem

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