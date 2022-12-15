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

const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const infoName = document.querySelector('.profile__name');
const infoAbout = document.querySelector('.profile__about');

const elementsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elementsTemplate');

const inputElementsTitle = document.querySelector('.popup__input_type_ElementsTitle');
const inputElementsLink = document.querySelector('.popup__input_type_ElementsLink');
const elementsTitle = document.querySelector('.elements__title');
const elementsLink = document.querySelector('.elements__link');


editProfileButton.addEventListener('click', openPopupProfile);
editElementsButton.addEventListener('click', openPopupElements);
saveProfileButton.addEventListener('submit', saveProfileForm);
saveProfileButton.addEventListener('submit', saveProfileForm);
closeButton.addEventListener('click', closePopup);
addButton.addEventListener('click', openPopup);

function openPopup() {
  popupEditProfile.classList.add('popup_opened');
  popupAddElement.classList.add('popup_opened');
  popupOpenImage.classList.add('popup_opened');
}

function openPopupProfile() {
  evt.preventDefault();
inputName.value = infoName.textContent;
inputAbout.value = infoAbout.textContent;
openPopup();
}


function saveFormProfile(evt) {
  evt.preventDefault();
  infoName.textContent = inputName.value;
  infoAbout.textContent = inputAbout.value;
  closePopup();
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

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
    openPopup(popupOpenImage);
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

// initialCards.unshift(...items) - добавляет элемент в начало строки