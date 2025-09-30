import Card from "../pages/Card.js";
import FormValidator from "../pages/FormValidator.js";
import {
  handleOpenPopup,
  handleAddPopup,
  handleClosePopup,
  handleAddclosePopup,
  handleProfileFormSubmit,
  handleOverlayClose,
  handleEscClose
} from "../pages/Utils.js";



const popupImage = document.querySelector("#popup-image");
const popupPhoto = popupImage.querySelector(".popup-image__photo");
const popupCaption = popupImage.querySelector(".popup-image__caption");
const popupImageClose = popupImage.querySelector(".popup-image__close");

const content = document.querySelector(".content")
const profileButton = content.querySelector(".profile__button-edit")
const popupCloseEdit = content.querySelector("#popupEdit-close")
const popupEdit = content.querySelector("#popup-edit")
const popupForm = content.querySelector("#form-edit")
const sectionCards = document.querySelector(".cards")

const popupAdd = document.querySelector("#popup-add")
const popupAddForm = document.querySelector("#form-add")
const inputAdd = document.querySelector("#title-input")
const inputEnlaceAdd = document.querySelector("#url-input")
const addButton = document.querySelector("#button-add")
const closeAdd = document.querySelector("#popupadd-close")



const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

  function handleImageClick(name, link) {
  popupPhoto.alt = name;
  popupPhoto.src = link;
  popupCaption.textContent = name;
  popupImage.style.display = "flex";
}

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, "#template-card", handleImageClick);
  const cardElement = card.createCard();
  sectionCards.append(cardElement);
});

function handleNewPlaceSubmit(event){
  event.preventDefault();
  const cardName = inputAdd.value;
  const cardUrl = inputEnlaceAdd.value;
  const newCard = new Card({ name: cardName, link: cardUrl }, "#template-card", handleImageClick);
  const newCardElement = newCard.createCard();

  sectionCards.prepend(newCardElement);
  handleAddclosePopup();

  inputAdd.value = "";
  inputEnlaceAdd.value = "";
}

popupAddForm.addEventListener('submit', handleNewPlaceSubmit);

  popupImageClose.addEventListener("click", function () {
    popupImage.style.display = "none";
  });


const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: "button[type='submit']",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"

};

const editProfileValidator = new FormValidator(settings, popupEdit);
editProfileValidator.enableValidation();

const addCardValidator = new FormValidator(settings, popupAddForm);
addCardValidator.enableValidation()


// Inicializamos listeners
handleOpenPopup(profileButton, popupEdit);
handleAddPopup(addButton, popupAdd);
handleClosePopup(popupCloseEdit, popupEdit);
handleAddclosePopup(closeAdd, popupAdd);

// Overlay close
handleOverlayClose(popupEdit, "popup_opened");
handleOverlayClose(popupAdd, "popup_opened-add");

// Escape close
handleEscClose(popupAdd, popupEdit, popupImage);

// Listener para el submit del perfil
popupForm.addEventListener("submit", (evt) => {
  handleProfileFormSubmit(evt, content, popupEdit, () => {
    popupEdit.classList.remove("popup_opened");
  });
});




// function handleProfileFormSubmit(evt){
//     evt.preventDefault();
//     const nameInput = content.querySelector(".popup__input_name")
//     const jobInput = content.querySelector(".popup__input_job")

//     const profileName = content.querySelector(".profile__name")
//     const profileAbout = content.querySelector(".profile__data-about")

//     profileName.textContent = nameInput.value;
//     profileAbout.textContent = jobInput.value;

//     handleClosePopup();

//     nameInput.value = "";
//     jobInput.value = "";
// }
// popupForm.addEventListener('submit', handleProfileFormSubmit);



// popupEdit.addEventListener("click", function(event){
//   if (event.target === popup) {
//     popup.classList.remove("popup_opened");
//   }
//   });

// popupAdd.addEventListener("click", function (event) {
//   if (event.target === popupAdd) {
//     popupAdd.classList.remove("popup_opened-add");
//   }
//   });

//   // Escuchar el evento de teclado:
// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Escape') {
//     popupAdd.classList.remove("popup_opened-add");
//     popupEdit.classList.remove("popup_opened");
//     popupImage.style.display = "none";
//   }
//   });

