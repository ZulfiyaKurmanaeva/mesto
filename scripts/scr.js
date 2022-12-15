/*const initialCards = [
    {name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},
    {name: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},
    {name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'},
    {name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},
    {name: 'Холмогорский район', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'},
    {name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'}
];*/
// ** webpage active buttons
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnSaveProfileEdit = document.querySelector('.popup__save-profile-edit'); popup__save_type_profile
const btnAddPicture = document.querySelector('.profile__add-button');
const btnSaveAddingPicture = document.querySelector('.popup__save-element'); popup__save_type_element
const btnsClosePopup = document.querySelectorAll('.popup__close-button');

// ** pop-up forms
const formEdit = document.querySelector('.popup_type_edit-profile'); popupEditProfile
const formAddPicture = document.querySelector('.popup_type_add-picture'); popupAddElements
const formFullSizePicture = document.querySelector('.popup_type_full-size-picture'); popupBigPicture

// ** profile edit fields
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job-description');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');

// ** add picture fields
const elementName = document.querySelector('.popup__input_type_element-name');
const elementLink = document.querySelector('.popup__input_type_element-link');

// ** photo grid variables
const photoGridContainer = document.querySelector('.photo-grid');
const photoTemplate = document.getElementById('photo-item-template').content.querySelector('.photo-grid__item');
const popupFullSizeImg = document.querySelector('.popup__picture');
const popupFullSizeTitle = document.querySelector('.popup__picture-caption');

// *** FUNCTIONS ***

// ** Add element to photo-grid
function createCard(name, link) {
  const cardElement = photoTemplate.cloneNode(true);
  const cardImg = cardElement.querySelector('.photo-grid__picture');
  const cardTitle = cardElement.querySelector('.photo-grid__item-capture');
  const btnLike = cardElement.querySelector('.photo-grid__like-button');
  const btnDeleteElement = cardElement.querySelector('.photo-grid__delete-picture');
  // ** open full-size picture **
  cardImg.addEventListener('click', () => showFullSizePicture(name, link));
  cardImg.src = link;
  cardTitle.textContent = name;
  cardImg.alt = name;
  // ** like button **
  btnLike.addEventListener('click', () => {
    btnLike.classList.toggle('photo-grid__like-button_active')
  });
  // ** delete picture **
  btnDeleteElement.addEventListener('click', deleteCard);
  photoGridContainer.prepend(cardElement);
}

// ** Submit profile edit info
function submitProfileEdit(evt) {
  evt.preventDefault();
  nameProfile.textContent = inputName.value;
  jobProfile.textContent = inputJob.value;
  closePopup(formEdit);
}

// ** Close pop-up
function closePopup(item) {
  item.classList.remove('popup_active');
}

// ** Open pop-up
function openPopup(popup) {
  popup.classList.add('popup_active');
}

// ** Showing full size picture function
function showFullSizePicture(name, link) {
  popupFullSizeImg.src = link;
  popupFullSizeTitle.textContent = name;
  popupFullSizeImg.alt = name;
  openPopup(formFullSizePicture)
}

// ** Delete photo from grid
function deleteCard(e) {
  e.target.closest('.photo-grid__item').remove()
}

// *** EVENT HANDLERS ***

// ** Getting name and link from the default array
initialCards.forEach(({ name, link }) => {
  createCard(name, link)
})

// ** Add pictures
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

// ** close pop-ups when clicking all the cross buttons
btnsClosePopup.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup')
    closePopup(popup)
  })
})

// ** save all changes in profile edit when click save button
btnSaveProfileEdit.addEventListener('click', submitProfileEdit);

// ** Open edit profile pop-up
btnEditProfile.addEventListener('click', () => {
  inputName.value = nameProfile.textContent;
  inputJob.value = jobProfile.textContent;
  openPopup(formEdit)
});

// ** Open add picture pop-up
btnAddPicture.addEventListener('click', () => {
  openPopup(formAddPicture)
});


/////////
//------------------------------Popup_profile------------------------------

const popupEdit = document.querySelector('#popup-edit');
const popupEditContainer = popupEdit.querySelector('.popup__container');
const openPopupEditButtons = document.querySelectorAll('.profile__edit-batton');
const closePopupEditButton = popupEdit.querySelector('.popup__close');
const nameInput = document.querySelector("input[name='name']");
const jobInput = document.querySelector("input[name='about-me']");
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function openPopup(popupEdit, popupEditContainer) {
  popupEdit.classList.add('popup_opened');
  popupEditContainer.classList.add('popup__container_opened');
}

function closePopup(popupEdit, popupEditContainer) {
  popupEdit.classList.remove('popup_opened');
  popupEditContainer.classList.remove('popup__container_opened');
}

openPopupEditButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    openPopup(popupEdit, popupEditContainer);
  });
});

closePopupEditButton.addEventListener('click', () => {
  closePopup(popupEdit, popupEditContainer);
});

document.addEventListener('click', (e) => {
  if ((e.target = e.target.classList.contains('popup'))) {
    closePopup(popupEdit, popupEditContainer);
    closePopup(popupCard, addElementForm);
    closePopup(popupLookImg, popupLookImgContainer);
    setToAddMode();
  }
});

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit, popupEditContainer);
}

popupEditContainer.addEventListener('submit', handleFormEditSubmit);

//------------------------------Popup_card------------------------------
//------------------------------Open_popup------------------------------

const popupCard = document.querySelector('#popup-add');
const popupCardOpenButtons = document.querySelectorAll('.profile__add-batton');
const closePopupButtonCard = popupCard.querySelector('.popup__close');
const addElementForm = popupCard.querySelector('.popup__container');
const elementsContainer = document.querySelector('.elements__container');
const nameImgInput = addElementForm.querySelector("input[name='name-img']");
const linkInput = addElementForm.querySelector("input[name='link']");
const button = addElementForm.querySelector('.popup__btn');
const popupLookImg = document.querySelector('.popup-look-img');
const popupLookImgContainer = document.querySelector(
  '.popup-look-img__container'
);
const popupLookImgTitle = document.querySelector('.popup-look-img__title');
const popupLookImgClose = popupLookImg.querySelector('.popup__close');
const pictureFull = document.querySelector('.popup-look-img__image');
let currenEditElementHandler = null;

popupCardOpenButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    openPopup(popupCard, addElementForm);
  });
});

closePopupButtonCard.addEventListener('click', () => {
  closePopup(popupCard, addElementForm);
  setToAddMode();
});

popupLookImgClose.addEventListener('click', () => {
  closePopup(popupLookImg, popupLookImgContainer);
});

//------------------------------Adding_cards------------------------------

function setPopupCardEditMode({ name, link }, newEditHandler) {
  addElementForm.removeEventListener('submit', currenEditElementHandler);
  addElementForm.addEventListener('submit', newEditHandler);
  nameImgInput.value = name;
  linkInput.value = link;
  addElementForm.removeEventListener('submit', addElement);
}

function setToAddMode() {
  nameImgInput.value = '';
  linkInput.value = '';
  addElementForm.addEventListener('submit', addElement);
  addElementForm.removeEventListener('submit', currenEditElementHandler);
}

const createCard = ({ name, link }) => {
  const element = document
    .querySelector('#element-template')
    .content.querySelector('.element')
    .cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  element.querySelector('.element__name').textContent = name;
  elementImage.src = link;
  elementImage.alt = name;
  elementImage.addEventListener('click', (e) => {
    e.preventDefault();
    pictureFull.src = elementImage.src;
    popupLookImgContainer.append(pictureFull);
    openPopup(popupLookImg, popupLookImgContainer);
    pictureFull.alt = elementImage.alt;
    popupLookImgTitle.textContent = pictureFull.alt;
  });
  element.querySelector('.element__delete').addEventListener('click', () => {
    element.remove();
  });
  element.querySelector('.element__edit').addEventListener('click', (e) => {
    e.preventDefault();
    popupCard.classList.add('popup_opened');
    addElementForm.classList.add('popup__container_opened');
  });
  element.querySelector('.element__like').addEventListener('click', (e) => {
    e.target.classList.toggle('element__like_active');
  });
  element.querySelector('.element__edit').addEventListener('click', (e) => {
    e.preventDefault();
    openPopup(popupCard, addElementForm);
    const newEditElementHandler = {
      currenEditElementHandler: (e) => {
        // Я очень старался, но так и не понял, что я сделал не так )
        e.preventDefault();
        element.querySelector('.element__name').textContent =
          nameImgInput.value;
        elementImage.src = linkInput.value;
        elementImage.alt = nameImgInput.value;
        setToAddMode();
        deleteClassOpenPopupCard();
      },
    };
    setPopupCardEditMode({ name, link }, newEditElementHandler);
  });

  return element;
};

const renderCard = ({ name, link }) => {
  elementsContainer.prepend(createCard({ name, link }));
};

elementsContainer.append(...initialCards.map(createCard));

const addElement = (event) => {
  event.preventDefault();
  const name = nameImgInput.value;
  const link = linkInput.value;
  renderCard({ name, link });
  closePopup(popupCard, addElementForm);
};

addElementForm.addEventListener('submit', addElement);

//---------------------backup-createCard-----------------
// const createCard = ({ name, link }) => {
//   const element = document
//     .querySelector('#element-template')
//     .content.querySelector('.element')
//     .cloneNode(true);
//   element.querySelector('.element__name').textContent = name;
//   element.querySelector('.element__image').src = link;
//   element.querySelector('.element__image').alt = name;
//   element.querySelector('.element__delete').addEventListener('click', () => {
//     element.remove();
//   });
//   element.querySelector('.element__edit').addEventListener('click', (e) => {
//     e.preventDefault();
//     popupCard.classList.add('popup_opened');
//     addElementForm.classList.add('popup__container_opened');
//   });
//   element.querySelector('.element__like').addEventListener('click', (e) => {
//     e.target.classList.toggle('element__like_active');
//   });
//   element.querySelector('.element__edit').addEventListener('click', () => {
//     addElementForm.removeEventListener('submit', currenEditElementHandler);
//     currenEditElementHandler = (e) => {
//       e.preventDefault();
//       element.querySelector('.element__name').textContent = nameImgInput.value;
//       element.querySelector('.element__image').src = linkInput.value;
//       setToAddMode();
//       closePopupCard();
//     };
//     seToEditMode({ name, link });
//   });

//   return element;
// };
