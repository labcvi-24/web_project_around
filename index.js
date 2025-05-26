let content = document.querySelector(".content");

let profileButton = content.querySelector(".profile__button_edit")


let popupClose = content.querySelector(".popup__button-close")


let popup = content.querySelector(".popup")


let popupForm = content.querySelector(".popup__form")



function handleProfileFormSubmit(evt){
    evt.preventDefault();

    let nameInput = content.querySelector(".popup__input_name")
    let jobInput = content.querySelector(".popup__input_job")

    let profileName = content.querySelector(".profile__user_name") 
    let profileAbout = content.querySelector(".profile__about")
    
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

