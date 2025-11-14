export default class UserInfo {
  constructor({nameSelector, aboutSelector}) {
    this.nameElement = document.querySelector(nameSelector);
    this.aboutElement =document.querySelector(aboutSelector);
  }
// Devuelve un objeto con la información actual del usuario
  getUserInfo(){
    return {
      name: this.nameElement.textContent,
      about: this.aboutElement.textContent
    };
  }

  // Actualiza la información del usuario en la página
  setUserInfo({ name, about }) {
    this.nameElement.textContent = name;
    this.aboutElement.textContent = about;
  }
}