const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const saveButton = document.querySelector('.popup__save-button');
const closeButton = document.querySelector('.popup__close-button');

editButton.addEventListener('click', openPopup);
saveButton.addEventListener('submit', saveForm);
closeButton.addEventListener('click', closePopup);

popup.addEventListener('click', function (event) {
    if (!event.defaultPrevented) {
        closePopup();
    }
})
document.querySelector('.popup__container').addEventListener('click', function (event) {
    event.preventDefault();
})

function openPopup() {
    popup.classList.add('popup__opened');
    infoName.textContent = inputName.value;
    infoAbout.textContent = inputAbout.value;
}

function closePopup() {
    popup.classList.remove('popup__opened');
}


let inputName = document.querySelector('.popup__input_name');
let inputAbout = document.querySelector('.popup__input_about');
let infoName = document.querySelector('.profile__info_name');
let infoAbout = document.querySelector('.profile__info_about');

function saveForm(evt) {
    evt.preventDefault();
    infoName.textContent = inputName.value;
    infoAbout.textContent = inputAbout.value;
    saveButton.addEventListener('click', closePopup);
}


