let library = []

function renderLibrary(){
    bookList.innerHTML="";
    db.collection('books').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            const book = doc.data()
            bookList.innerHTML += `
            <ul class="book--row" id="${doc.id}">
                <li>${book.title}</li>
                <li>${book.author}</li>
                <li>${book.genre}</li>
                <li > 
                    <button class="book--button book--button__read">${book.read ? "Read" : "Not Read"}</button>
                </li>
                <li><button class="book--button book--button__delete"></button></li>
            <ul>
        ` 
        })
    }).then(()=>checkButtons())

}

function checkButtons(){
    const deleteButtons = document.querySelectorAll(".book--button__delete")
    deleteButtons.forEach(button => button.addEventListener("click", handleDelete))

    const readButtons = document.querySelectorAll(".book--button__read")
    readButtons.forEach(button => button.addEventListener("click", toggleRead))
}

function handleDelete(){
    const id = this.parentElement.parentElement.id
    db.collection("books").doc(id).delete()
    renderLibrary()
}

function addToLibrary(){
    db.collection("books").add({
        title : form.title.value,
        author : form.author.value,
        genre : form.genre.value,
        read : form.read.checked
    })

    form.reset() // reset form
}

function handleSubmit(e){
    e.preventDefault() //prevent page refresh
    addToLibrary() //addbook to table
    renderLibrary() //update html
    toggleDisplay() //hide form
}

function toggleDisplay(){
    form.classList.toggle("displayForm")
}

function toggleRead(e){
    const id = this.parentElement.parentElement.id
    const readStatus = !(this.innerHTML == "Read")
    db.collection("books").doc(id).update({
        read:readStatus
    })
    renderLibrary()
}

const form = document.querySelector(".addBook--form");
const bookList=document.querySelector(".library--list");
const submitBook=document.querySelector(".addBook--button");
const addBook=document.querySelector(".addBook--form");
addBook.addEventListener("submit", handleSubmit)

renderLibrary()
