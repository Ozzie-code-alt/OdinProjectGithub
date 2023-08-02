const btnAdd = document.getElementById('btnAdd')





function sampleObject (title, author, pages ,haveread){ // object constructor
this.title = title
this.author = author
this.pages = pages
this.haveread = haveread

this.printThis = function(){
    console.log(title, author, pages, haveread)
}
}


const sample1 = new sampleObject('Mr. Bean', 'Justin', '29 Pages' , 'Yes')

// console.log(sample1.printThis())



btnAdd.addEventListener('click', function(){
let newBook = document.createElement("div")
let Parentcontainer = document.querySelector('.newBooks-Container')
newBook.textContent = sample1.pages



newBook.classList.add('NewBook')
Parentcontainer.append(newBook)
})