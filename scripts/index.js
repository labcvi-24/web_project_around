const content = document.querySelector(".content")
const profileButton = content.querySelector(".profile__button-edit")
const popupClose = content.querySelector(".popup__button-close")
const popup = content.querySelector(".popup")
const popupForm = content.querySelector(".popup__form")
const templateCard = document.querySelector("#template-card")
const sectionCards = document.querySelector(".cards")
const popupAdd = document.querySelector(".popupadd")
const popupAddForm = document.querySelector(".popupadd__form")
const inputAdd = document.querySelector("#popup-title")
const inputEnlaceAdd = document.querySelector("#popup-url")
const addButton = document.querySelector(".profile__button-add")
const closeAdd = document.querySelector(".popupadd__close")



//proyecto 8

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


initialCards.forEach(function (item) {
  createCard(item.name, item.link);


});

function createCard(title, link){
  const tarjeta = templateCard.content.cloneNode(true).querySelector(".card");
  const cardTitulo = tarjeta.querySelector(".card__name");
  const cardPhoto = tarjeta.querySelector(".card__photo");
  const likeButton = tarjeta.querySelector(".card__button-like");
  const deleteButton = tarjeta.querySelector(".card__remove");
  cardTitulo.textContent = title;
  cardPhoto.src = link;
  cardPhoto.alt = title;
  const popupImage = document.querySelector(".popup-image");
  const popupPhoto = popupImage.querySelector(".popup-image__photo");
  const popupCaption = popupImage.querySelector(".popup-image__caption");
  const popupImageClose = popupImage.querySelector(".popup-image__close");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__button-like_active");
  });

  deleteButton.addEventListener("click", function () {
    tarjeta.remove();
  });

  cardPhoto.addEventListener("click", function () {

    popupPhoto.src = link;
    popupPhoto.alt = title;
    popupCaption.textContent = title;
    popupImage.style.display = "flex";
});

popupImageClose.addEventListener("click", function () {
  popupImage.style.display = "none";
});

  sectionCards.append(tarjeta);

  return tarjeta;

}


function handleOpenPopup() {
    popup.classList.add("popup__opened");
}
profileButton.addEventListener("click", handleOpenPopup);

function handleAddPopup() {
    popupAdd.classList.add("popupAdd__opened");
}
addButton.addEventListener("click", handleAddPopup);


function handleClosePopup(){
    popup.classList.remove("popup__opened");
}
popupClose.addEventListener("click",handleClosePopup);

function handleAddclosePopup(){
  popupAdd.classList.remove("popupAdd__opened");
}
closeAdd.addEventListener("click", handleAddclosePopup);


function handleProfileFormSubmit(evt){
    evt.preventDefault();

    const nameInput = content.querySelector(".popup__input_name")
    const jobInput = content.querySelector(".popup__input_job")

    const profileName = content.querySelector(".profile__name")
    const profileAbout = content.querySelector(".profile__data-about")

    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;

    handleClosePopup();
}

popupForm.addEventListener('submit', handleProfileFormSubmit);



function handleNewPlaceSubmit(event){
  event.preventDefault();

  const cardName = inputAdd.value;
  const cardUrl = inputEnlaceAdd.value;


  const newCardElement = createCard(cardName, cardUrl);

  sectionCards.prepend(newCardElement);

  handleAddclosePopup();

  inputAdd.value = "";
  inputEnlaceAdd.value = "";



}
popupAddForm.addEventListener('submit', handleNewPlaceSubmit);

