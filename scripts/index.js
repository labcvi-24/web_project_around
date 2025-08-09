const content = document.querySelector(".content")
const profileButton = content.querySelector(".profile__button-edit")
const popupClose = content.querySelector("#popupEdit-close")
const popup = content.querySelector("#popup-edit")
const popupForm = content.querySelector("#form-edit")
const templateCard = document.querySelector("#template-card")
const sectionCards = document.querySelector(".cards")
const popupAdd = document.querySelector("#popup-add")
const popupAddForm = document.querySelector("#form-add")
const inputAdd = document.querySelector("#title-input")
const inputEnlaceAdd = document.querySelector("#url-input")
const addButton = document.querySelector("#button-add")
const closeAdd = document.querySelector("#popupadd-close")
const popupWindow = content.querySelector(".popup")

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
  const popupImage = document.querySelector("#popup-image");
  const popupPhoto = popupImage.querySelector(".popup-image__photo");
  const popupCaption = popupImage.querySelector(".popup-image__caption");
  const popupImageClose = popupImage.querySelector(".popup-image__close");

  popupImage.addEventListener("click", function (event) {
  if (event.target === popupImage) {
    popupImage.style.display = "none";
  }
});

  popup.addEventListener("click", function(event){
    if (event.target === popup) {
      popup.classList.remove("popup_opened");
    }
  });

  popupAdd.addEventListener("click", function (event) {
  if (event.target === popupAdd) {
    popupAdd.classList.remove("popup_opened-add");
  }
});

  // Escuchar el evento de teclado:
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    popupAdd.classList.remove("popup_opened-add");
    popup.classList.remove("popup_opened");
    popupImage.style.display = "none";
  }
});

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
    popup.classList.add("popup_opened");
}
profileButton.addEventListener("click", handleOpenPopup);

function handleAddPopup() {
    popupAdd.classList.add("popup_opened-add");
}
addButton.addEventListener("click", handleAddPopup);


function handleClosePopup(){
    popup.classList.remove("popup_opened");
}
popupClose.addEventListener("click",handleClosePopup);

function handleAddclosePopup(){
  popupAdd.classList.remove("popup_opened-add");
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

    nameInput.value = "";
    jobInput.value = "";
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

