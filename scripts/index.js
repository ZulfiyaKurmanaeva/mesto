// VARIABLES
// close Buttons
const elementCloseButton = document.querySelector('.popup__close-button_type_elements');
const profileCloseButton = document.querySelector('.popup__close-button_type_profile');
const pictureCloseButton = document.querySelector('.popup__close-button_type_picture');

// open buttons
const profileEditButton = document.querySelector('.profile__edit-button');
const pictureAddButton = document.querySelector('.profile__add-button');

//profile
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

//elements
const titleInput = document.querySelector('.popup__input_type_elements-title');
const linkInput = document.querySelector('.popup__input_type_elements-link');

//big picture
const popupBigPicture = document.querySelector('.popup_type_big-picture');
const bigPicture = document.querySelector('.popup__big-picture');
const bigPictureCaption = document.querySelector('.popup__picture-caption');

//template
const elementsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elementsTemplate').content.querySelector('.elements__item');

//popup
const popupList = document.querySelectorAll('.popup');
const form = document.querySelector('.popup__form');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const inputsProfileForm = Array.from(popupEditProfile.querySelectorAll('.popup__input'));
const profileFormSubmitBtn = popupEditProfile.querySelector('.popup__button_type_profile');

const popupAddElements = document.querySelector('.popup_type_add-elements');
const inputsElementsForm = Array.from(popupAddElements.querySelectorAll('.popup__input'));
const elementsFormSubmitBtn = popupAddElements.querySelector('.popup__button_type_element');

//popup open/close
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('click', closePopupOverlay);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('click', closePopupOverlay);
}

const closePopupEsc = (evt) => {
  if(evt.key === 'Escape'){
      popupList.forEach(popup => {
          if(popup.classList.contains('popup_opened')) {
              closePopup(popup);
          }
      })
  }
}

const closePopupOverlay = (evt) => {
  if(!evt.target === popupList) {
    popupList.forEach(popup => {
      if(popup.classList.contains('popup_opened')) {
          closePopup(popup);
      }
  })
}
}

//create Elements
const createCard = ({ elementsTitle, link }) => {
  const elementsItem = elementsTemplate.cloneNode(true);
  const imageLink = elementsItem.querySelector('.elements__image');
  const imageTitle = elementsItem.querySelector('.elements__title');
  const elementDeleteBtn = elementsItem.querySelector('.elements__delete-button');
  const likeButton = elementsItem.querySelector('.elements__like-button');

  imageLink.src = link;
  imageTitle.textContent = elementsTitle;
  imageLink.alt = elementsTitle;

  imageLink.addEventListener('click', () => openBigPicture({ elementsTitle, link }));
  likeButton.addEventListener('click', () => makeLikeActive(likeButton));
  elementDeleteBtn.addEventListener('click', deleteElement);

  return elementsItem;
}

//render elements
function renderElements({ elementsTitle, link }) {
  elementsContainer.prepend(createCard({ elementsTitle, link }));
}
initialCards.forEach(renderElements);

//delete elements
function deleteElement(evt) {
  evt.target.closest('.elements__item').remove();
}
//likes
function makeLikeActive(likeButton) {
  likeButton.classList.toggle('elements__like-button_active');
}
//open picture
function openBigPicture({ elementsTitle, link }) {
  bigPicture.src = link;
  bigPictureCaption.textContent = elementsTitle;
  bigPicture.alt = elementsTitle;
  openPopup(popupBigPicture)
}

//close popup
elementCloseButton.addEventListener('click', () => {
  closePopup(popupAddElements);
});
profileCloseButton.addEventListener('click', () => {
  closePopup(popupEditProfile);
});
pictureCloseButton.addEventListener('click', () => {
  closePopup(popupBigPicture);
});

//open edit-profile
profileEditButton.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupEditProfile);
});

//submit profile info
popupEditProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEditProfile);
  evt.target.reset();
})

//open elements popup
pictureAddButton.addEventListener('click', () => {
  openPopup(popupAddElements)
});

//submit elements
popupAddElements.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const link = linkInput.value;
  const elementsTitle = titleInput.value;
  renderElements({ elementsTitle, link });
  closePopup(popupAddElements);
  evt.target.reset();
})