const btnAdd = document.getElementById('btnAdd')
const myForm = document.getElementById('myForm')
let totalBooks = document.getElementById('totalBooks')
let totalRead = document.getElementById('totalRead')
let totalUnRead = document.getElementById('totalUnread')




function sampleObject (title, author, pages ,haveread){ // object constructor
this.title = title
this.author = author
this.pages = pages
this.haveread = haveread

// this.printThis = function(){
//     console.log(title, author, pages, haveread)
// }
}

   let counter = 0
   let readCounter = 0, unreadCounter = 0, newBookId = 0;

myForm.addEventListener('submit', function(event){
    event.preventDefault();

    const title = myForm.elements.titles.value
    const author = myForm.elements.authors.value
    const pages = myForm.elements.pagess.value
    const haveread = myForm.elements.haveRead

    let sample1 = new sampleObject(title, author, pages, haveread )
    // console.log(sample1.title)
    // console.log(sample1.author)
    // console.log(sample1.pages)
    // console.log(sample1.haveread)


    let newBook = document.createElement("div")
    let Parentcontainer = document.querySelector('.newBooks-Container')
  
    for(const ket in sample1){
        const paragraph = document.createElement('p')
        const value = sample1[ket]
        // console.log(value)


        if(value instanceof HTMLInputElement && value.type === 'checkbox'){
            const isChecked = value.checked ? (readCounter++ , 'Checked') : (unreadCounter++, 'NotChecked')

            paragraph.textContent = `${ket} : ${isChecked}`
        }
        else{
            // console.log(value.checked)
            paragraph.textContent = `${ket} : ${sample1[ket]}`
            
        }
        newBook.appendChild(paragraph)
        
    }

    counter+=1
    newBookId++
    newBook.classList.add('NewBook')
    newBook.classList.add(`book-${newBookId}`);
    Parentcontainer.append(newBook)

    Parentcontainer.addEventListener('click', function(event){
        const clickedEvent = event.target

        if(clickedEvent.classList.contains('NewBook')){
            
            const bookId = Array.from(clickedEvent.classList).find(className => className.startsWith('book-'));
            if(bookId){
                const id = bookId.replace('book-', '');
                // Now you have the id of the clicked book
                
                const BooktoRemove = document.querySelector(`.book-${id}`)

                if(BooktoRemove){
                    Parentcontainer.removeChild(BooktoRemove)
                }
            }
        }

    })

    
    totalBooks.textContent = counter
    totalRead.textContent = readCounter
    totalUnRead.textContent = unreadCounter


})



// console.log(sample1.printThis())

btnAdd.addEventListener('click', function(){
if(myForm.classList.contains('hidden')){
    myForm.classList.remove('hidden')
    myForm.classList.add('active')
}
else if(myForm.classList.contains('active')){
    myForm.classList.remove('active')
    myForm.classList.add('hidden')
}

})



// document.addEventListener('DOMContentLoaded', function() {
//     const NewBookElement = document.querySelector('.NewBook');
  
//     NewBookElement.addEventListener('click', function() {
//       console.log('Hello World');
//     });
//   });