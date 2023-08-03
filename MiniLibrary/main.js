const btnAdd = document.getElementById('btnAdd')
const myForm = document.getElementById('myForm')


function sampleObject (title, author, pages ,haveread){ // object constructor
this.title = title
this.author = author
this.pages = pages
this.haveread = haveread

// this.printThis = function(){
//     console.log(title, author, pages, haveread)
// }
}


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
        console.log(value)
        if(value instanceof HTMLInputElement && value.type === 'checkbox'){
            const isChecked = value.checked ? 'Checked' : 'NotChecked'
            paragraph.textContent = `${ket} : ${isChecked}`
        }
        else{
            console.log(value.checked)
            paragraph.textContent = `${ket} : ${sample1[ket]}`
            
        }
        newBook.appendChild(paragraph)
    }
    
    newBook.classList.add('NewBook')
    Parentcontainer.append(newBook)
    


})


// console.log(sample1.printThis())

btnAdd.addEventListener('click', function(){
myForm.classList.add('active')

})