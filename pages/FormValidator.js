// Tu constructor tiene dos parámetros. El primer parámetro es un objeto de configuración que almacena los selectores y las clases del formulario, y el segundo toma un elemento del formulario a validar.
export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
  }

  // mostrar error
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  }

  // ocultar error
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = "";
  }

  // verificar validez de input
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // ¿algún input inválido?
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  // activar/desactivar botón
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  // añadir listeners a inputs
  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  // activar validación del form
  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
    };
  }









// const showInputError = (formElement, inputElement, errorMessage, settings) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(settings.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(settings.errorClass);
// };

// const hideInputError = (formElement, inputElement, settings) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(settings.inputErrorClass);
//   errorElement.classList.remove(settings.errorClass);
//   errorElement.textContent = "";
// };




// const enableValidation = (settings) => {
//   const formList = Array.from(document.querySelectorAll(settings.formSelector));

//   // Hacemos una lista de formularios
//   formList.forEach((formElement) => {
//     formElement.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement, settings);
//   });
// };



// const setEventListeners = (formElement, settings) => {
//   const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector)); //cambio el tipo de dato de nodo a array
//   const buttonElement = formElement.querySelector(settings.submitButtonSelector);  //seleccion de buttons de cada formulario

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", function () {
//       checkInputValidity(formElement, inputElement, settings);
//       toggleButtonState(inputList, buttonElement, settings);
//     });
//   });
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, settings);
//   } else {
//     hideInputError(formElement, inputElement, settings);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// // esta función sirve para activar o desactivar el botón de envío de un formulario,
// // según si hay errores en los campos de entrada ( input) .
// const toggleButtonState = (inputList, buttonElement, settings) => {
//   console.log(hasInvalidInput(inputList));
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(settings.inactiveButtonClass);
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.classList.remove(settings.inactiveButtonClass);
//     buttonElement.disabled = false;
//   }
// };


// const settings = {
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: "button[type='submit']",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible"

// };

// enableValidation(settings);