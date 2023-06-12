const _private = new WeakMap();
//Creamos la clase principal
class Book {
  constructor(title, author, price) {
    const properties = {
      _title: title,
      _author: author,
      _price: price,
    };
    _private.set(this, properties);
  }
  get title() {
    return _private.get(this)._title;
  }

  set title(newTitle) {
    return (_private.get(this)._title = newTitle);
  }
  get author() {
    return _private.get(this)._author;
  }

  set author(newAuthor) {
    return (_private.get(this)._author = newAuthor);
  }
  get price() {
    return _private.get(this)._price;
  }

  set price(newPrice) {
    return (_private.get(this)._price = newPrice);
  }
  getAllData() {
    console.log(
      `Titulo: ${this.title}, Autor: ${this.author}, Precio: ${this.price}`
    );
  }
}

class Comic extends Book {
  constructor(name, author, price, illustrators) {
    super(name, author, price);
    this.illustrators = illustrators;
  }
  addIllustrator(newIllustrator = []) {
    this.illustrators.push(newIllustrator);
  }
  getAllData() {
    const bookData = `Titulo: ${this.title}, Autor: ${this.author}, Precio: ${this.price}`;
    const illustratorsData = `Ilustradores: ${this.illustrators}`;
    console.log(bookData + " " + illustratorsData);
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }
  addProduct(amount, price) {
    this.products.push(...Array(amount).fill(price));
  }
  showProducts() {
    console.log(this.products);
  }
  calcTotal() {
    return this.products
      .map((price) => price)
      .reduce((ac, price) => ac + price, 0);
  }
  printTicket() {
    console.log(`Total a pagar: ${this.calcTotal()}`);
  }
}

//Declaramos las referencias de HTML
const bookTitleElement = document.getElementById("bookTitle");
const bookAuthorElement = document.getElementById("bookAuthor");
const bookPriceElement = document.getElementById("bookPrice");
const showBookDataButton = document.getElementById("showBookData");

const comicTitleElement = document.getElementById("comicTitle");
const comicAuthorElement = document.getElementById("comicAuthor");
const comicPriceElement = document.getElementById("comicPrice");
const comicIllustratorsElement = document.getElementById("comicIllustrators");
const showComicDataButton = document.getElementById("showComicData");
//This entra como referencia a cada uno de los objetos que se van creando
const book1 = new Book("Princesa", "Juan", 100);

console.log(book1.title);
book1.title = "juanita";
console.log(book1.title);

const comic1 = new Comic("batman", "pedro", 200, ["el man1"]);
comic1.addIllustrator("el man 2");
console.log(comic1.illustrators);

const cart = new ShoppingCart();

cart.addProduct(2, comic1.price);
cart.addProduct(1, book1.price);
cart.showProducts();
cart.printTicket();
book1.getAllData();
comic1.getAllData();
