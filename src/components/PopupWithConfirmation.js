import Popup from "../components/Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.buttonConfirmation = this.popupElement.querySelector(".popup__button-submit_confirmation");
  }

  open(handleConfirm) {
    this._handleConfirm = handleConfirm;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this.buttonConfirmation.addEventListener('click', () => {
      console.log('Botón SI escuchado');
      if (this._handleConfirm) this._handleConfirm();
    });
  }

  }


