let myLibrary = [];

const theHobbit = new Book("The Hobbit","J.R.R. Tolkien", 295, false);
const it = new Book("IT","Stephen King", 1295, false);

myLibrary.push(theHobbit);
myLibrary.push(it);


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read == true){
        this.read = "read";
    } else {
        this.read = "not yet read";
    }

    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${this.read}`;
    }
}



function addBookToLibrary(){

}

function displayLibrary(){
    const container = document.querySelector('.library');

    myLibrary.forEach(function(book){
        console.log(book);
        const bookCard = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');

        title.textContent = `${book.title}`;
        author.textContent = `${book.author}`;
        pages.textContent = `${book.pages}`;

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);

        /*const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'This is the glorious text-content!';*/
    
        container.appendChild(bookCard);
    })


}