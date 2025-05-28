const myLibrary = []

function Book(title,author,pages,read){
     if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title
    this.author = author
    this.pages = pages 
    this.id = crypto.randomUUID()
    if(read == true){
        this.read = 'Yes'
    }else this.read = 'No'
    
}



function addBookToLibrary(title,author,pages = 0,read){
    myLibrary.push(new Book(title,author,pages,read))
}

addBookToLibrary('Hobbit','Nigger',150,true)
addBookToLibrary('officer',`cantbreath`,69,false)

console.log(myLibrary)



  const container = document.querySelector(".container")

const bookContainer = document.createElement("div")

container.appendChild(bookContainer)
myLibrary.forEach((element) => {
    const BookInfo = document.createElement("div")
    const Title = document.createElement("div")
    const Author = document.createElement("div")
    const Pages = document.createElement("div")
    const Read = document.createElement("div")
  
    
    Title.classList.add("title")
    Author.classList.add("author")
    Pages.classList.add("pages")
    Read.classList.add("read")
  

    bookContainer.classList.add("book-container")
    BookInfo.classList.add("book-info")
    
    
    bookContainer.appendChild(BookInfo)
    BookInfo.append(Author,Title,Pages,Read)
    
    Author.textContent = element.author
    Title.textContent = element.title
    Pages.textContent = element.pages
    Read.textContent = element.read
    
})

