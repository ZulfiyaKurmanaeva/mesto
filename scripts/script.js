let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__container');
let editButton = document.querySelector('.profile__edit-button');
let saveButton = document.querySelector('.popup__save-button');
let closeButton = document.querySelector('.popup__close-button');
let inputName = document.querySelector('.popup__input_name');
let inputAbout = document.querySelector('.popup__input_about');
let infoName = document.querySelector('.profile__info_name');
let infoAbout = document.querySelector('.profile__info_about');

function openPopup() {
    popup.classList.add('popup__opened');
    inputName.value = infoName.textContent;
    inputAbout.value = infoAbout.textContent;
}

function saveForm(evt) {
    evt.preventDefault();
    infoName.textContent = inputName.value;
    infoAbout.textContent = inputAbout.value;
    saveButton.addEventListener('click', closePopup);
}

function closePopup() {
    popup.classList.remove('popup__opened');
}

editButton.addEventListener('click', openPopup);
saveButton.addEventListener('click', saveForm);
closeButton.addEventListener('click', closePopup);