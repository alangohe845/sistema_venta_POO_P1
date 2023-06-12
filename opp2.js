// Código JavaScript
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
// Obtener referencias a los elementos HTML
const bookTitleElement = document.getElementById('bookTitle');
const bookAuthorElement = document.getElementById('bookAuthor');
const bookPriceElement = document.getElementById('bookPrice');
const showBookDataButton = document.getElementById('showBookData');

const comicTitleElement = document.getElementById('comicTitle');
const comicAuthorElement = document.getElementById('comicAuthor');
const comicPriceElement = document.getElementById('comicPrice');
const comicIllustratorsElement = document.getElementById('comicIllustrators');
const showComicDataButton = document.getElementById('showComicData');

// Crear instancias de los objetos Book y Comic
const book1 = new Book('Princesa', 'Juan', 100);
const comic1 = new Comic('batman', 'pedro', 200, ['el man1']);

// Función para mostrar los datos del libro
function showBookData() {
    bookTitleElement.textContent = 'Título: ' + book1.title;
    bookAuthorElement.textContent = 'Autor: ' + book1.author;
    bookPriceElement.textContent = 'Precio: ' + book1.price;
}

// Función para mostrar los datos del cómic
function showComicData() {
    comicTitleElement.textContent = 'Título: ' + comic1.title;
    comicAuthorElement.textContent = 'Autor: ' + comic1.author;
    comicPriceElement.textContent = 'Precio: ' + comic1.price;
    comicIllustratorsElement.textContent = 'Ilustradores: ' + comic1.illustrators.join(', ');
}

// Asociar eventos a los botones
showBookDataButton.addEventListener('click', showBookData);
showComicDataButton.addEventListener('click', showComicData);