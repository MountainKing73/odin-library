const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {
  const library = document.querySelector("#library");

  const table = document.createElement("table");

  const headers = ["Title", "Author", "Pages", "Read"];
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of headers) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }

  for (let element of myLibrary) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }

  library.append(table);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, Boolean(true));
const carrie = new Book("Carrie", "Stephen King", 322, Boolean(true));
const theSorcerers = new Book(
  "Harry Potter and the Sorcerer's Stone",
  "J.K. Rowling",
  345,
  Boolean(false),
);

addBookToLibrary(theHobbit);
addBookToLibrary(carrie);
addBookToLibrary(theSorcerers);

console.log(myLibrary);

displayLibrary();
