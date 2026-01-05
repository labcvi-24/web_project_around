import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

  const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: "button[type='submit']",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};


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



//instancia userinfo

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__data-about"
});

// Instancia de Popup con Imagen
const popupWithImage = new PopupWithImage("#popup-image");
popupWithImage.setEventListeners();

// --- Función para manejar clic en imagen ---
function handleImageClick(name, link) {
  popupWithImage.open(name, link);
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) =>{
    console.log(item);
    const card = new Card(item.name, item.link, "#template-card", handleImageClick);
    return card.createCard();
  }
}, ".cards");

cardList.renderItems();


// popup de formulario de editar perfil

const popupEditProfile = new PopupWithForm("#popup-edit", (inputValues) => {
  userInfo.setUserInfo({name: inputValues.name, about: inputValues.about});

  popupEditProfile.close();

});

popupEditProfile.setEventListeners();

document.querySelector(".profile__button-edit").addEventListener("click", () => {
  popupEditProfile.open()
});


// formulario añadir tarjeta
const popupAddCard = new PopupWithForm("#popup-add", (newCardData) => {
  const card = new Card(
    newCardData.titulo,
    newCardData.url,
    "#template-card",
    handleImageClick
  );

  const cardElement = card.createCard();
  cardList.addItem(cardElement);

  popupAddCard.close();

});

popupAddCard.setEventListeners();

document.querySelector(".profile__button-add").addEventListener("click", () => popupAddCard.open());

// validacion de formularios

const editProfileValidator = new FormValidator(settings, document.querySelector("#form-edit"));
editProfileValidator.enableValidation();


const addCardValidator = new FormValidator(settings, document.querySelector("#form-add"));
addCardValidator.enableValidation();



// Obtener datos actuales
const currentData = userInfo.getUserInfo();

// Actualizar datos después de enviar formulario
userInfo.setUserInfo({ name: "Luisandra", about: "Desarrolladora Web" });


// function countBits(p) {
//   return p.toString(2).split("1").length - 1;
// }

// function countBits(n) {
//   let count = 0;
//   while (n > 0) {
//     count += n & 1;
//     n >>= 1;
//   }
//   return count;
// }

// console.log(countBits(1234));