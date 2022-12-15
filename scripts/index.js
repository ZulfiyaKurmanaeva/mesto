// cards

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

//buttons
const editProfileButton = document.querySelector('.profile__edit-button');
const addElementsButton = document.querySelector('.profile__add-button');
const saveProfileButton = document.querySelector('.popup__profile-form');
const saveElementsButton = document.querySelector('.popup__element-form');
const closeButton = document.querySelector('.popup__close-button');

//popup
const popup = document.querySelector('.popup');

//profile
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const infoName = document.querySelector('.profile__name');
const infoAbout = document.querySelector('.profile__about');

//Elements
const inputElementsTitle = document.querySelector('.popup__input_type_ElementsTitle');
const inputElementsLink = document.querySelector('.popup__input_type_ElementsLink');
const elementsTitle = document.querySelector('.elements__title');
const elementsLink = document.querySelector('.elements__link');

//container
const elementsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elementsTemplate');

//popup image
const popupImg = document.querySelector('.popup__picture');
const popupImgTitle = document.querySelector('.popup__picture-title');

//EventListener
editProfileButton.addEventListener('click', openPopupProfile);
addElementsButton.addEventListener('click', openPopupElements);
saveProfileButton.addEventListener('submit', saveProfileForm);
saveElementsButton.addEventListener('submit', saveProfileForm);
closeButton.addEventListener('click', closePopup);

//popup
function openPopup() {
  popup.classList.add('popup_opened');  
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

//profile
function openPopupProfile() {
  evt.preventDefault();
 inputName.value = infoName.textContent;
 inputAbout.value = infoAbout.textContent;
 openPopup();
}

function saveProfileForm(evt) {
  evt.preventDefault();
  infoName.textContent = inputName.value;
  infoAbout.textContent = inputAbout.value;
  closePopup();
}

function 
btnSaveAddingPicture.addEventListener('click', (e) => {
  e.preventDefault()
  const link = elementLink.value;
  const name = elementName.value;
  createCard(name, link);
  // elementLink.value = "";
  // elementName.value = "";
  closePopup(formAddPicture);
  formAddPicture.reset();
})




/*function elementsAdd(evt) {
  evt.preventDefault();
  elementsItem.prepend(createItem(inputElementsLink.value, inputElementsLink.value));
  closePopup(popupAdd);
}*/

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


// initialCards.unshift(...items) - добавляет элемент в начало строки