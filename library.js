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

  if (document.contains(document.getElementById("libraryTable"))) {
    document.getElementById("libraryTable").remove();
  }

  const table = document.createElement("table");
  table.setAttribute("id", "libraryTable");

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

function submitClick(event) {
  console.log("Submit clicked");
  event.preventDefault();

  const bookTitle = document.querySelector("#bname");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");

  console.log("book title object: " + bookTitle);
  console.log("title: " + bookTitle.value);
  console.log("author: " + author.value);
  console.log("pages: " + pages.value);

  const newBook = new Book(
    bookTitle.value,
    author.value,
    pages.value,
    Boolean(false),
  );
  addBookToLibrary(newBook);

  displayLibrary();

  bookTitle.value = "";
  author.value = "";
  pages.value = "";
}

const button = document.querySelector("#create-button");
button.addEventListener("click", submitClick, false);

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
