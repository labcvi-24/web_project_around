
export default class Section {
  constructor({items,renderer}, containerSelector) {
    this.items = items;
    this.renderer =renderer;
    this.container = document.querySelector(containerSelector);

  }

renderItems() {
  this.container.innerHTML = ''; // limpiar contenedor
  this.items.forEach((item) => {
    const element = this.renderer(item);
    this.addItem(element);
  });
  }

  setItems(items) {
  this.items = items;
  this.renderItems();
}

  addItem(element){
    this.container.prepend(element);

  }
}