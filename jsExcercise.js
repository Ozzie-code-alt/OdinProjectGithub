function Book (title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead

    this.information = function(){
        console.log(title, author , pages, isRead)
    }

}

const Book1 = new Book("The Hobbit", "Justin Santos", 17, "Yep")

console.log(Book1.information())


