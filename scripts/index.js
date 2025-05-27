const content = document.querySelector(".content");

const profileButton = content.querySelector(".profile__button_edit")


const popupClose = content.querySelector(".popup__button-close")


const popup = content.querySelector(".popup")


const popupForm = content.querySelector(".popup__form")



function handleProfileFormSubmit(evt){
    evt.preventDefault();

    const nameInput = content.querySelector(".popup__input_name")
    const jobInput = content.querySelector(".popup__input_job")

    const profileName = content.querySelector(".profile__user_name")
    const profileAbout = content.querySelector(".profile__about")

    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
}
popupForm.addEventListener('submit', handleProfileFormSubmit);


function handleOpenPopup(){
    popup.classList.add("popup_opened");

}
profileButton.addEventListener("click", handleOpenPopup);

function handleClosePopup(){
    popup.classList.remove("popup_opened");
}
popupClose.addEventListener("click",handleClosePopup)

