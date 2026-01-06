import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.imageElement = this.popupElement.querySelector(".popup__photo");
    this.captionElement = this.popupElement.querySelector(".popup__caption");
  }

  open(name,link){
    super.open();// Llama al método open() del padre para mostrar el popup
    this.imageElement.src = link;
    this.imageElement.alt = name;
    this.captionElement.textContent = name;
  }

}