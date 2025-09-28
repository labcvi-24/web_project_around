
export default class Card {
  constructor(name, link, cardTemplete,handleImageClick){
    this._name = name;
    this._link = link;
    this._cardTemplete = cardTemplete;
    this._handleImageClick = handleImageClick;
  }

  _getCardElement(){
    const elementCard = document.querySelector(this._cardTemplete).content.querySelector(".card").cloneNode(true);
    return elementCard;
  }

  createCard(){
    this.cardElement = this._getCardElement();

    this.cardTitulo = this.cardElement.querySelector(".card__name");
    this.cardImage = this.cardElement.querySelector(".card__photo");
    this.likeButton = this.cardElement.querySelector(".card__button-like");
    this.deleteButton = this.cardElement.querySelector(".card__remove");

    this.cardTitulo.textContent = this._name;
    this.cardImage.src = this._link;
    this.cardImage.alt = this._name;

    this._setEventListeners();

    return this.cardElement;
  }

  _setEventListeners(){
    this.cardImage.addEventListener("click", ()=>{
      this._handleImageClick(this._name, this._link);
    });

    this.likeButton.addEventListener("click", ()=>{
      this._handleLikeButton();
    });

    this.deleteButton.addEventListener("click", ()=>{
      this._handleDeleteButton();
    });

  }

  _handleLikeButton(){
    this.likeButton.classList.toggle("card__button-like_active");
  }

  _handleDeleteButton(){
    this.cardElement.remove();
  }
}

