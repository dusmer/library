let myLibrary = [];

const theHobbit = new Book("The Hobbit","J.R.R. Tolkien", 295, false);
const it = new Book("IT","Stephen King", 1295, true);
const yearBook = new Book("Year Book","Seth Rogen", 125, false);


myLibrary.push(theHobbit);
myLibrary.push(it);
myLibrary.push(yearBook);

displayLibrary();


//Listen for buttonclick and display form when clicked
const formContainer = document.querySelector('#addBook');
const addBookBtn = document.querySelector('#addBookOpen');
const addBookSubmit = document.querySelector('#submit');
addBookBtn.addEventListener('click', () => {
    formContainer.style.display = "block";
});
addBookSubmit.addEventListener('click', addBookToLibrary);

//Book object constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.changeStatus = function(){
        console.log(read);
        if (this.read == true){
            this.read = false;
        }else{
            this.read = true;
        }
    }
}

//Get book values from the form fields and create a new book object
function addBookToLibrary(){
    const form = document.querySelector("#addBookForm");
    const bookTitle = document.querySelector("#bookTitle");
    const bookAuthor = document.querySelector("#bookAuthor");
    const bookPages = document.querySelector("#bookPages");
    const bookRead = document.querySelector('#read');
    const newBook = new Book(bookTitle.value, bookAuthor.value,bookPages.value,bookRead.checked);
    
    myLibrary.push(newBook);
    
    //Clear the form, hide it, and update the library display
    formContainer.style.display = "none";
    form.reset();
    displayLibrary();
}

//Determine the book position in the array from the data-attributes and splice out that element
function removeBookFromLibrary(index){
    myLibrary.splice(index,1);
    displayLibrary();
}

function displayLibrary(){
    console.log(myLibrary);
    const container = document.querySelector('.library');
    
    //clear the library display area
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    
    //Create a card for each book in the array
    myLibrary.forEach(function(book, index){
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');
        bookCard.setAttribute('data-position', `${index}`);   
        
        //Basic book values
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        title.classList.add('cardTitle');
        author.classList.add('cardAuthor');
        pages.classList.add('cardPages');
        
        title.textContent = `${book.title}`;
        author.textContent = `${book.author}`;
        pages.textContent = `${book.pages}`;

        //Create a container and button for the read status
        const readContainer = document.createElement('div');
        const readButton = document.createElement('button');
        readButton.setAttribute('data-position', `${index}`); 
        readButton.classList.add('readButton')
        if (book.read == true){
            readButton.textContent = "Read";
        }else{
            readButton.textContent = "Unread";

        }        


        //Create a container and button to remove the book
        const removeContainer = document.createElement('div');
        const removeButton = document.createElement('button');
        removeButton.classList.add('removeButton')
        removeButton.textContent = "Remove";
        removeButton.setAttribute('data-position', `${index}`); 

        //Construct card elements
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        removeContainer.appendChild(removeButton);
        bookCard.appendChild(removeContainer);
        readContainer.appendChild(readButton);
        bookCard.appendChild(readContainer);
        container.appendChild(bookCard);
    })

    //Add an event listener for every remove button
    const removeButtons = document.querySelectorAll('.removeButton');
    removeButtons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
            removeBookFromLibrary(button.dataset.position);
        });
    });

    //Add an event listener for every remove button
    const readButtons = document.querySelectorAll('.readButton');
    readButtons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
            console.log(button.textContent);
            if (button.textContent == "Read"){
                updateBookReadStatus(false,button.dataset.position);
            }else {
                updateBookReadStatus(true,button.dataset.position);
            }
        });
    });

}

function updateBookReadStatus(status,index){

    book = myLibrary[index];
    book.changeStatus();
    displayLibrary();
}