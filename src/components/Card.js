export default class Card {
  constructor(data, cardTemplete,handleImageClick, handleLike, handleDelete, currentUserId ){
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._currentUserId = currentUserId;


    this._cardTemplete = cardTemplete;
    this._handleImageClick = handleImageClick;
    this._handleLike = handleLike;
    this._handleDelete = handleDelete;
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
    this.cardImage.alt = this._name;

    this.cardImage.onload = ()=> {
      this._renderLike();
      this._setEventListeners();
    }

    this.cardImage.onerror = () => {
      console.log("Error al cargar la imagen:", this._link);
    };

    this.cardImage.src = this._link;

    return this.cardElement;
  }

  _setEventListeners(){
    this.cardImage.addEventListener("click", ()=>
      this._handleImageClick(this._name, this._link)
    );

    this.likeButton.addEventListener("click", () =>
      this._handleLike(this)
    );

    this.deleteButton.addEventListener("click", ()=>
      this._handleDelete(this)

    );
  }

  _renderLike() {
    this.likeButton.classList.toggle(
      'card__button-like_active',
      this._isLiked
    );
  }

  updateLikes(data) {
  this._isLiked = data.isLiked;   // actualizar el estado real
  this._renderLike();
  }

  getId() {
    return this._id;
  }

  isLiked() {
    return this._isLiked;
  }

  removeCard() {
    this.cardElement.remove();
  }
}



