let myLibrary = [];

const theHobbit = new Book("The Hobbit","J.R.R. Tolkien", 295, false);
const it = new Book("IT","Stephen King", 1295, false);
const yearBook = new Book("Year Book","Seth Rogen", 125, false);
const formContainer = document.querySelector('#addBook');

myLibrary.push(theHobbit);
myLibrary.push(it);
myLibrary.push(yearBook);

displayLibrary();







//Listen for buttonclick and display form when clicked
const addBookBtn = document.querySelector('#addBookOpen');
const addBookSubmit = document.querySelector('#submit');
addBookBtn.addEventListener('click', () => {
    formContainer.style.display = "block";
});



addBookSubmit.addEventListener('click', addBookToLibrary);

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



function addBookToLibrary(){
    const form = document.querySelector("#addBookForm");
    const bookTitle = document.querySelector("#bookTitle");
    const bookAuthor = document.querySelector("#bookAuthor");
    const bookPages = document.querySelector("#bookPages");
    const newBook = new Book(bookTitle.value, bookAuthor.value,bookPages.value,false);
    myLibrary.push(newBook);
    console.log(myLibrary);
    formContainer.style.display = "none";
    form.reset();
    displayLibrary();
}

function removeBookFromLibrary(index){
    console.log(myLibrary);
    myLibrary.splice(index,1);
    displayLibrary();
}

function displayLibrary(){
    const container = document.querySelector('.library');
    //clear the library display area
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    
    //Create a card for each book in the array
    myLibrary.forEach(function(book, index){
        console.log(book);
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');
        bookCard.setAttribute('data-position', `${index}`);   
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const removeContainer = document.createElement('div');
        const remove = document.createElement('button');
        remove.classList.add('removeButton')
        remove.textContent = "Remove";
        remove.setAttribute('data-position', `${index}`); 

        title.textContent = `${book.title}`;
        author.textContent = `${book.author}`;
        pages.textContent = `${book.pages}`;

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        removeContainer.appendChild(remove);
        bookCard.appendChild(removeContainer);

    
        container.appendChild(bookCard);
    })
    const removeButtons = document.querySelectorAll('.removeButton');

    removeButtons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
            console.log(button.dataset.position);
            removeBookFromLibrary(button.dataset.position);
        });
    });


}