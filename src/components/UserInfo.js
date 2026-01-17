export default class UserInfo {
  constructor({nameSelector, aboutSelector, avatarSelector}) {
    this.nameElement = document.querySelector(nameSelector);
    this.aboutElement =document.querySelector(aboutSelector);
    this.avatarElement = document.querySelector(avatarSelector);
  }
// Devuelve un objeto con la información actual del usuario
  getUserInfo(){
    return {
      name: this.nameElement.textContent,
      about: this.aboutElement.textContent,
      avatar: this.avatarElement.src
    };
  }

  // Actualiza la información del usuario en la página
  setUserInfo({ name, about, avatar }) {
    this.nameElement.textContent = name;
    this.aboutElement.textContent = about;
    this.avatarElement.src = avatar;
  }
}