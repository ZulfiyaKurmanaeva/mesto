// VARIABLES
// Close Buttons
const elementCloseButton = document.querySelector('.popup__close-button_type_elements');
const profileCloseButton = document.querySelector('.popup__close-button_type_profile');
const pictureCloseButton = document.querySelector('.popup__close-button_type_picture');

//profile
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

//elements
const popupAddElements = document.querySelector('.popup_type_add-elements');
const profileAddButton = document.querySelector('.profile__add-button');
const elementsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elementsTemplate').content.querySelector('.elements__item');
const titleInput = newItemForm.elements.title;
const linkInput = newItemForm.elements.link;
const popupBigPicture = document.querySelector('.popup_type_big-picture');
const bigPicture = document.querySelector('.popup__big-picture');
const bigPictureCaption = document.querySelector('.popup__picture-caption');

//forms
const popupList = document.querySelectorAll('.popup');
const form = document.querySelector('.popup__form');
const newItemForm = document.forms.newItemForm;
const editProfileForm = document.forms.editProfileForm;

const inputsEditForm = Array.from(popupEditProfile.querySelectorAll('.popup__input'));




//FUNCTIONS
//popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

//EVENTS
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

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    popupList.forEach(popup => {
      if (popup.classList.contains('popup_opened')) {
        closePopup(popup)
      }
    })
  }
}

//open edit-profile
profileEditButton.addEventListener('click', () => {
  deleteValidationErrors(popupEditProfile, inputsEditForm, validationConfig); //
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  toggleButtonState(inputsEditForm, profileEditButton, validationConfig); //
  openPopup(popupEditProfile);
});

//save profile
popupEditProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEditProfile);
  editProfileForm.reset();
})

//open elements popup
profileAddButton.addEventListener('click', () => {
  openPopup(popupAddElements)
});

//submit elements
popupAddElements.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const link = linkInput.value;
  const name = titleInput.value;
  renderElements({ name, link });
  closePopup(popupAddElements);
  popupAddElements.reset();
})