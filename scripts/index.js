const content = document.querySelector(".content")
const profileButton = content.querySelector(".profile__button-edit")
const popupClose = content.querySelector(".popup__button-close")
const popup = content.querySelector(".popup")
const popupForm = content.querySelector(".popup__form")


function handleOpenPopup(){
    popup.classList.add("popup__opened");
}
profileButton.addEventListener("click", handleOpenPopup);


function handleClosePopup(){
    popup.classList.remove("popup__opened");
}
popupClose.addEventListener("click",handleClosePopup)


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