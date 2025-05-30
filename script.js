let myLibrary = []

function Book(title,author,pages,read){
     if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title
    this.author = author
    this.pages = pages 
    this.id = crypto.randomUUID()
    
    this.read = read ? 'Yes' : 'No';
}



function addBookToLibrary(title,author,pages = 0,read){
    myLibrary.push(new Book(title,author,pages,read))
}






console.log(myLibrary)



const container = document.querySelector(".container")

const bookContainer = document.createElement("div")

const addBook = document.querySelector(".add-book")
const dialog = document.querySelector("dialog")

addBook.addEventListener("click", () =>{
    dialog.showModal();
    dialog.classList.add('show');
    
})
container.appendChild(bookContainer)
function displayBooks(){
    
    bookContainer.innerHTML = ''
    myLibrary.forEach((element) => {
    
    const BookInfo = document.createElement("div")
    const Title = document.createElement("div")
    const Author = document.createElement("div")
    const Pages = document.createElement("div")
    const Read = document.createElement("div")
    const removeButton = document.createElement("button")
    const changeReadButton = document.createElement("button")
    changeReadButton.textContent = 'Read'
    removeButton.textContent = 'Remove'
    changeReadButton.classList.add("read-button")
    removeButton.classList.add("remove-button")
    
    removeButton.setAttribute("data-id", element.id)
changeReadButton.setAttribute("data-id", element.id)
    Title.classList.add("title")
    Author.classList.add("author")
    Pages.classList.add("pages")
    Read.classList.add("read")
  

    bookContainer.classList.add("book-container")
    BookInfo.classList.add("book-info")
    
    
    bookContainer.appendChild(BookInfo)
    BookInfo.append(Author,Title,Pages,Read,removeButton,changeReadButton)
    
    Author.textContent = element.author
    Title.textContent = element.title
    Pages.textContent = element.pages
    Read.textContent = element.read
    
    removeButton.addEventListener("click", (e) => {
    const BookId = e.target.getAttribute("data-id")
    myLibrary = myLibrary.filter(book => book.id != BookId)
    displayBooks()
})
    changeReadButton.addEventListener("click", (e) => {
        const BookId = e.target.getAttribute("data-id")
        const book = myLibrary.find(b => b.id === BookId)
        if(book){
            book.read = book.read === 'Yes' ? 'No' : 'Yes'
        }
        displayBooks()
    })
})

}




const addInputsButton = document.getElementById('dialog-button')

addInputsButton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Button clicked") // Check if this appears
    let formAuthor = document.getElementById('author')
    let formTitle = document.getElementById('title')
    let formPage = document.getElementById('pages')
    let formRead = document.getElementById('read')
    let readValue = formRead.checked
    addBookToLibrary(formAuthor.value,formTitle.value,formPage.value,readValue)
    displayBooks()
    
    dialog.close()
    dialog.classList.remove('show')
}
)
