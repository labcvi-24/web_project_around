//   const popupImage = document.querySelector("#popup-image");
//   const popupPhoto = popupImage.querySelector(".popup-image__photo");
//   const popupCaption = popupImage.querySelector(".popup-image__caption");
//   const popupImageClose = popupImage.querySelector(".popup-image__close");



//   this.cardPhoto.addEventListener("click", function () {

//     this.popupPhoto.src = link;
//     this.popupPhoto.alt = title;
//     this.popupCaption.textContent = title;
//     this.popupImage.style.display = "flex";
//   });

// popupImage.addEventListener("click", function (event) {
//   if (event.target === popupImage) {
//     popupImage.style.display = "none";
//   }
// });

//   popup.addEventListener("click", function(event){
//     if (event.target === popup) {
//       popup.classList.remove("popup_opened");
//     }
//   });

//   popupAdd.addEventListener("click", function (event) {
//   if (event.target === popupAdd) {
//     popupAdd.classList.remove("popup_opened-add");
//   }
// });

//   popupImageClose.addEventListener("click", function () {
//   popupImage.style.display = "none";
// });


// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Escape') {
//     popupAdd.classList.remove("popup_opened-add");
//     popup.classList.remove("popup_opened");
//     popupImage.style.display = "none";
//   }
// });