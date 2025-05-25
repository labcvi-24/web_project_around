let content = document.querySelector(".content");

let profileButton = content.querySelector(".profile__button_edit")
console.log(profileButton);

let popupClose = content.querySelector(".popup__button-close")
console.log(popupClose);

let popup = content.querySelector(".popup")
console.log(popup)

let popupForm = content.querySelector(".popup__form")



function handleProfileFormSubmit(evt){
    evt.preventDefault();

    let nameInput = content.querySelector(".popup__input_name")

    let jobInput = content.querySelector(".popup__input_job") 

}


popupForm.addEventListener('submit', handleProfileFormSubmit);{

}

function handleOpenPopup(){
    popup.classList.add("popup_opened");
    
}
profileButton.addEventListener("click", handleOpenPopup);

function handleClosePopup(){
    popup.classList.remove("popup_opened");
}
popupClose.addEventListener("click",handleClosePopup)

