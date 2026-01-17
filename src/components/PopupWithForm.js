import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, handleFormSubmit){
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this._formElement = this.popupElement.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    this._submitButton = this._formElement.querySelector('button[type="submit"]');
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  close() {
  super.close();
  this._formElement.reset();
  }

  setLoading(isLoading, defaultText = "Guardar") {
  if (isLoading) {
    this._submitButton.textContent = "Guardando...";
  } else {
    this._submitButton.textContent = defaultText;
  }
  }


  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleFormSubmit(this._getInputValues());
    });
  }
}