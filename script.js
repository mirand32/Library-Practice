// set reading list to empty array

const Library = []

// create book constructor
function Book (author, title, fiction, read){
    this.author=author,
    this.title=title,
    this.fiction=fiction,
    this.read=read;
    console.log(this)
}

const grinch = new Book("Dr Seuss", "Grinch", true, false)


// 1. Create format for user to input data

// 2. Hook up input so that it adds to library

// 3. Create format for userdata to be displayed

// 4. Have data be updated on each submit

// 5.Add styles to page

// 6. Add button to remove book from library

// 7. Add button to change read status

// 8. Setup Local Storage to maintain the data
