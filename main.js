let myLibrary = [];

const theHobbit = new Book("The Hobbit","J.R.R. Tolkien", 295, false);
const it = new Book("IT","Stephen King", 1295, false);

myLibrary.push(theHobbit);


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

    myLibrary.foreach(function(itemsf){
        /*const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'This is the glorious text-content!';
    
        container.appendChild(content);*/
    })


}