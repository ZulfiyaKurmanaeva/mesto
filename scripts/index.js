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
//const elementTitle = document.querySelector('.elements__title');
//const elementLink = document.querySelector('.elements__link');

//container
const elementsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elementsTemplate');

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
  inputName.value = infoName.textContent;
  inputAbout.value = infoAbout.textContent;
  openPopup(popupEditProfile)
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
});


// add pictures
saveElementsButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  const elementsLink = inputElementLink.value;
  const name = elementName.value;
  createCard(name, link);
  // elementLink.value = "";
  // elementName.value = "";
  closePopup(formAddPicture);
  formAddPicture.reset();
})


//add pictures
function createItem(imgTitle, imgLink) {
  evt.preventDefault();
  const elementsItem = elementsTemplate.content.querySelector('.elements__item').cloneNode(true);
  const elementsLink = elementsItem.querySelector('.elements__link');
  const elementsTitle = elementsItem.querySelector('.elements__title');
  const elementsLikeBtn = elementsItem.querySelector('.elements__like-button');
  const elementsDelete = elementsItem.querySelector('.elements__delete-button');

  elementsLink.src = imgLink;
  elementsTitle.textContent = imgTitle;
  elementsLink.alt = `${elementsTitle}`;

  elementsLink.addEventListener('click', () => openBigPicture(imgTitle, imgLink));
  elementsLikeBtn.addEventListener('click', () => {
    elementsLikeBtn.classList.toggle('.elements__like-button_active')
  });

  elementsDelete.addEventListener('click', deleteElement);
  elementsContainer.prepend(elementsItem);
}

//add template elements
elementsContainer.append(...initialCards.map(createItem));

//open big picture
function openBigPicture(imgTitle, imgLink) {
  bigPicture.src = imgLink;
  bigPictureCaption.textContent = imgTitle;
  bigPicture.alt = imgTitle;
  openPopup(openBigPicture)
}

// delete picture
function deleteElement(evt) {
  evt.target.closest('.elements__item').remove()
}


//initialCards.forEach(({ name, link }) => {
//createCard(name, link)
//})
