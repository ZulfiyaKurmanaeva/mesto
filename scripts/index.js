const initialCards = [
  {
    name: 'Мост Золотые Ворота',
    link: 'https://images.unsplash.com/photo-1664319744952-fc688e23c988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Венеция',
    link: 'https://images.unsplash.com/photo-1666880780155-81bd7ff1008a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Микены',
    link: 'https://images.unsplash.com/photo-1670613873482-fdb5ea2fa6dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Стокгольм',
    link: 'https://images.unsplash.com/photo-1667382988243-6a1e5e85224e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Тулуза',
    link: 'https://images.unsplash.com/photo-1669854336002-0a2f4721dd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Нью-Йорк',
    link: 'https://images.unsplash.com/photo-1669058002610-f325ddddf4d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }
];

//POPUP
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const closeElementButton = document.querySelector('.popup__close-button_type_elements');
const closeProfileButton = document.querySelector('.popup__close-button_type_profile');
const closePictureButton = document.querySelector('.popup__close-button_type_picture');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

closeElementButton.addEventListener('click', () => {
  closePopup(popupAddElements);
});
closeProfileButton.addEventListener('click', () => {
  closePopup(popupEditProfile);
});
closePictureButton.addEventListener('click', () => {
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
const elementsTemplate = document.querySelector('#elementsTemplate');

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
  linkInput.value = "";
  titleInput.value = "";
  closePopup(popupAddElements);
  popupAddElements.reset();
})

//create Elements
const createItems = ({ name, link }) => {
  const elementsItem = elementsTemplate.content.querySelector('.elements__item').cloneNode(true);
  const imageLink = elementsItem.querySelector('.elements__image');
  const imageTitle = elementsItem.querySelector('.elements__title');
  imageLink.src = link;
  imageTitle.textContent = name;
  imageLink.alt = name;

  imageLink.addEventListener('click', () => openBigPicture({ name, link }));

  const LikeBtn = elementsItem.querySelector('.elements__like-button');
  LikeBtn.addEventListener('click', () => {
    LikeBtn.classList.toggle('elements__like-button_active')
  });

  const elementDeleteBtn = elementsItem.querySelector('.elements__delete-button');
  elementDeleteBtn.addEventListener('click', deleteItem);
  function deleteItem(evt) {
    evt.target.closest('.elements__item').remove()
  }

  return elementsItem;
}

// render Elements
const renderElements = ({ name, link }) => {
  elementsContainer.append(createItems({ name, link }))
}

elementsContainer.append(...initialCards.map(createItems));

//BIG PICTURE
function openBigPicture({ name, link }) {
  bigPicture.src = link;
  bigPictureCaption.textContent = name;
  bigPicture.alt = name;
  openPopup(popupBigPicture)
}