import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { api } from '../components/api.js';
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

  const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: "button[type='submit']",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

let currentUserId;


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
// instancia de popup confirmation
const deletePopupConfirm = new PopupWithConfirmation(".popup__confirmation");
deletePopupConfirm.setEventListeners();


function handleLike(card) {
  console.log('Antes:', card.isLiked());
  const request = card.isLiked()
    ? api.unlikeCard(card.getId())
    : api.likeCard(card.getId());

  request
    .then(updatedCard => {
      card.updateLikes(updatedCard);
      console.log('Después:', card.isLiked());
    })
    .catch(console.log);
}

function handleDelete(card) {
  console.log("click en basura")
  deletePopupConfirm.open(() => {
    console.log('Click en SI dentro del popup');
    api.deleteCard(card.getId())
    .then(() => {
      console.log('Respuesta OK del servidor');
      card.removeCard();
      deletePopupConfirm.close();
    })
    .catch(err =>{
      console.log("error al borrar, err");
    });
  });
}

//instancia userinfo

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__data-about",
  avatarSelector: ".profile__photo"
});

// Instancia de Popup con Imagen
const popupWithImage = new PopupWithImage("#popup-image");
popupWithImage.setEventListeners();



// --- Función para manejar clic en imagen ---
function handleImageClick(name, link) {
  popupWithImage.open(name, link);
}

const cardList = new Section(
  {
    items: [],
    renderer: (item) => {
      const card = new Card(
        item,
        '#template-card',
        handleImageClick,
        handleLike,
        handleDelete,
        currentUserId
      );
      return card.createCard();
    }
  },
  '.cards'
);

api.getAppInfo()
  .then(([userData, cards]) => {
    currentUserId = userData._id;

    userInfo.setUserInfo(userData);
    cardList.setItems(cards); // aquí se renderizan las tarjetas
  })
  .catch(err => console.log(err));



// popup de formulario de editar perfil

const popupEditProfile = new PopupWithForm(".popup-edit", (inputValues) => {
  popupEditProfile.setLoading(true, "Guardar");
  api.updateUserInfo(inputValues.name, inputValues.about)
    .then(updatedUser => {
      // El servidor devuelve el perfil ya actualizado
      userInfo.setUserInfo({
      name : updatedUser.name,
      about : updatedUser.about,
      avatar: updatedUser.avatar
      });
      popupEditProfile.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupEditProfile.setLoading(false, "Guardar");
    });
  });


popupEditProfile.setEventListeners();

document.querySelector(".profile__button-edit").addEventListener("click", () => {
  popupEditProfile.open()
});


// formulario añadir tarjeta
const popupAddCard = new PopupWithForm("#popup-add", (newCardData) => {
  popupAddCard.setLoading(true, "Guardar");
  api.addCard(newCardData.name, newCardData.link)
    .then(cardData => {
      const card = new Card(
        cardData,
        "#template-card",
        handleImageClick,
        handleLike,
        handleDelete,
        currentUserId
      );

      const cardElement = card.createCard();
      cardList.addItem(cardElement);

      popupAddCard.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupAddCard.setLoading(false, "Guardar");
    });

});

popupAddCard.setEventListeners();

document.querySelector(".profile__button-add").addEventListener("click", () => popupAddCard.open());


const popupAvatar = new PopupWithForm(".popup__avatar", (inputValues) => {
  popupAvatar.setLoading(true, "Guardar");
  api.updateAvatar(inputValues.link)
    .then((userData) => {
      userInfo.setUserInfo({
        name: userData.name,
        about: userData.about,
        avatar: userData.avatar
      });
      popupAvatar.close();
    })
    .catch(console.log)
    .finally(() => {
      popupAvatar.setLoading(false, "Guardar");
    });
});

popupAvatar.setEventListeners();

document
  .querySelector(".profile__avatar-overlay")
  .addEventListener("click", () => popupAvatar.open());


// validacion de formularios

const editProfileValidator = new FormValidator(settings, document.querySelector("#form-edit"));
editProfileValidator.enableValidation();


const addCardValidator = new FormValidator(settings, document.querySelector("#form-add"));
addCardValidator.enableValidation();



api.getInitialCards().then(cards => console.log(cards));
