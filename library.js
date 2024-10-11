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

function submitDelete(event) {
  myLibrary.splice(event.target.getAttribute("data-index-number"), 1);

  displayLibrary();
}

function submitRead(event) {
  const indexNum = event.target.getAttribute("data-index-number");
  myLibrary[indexNum].read = !myLibrary[indexNum].read;

  displayLibrary();
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

  for (var i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow();
    for (key in myLibrary[i]) {
      let cell = row.insertCell();
      let text = document.createTextNode(myLibrary[i][key]);
      cell.appendChild(text);
    }
    let delCell = row.insertCell();
    let delButton = document.createElement("BUTTON");
    delButton.textContent = "Delete";
    delButton.setAttribute("data-index-number", i);
    delButton.addEventListener("click", submitDelete);
    delCell.appendChild(delButton);

    let readCell = row.insertCell();
    let readButton = document.createElement("BUTTON");
    readButton.textContent = "Toggle Read";
    readButton.setAttribute("data-index-number", i);
    readButton.addEventListener("click", submitRead);
    readCell.appendChild(readButton);
  }

  library.append(table);
}

function submitClick(event) {
  event.preventDefault();

  const bookTitle = document.querySelector("#bname");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const nameError = document.querySelector("#name-error");
  const authorError = document.querySelector("#author-error");
  const pagesError = document.querySelector("#pages-error");

  let isValid = true;

  if (bookTitle.value.length === 0) {
    nameError.textContent = "Title must be entered.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  if (author.value.length === 0) {
    authorError.textContent = "Author must be entered.";
    isValid = false;
  } else {
    authorError.textContent = "";
  }

  if (pages.value.length === 0) {
    isValid = false;
    pagesError.textContent = "Pages must be entered.";
  } else {
    pagesError.textContent = "";
  }

  if (isValid) {
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
    const dialog = document.querySelector("#newDialog");
    dialog.close();
  }
}

function addClick(event) {
  const dialog = document.querySelector("#newDialog");
  dialog.showModal();
}

const button = document.querySelector("#create-button");
button.addEventListener("click", submitClick, false);

const addButton = document.querySelector("#addBook");
addBook.addEventListener("click", addClick);

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

displayLibrary();
