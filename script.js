// set reading list to empty array

const library = []

// create book constructor
function Book (author, title, genre, read){
    this.author=author,
    this.title=title,
    this.genre=genre,
    this.read=read;
}

function handleAddBook(book){
    bookList.innerHTML += `
        <ul class="book--row">
            <li>${book.title}</li>
            <li>${book.author}</li>
            <li>${book.genre}</li>
            <li>
                ${book.read}
                <button>X</button>
            </li>
        <ul>
    `
}

function handleSubmit(e){
    e.preventDefault()
    const title = this.title.value;
    const author = this.author.value;
    const genre = this.genre.value;
    let read = this.read.checked
    
    const book = new Book(author, title, genre, read)
    library.push(book)
    handleAddBook(book)
    this.reset()
}
const bookList=document.querySelector(".library--list")
const addBook=document.querySelector(".addBook--form");
addBook.addEventListener("submit", handleSubmit)

// 5.Add styles to page

// 6. Add button to remove book from library

// 7. Add button to change read status

// 8. Setup Local Storage or firebase to maintain the data
