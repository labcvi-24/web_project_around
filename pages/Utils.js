// export function handleOpenPopup() {
//   profileButton.addEventListener("click", ()=>{
//     popupEdit.classList.add("popup_opened");
//   });

export function handleOpenPopup(profileButton, popupEdit) {
  profileButton.addEventListener("click", () => {
    popupEdit.classList.add("popup_opened");
  });

}

export function handleAddPopup(addButton, popupAdd) {
  addButton.addEventListener("click", () => {
    popupAdd.classList.add("popup_opened-add");
  });
}

export function handleClosePopup(popupCloseEdit, popupEdit) {
  popupCloseEdit.addEventListener("click", () => {
    popupEdit.classList.remove("popup_opened");
  });
}

export function handleAddclosePopup(closeAdd, popupAdd) {
  closeAdd.addEventListener("click", () => {
    popupAdd.classList.remove("popup_opened-add");
  });
}

// --- FUNCION PARA SUBMIT PERFIL --- //

export function handleProfileFormSubmit(evt, content, handleClosePopupFn) {
  evt.preventDefault();

  const nameInput = content.querySelector(".popup__input_name");
  const jobInput = content.querySelector(".popup__input_job");

  const profileName = content.querySelector(".profile__name");
  const profileAbout = content.querySelector(".profile__data-about");

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;

  handleClosePopupFn();

  nameInput.value = "";
  jobInput.value = "";
}

// --- CERRAR POPUP AL HACER CLIC EN OVERLAY --- //
export function handleOverlayClose(popup, classNameToRemove) {
  popup.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      popup.classList.remove(classNameToRemove);
    }
  });
}

// --- CERRAR POPUPS CON ESCAPE --- //
export function handleEscClose(popupAdd, popupEdit, popupImage) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      popupAdd.classList.remove("popup_opened-add");
      popupEdit.classList.remove("popup_opened");
      popupImage.style.display = "none";
    }
  });
}

// export function handleAddPopup() {
//   addButton.addEventListener("click", ()=>{
//     popupAdd.classList.add("popup_opened-add");
//     });
// }


// export handleClosePopup(){
//   popupCloseEdit.addEventListener("click", ()=>{
//     popupEdit.classList.remove("popup_opened");
//     });
// }

// export function handleAddclosePopup(){
//   closeAdd.addEventListener("click", ()=>{
//     popupAdd.classList.remove("popup_opened-add");
//   });
// }


