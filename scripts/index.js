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
const saveProfileButton = document.querySelector('.popup__save_type_profile');
const saveElementsButton = document.querySelector('.popup__save_type_element');
const closeButton = document.querySelector('.popup__close-button');

//popup
const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddElements = document.querySelector('.popup_type_add-elements');
const popupBigPicture = document.querySelector('.popup_type_big-picture');

//profile
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

//Elements
const inputElementTitle = document.querySelector('.popup__input_type_element-title');
const inputElementLink = document.querySelector('.popup__input_type_element-link');
const elementsTitle = document.querySelector('.elements__title');
const elementsLink = document.querySelector('.elements__link');

//container
const elementsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elementsTemplate');
const elementsLikeBtn = elementsItem.querySelector('.elements__like-button');
const elementsDelete = elementsItem.querySelector('.elements__delete-button');

//popup image
const bigPicture = document.querySelector('.popup__picture');
const bigPictureCaption = document.querySelector('.popup__picture-caption');

// open popup
function openPopup() {
  popup.classList.add('popup_opened');
}

//close popup
closeButton.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
})

//edit profile
editProfileButton.addEventListener('click', () => {
  openPopup(popupEditProfile);
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;  
});

//save profile
saveProfileButton.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup();
})

//edit/add elements
addElementsButton.addEventListener('click', () => {
  openPopup(popupAddElements)
  inputElementTitle.value = elementsTitle.textContent;
  inputElementLink.value = elementsLink.src; 
});


//save elements
saveElementsButton.addEventListener('click', () => {
createItem(elementsTitle, elementsLink);
evt.preventDefault();
});

//create element
function createItem(elementsTitle, elementsLink) {
const elementsItem = elementsTemplate.content.querySelector('.elements__item').cloneNode(true);
  elementsTitle.textContent = inputElementTitle.value;
  elementsLink.src = inputElementLink.value;
  elementsLink.alt = `${elementsTitle}`; 
  elementsContainer.prepend(elementsItem);
  return elementsItem;
};

//add template elements
elementsContainer.append(...initialCards.map(createItem));

//open big picture
elementsLink.addEventListener('click', () => {
  openBigPicture(imgTitle, imgLink);
});

 function openBigPicture(imgTitle, imgLink) {
  bigPicture.src = elementsLink;
  bigPictureCaption.textContent = elementsTitle;
  bigPicture.alt = elementsTitle;
  openPopup(openBigPicture);
};

// likes
elementsLikeBtn.addEventListener('click', () => {
  elementsLikeBtn.classList.toggle('.elements__like-button_active')
});

// delete picture
elementsDelete.addEventListener('click', () => {
  evt.preventDefault();
  evt.target.closest('.elements__item').remove();
});


//initialCards.forEach(({ name, link }) => {
//createCard(name, link)
//})
