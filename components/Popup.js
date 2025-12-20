
export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);

  }

  open(){
    this.popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);

  }
  close(){
    this.popupElement.classList.remove("popup_opened")
    document.removeEventListener("keydown", this._handleEscClose);

  }

  _handleEscClose = (event)=>{
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners(){
    this.popupElement.querySelector(".popup__button-close").addEventListener("click", ()=>{
      this.close();
    });

    this.popupElement.addEventListener("click", (evt)=>{
      if (evt.target === this.popupElement) {
      this.close();
    }
  });

  }

}