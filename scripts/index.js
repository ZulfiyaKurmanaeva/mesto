//POPUP
const elementCloseButton = document.querySelector('.popup__close-button_type_elements');
const profileCloseButton = document.querySelector('.popup__close-button_type_profile');
const pictureCloseButton = document.querySelector('.popup__close-button_type_picture');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//CLOSE POPUP
elementCloseButton.addEventListener('click', () => {
  closePopup(popupAddElements);
});
profileCloseButton.addEventListener('click', () => {
  closePopup(popupEditProfile);
});
pictureCloseButton.addEventListener('click', () => {
  closePopup(popupBigPicture);
});
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//PROFILE
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
//open edit profile
profileEditButton.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupEditProfile);
});

//save profile
popupEditProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEditProfile);
})

//ELEMENTS
const popupAddElements = document.querySelector('.popup_type_add-elements'); //elements form
const profileAddButton = document.querySelector('.profile__add-button');
const elementsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elementsTemplate').content.querySelector('.elements__item');
const titleInput = document.querySelector('.popup__input_type_elements-title');
const linkInput = document.querySelector('.popup__input_type_elements-link');
const popupBigPicture = document.querySelector('.popup_type_big-picture');
const bigPicture = document.querySelector('.popup__big-picture');
const bigPictureCaption = document.querySelector('.popup__picture-caption');

//open Elements popup
profileAddButton.addEventListener('click', () => {
  openPopup(popupAddElements)
});

//submit Elements
popupAddElements.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const link = linkInput.value;
  const name = titleInput.value;
  renderElements({ name, link });
  closePopup(popupAddElements);
  popupAddElements.reset();
})

//create Element
const createCard = ({ name, link }) => {
  const elementsItem = elementsTemplate.cloneNode(true);
  const imageLink = elementsItem.querySelector('.elements__image');
  const imageTitle = elementsItem.querySelector('.elements__title');
  const elementDeleteBtn = elementsItem.querySelector('.elements__delete-button');
  const likeButton = elementsItem.querySelector('.elements__like-button');

  imageLink.src = link;
  imageTitle.textContent = name;
  imageLink.alt = name;

  imageLink.addEventListener('click', () => openBigPicture({ name, link }));
  likeButton.addEventListener('click', () => makeLikeActive(likeButton));
  elementDeleteBtn.addEventListener('click', deleteElement);

  return elementsItem;
}

// RENDER ELEMENTS
function renderElements({ name, link }) {
  elementsContainer.prepend(createCard({ name, link }));
}
elementsContainer.append(...initialCards.map(renderElements));

//DELETE ELEMENT
function deleteElement(evt) {
  evt.target.closest('.elements__item').remove();
}

//LIKES
function makeLikeActive(likeButton) {
  likeButton.classList.toggle('elements__like-button_active');
}

//BIG PICTURE
function openBigPicture({ name, link }) {
  bigPicture.src = link;
  bigPictureCaption.textContent = name;
  bigPicture.alt = name;
  openPopup(popupBigPicture)
}