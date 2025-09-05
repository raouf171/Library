//all elements are saved in array  : 
const library =[] ;

let books =document.querySelector(".books") ; // the books cards container
let forma = document.querySelector("form") ;  // the form


//the books are objects , i'll create constructor 

function Book(title , author , nbpages , isread){
  this.id = crypto.randomUUID() ; 
  this.title = title ; 
  this.author = author ; 
  this.nbpages = nbpages ; 
  this.isread = isread ; 

}
//function to create books from the form info and put it into the library  : 
function createBook(title , author , nbpages , isread){
  let newBook = new Book(title ,author,nbpages,isread) ; 
  library.push(newBook) ; 

}

function displayLibrary(){
  refrechLibrary() ; 
  library.forEach(element => {
    element.displayBook() ; 
  });
}

function refrechLibrary(){
  let main = document.querySelector(".books") ;
  main.innerHTML=""
}

//the cancel button
let cancel = document.querySelector("#cancel") ; 
cancel.textContent="cancel"
cancel.addEventListener("click" , ()=>{
  forma.style.display="none" ;
  let inp = document.querySelectorAll("input") ; 
   inp.forEach(element => {
    element.value="" ; 
    element.checked=false
    
   });
})

Book.prototype.displayBook= function(){
  let card = document.createElement("div") ; 
  card.classList.add("cards") ; 
let title = document.createElement("h3");
title.textContent=this.title ; 

let author = document.createElement("p") ; 
author.textContent=this.author ; 

let nbpages = document.createElement("p") ; 
nbpages.textContent=this.nbpages ; 

let isread = document.createElement("p") ; 
isread.textContent= this.isread ; 

/*creating the button of toggle */
let toggleBtn = document.createElement("button") ; 
toggleBtn.classList.add("toggleBtn") ; 
if (this.isread ===true){
  toggleBtn.style.backgroundColor="#A4D061"
  toggleBtn.textContent="readed"
}else {
  toggleBtn.style.backgroundColor="rgba(231, 16, 16, 0.447)"
  toggleBtn.textContent=" not readed"
}

toggleBtn.addEventListener("click" , ()=>{
  //change toggle
  if (this.isread===true){
    this.isread = false ;
  } else {
    this.isread=true ; 
  }
  //change color
  if (this.isread ===true){
    toggleBtn.style.backgroundColor="#A4D061"
    toggleBtn.textContent="readed"
  }else {
    toggleBtn.style.backgroundColor="rgba(231, 16, 16, 0.447)"
    toggleBtn.textContent=" not readed"
  }
})

//add delete button
let deleteBtn = document.createElement("button") ; 
deleteBtn.classList.add("deleteBtn") ; 
deleteBtn.textContent="delete" ; 
deleteBtn.addEventListener("click",()=>{
  let index = library.indexOf(this);
  if (index !== -1) {
    library.splice(index, 1); 
    displayLibrary();         
  }

})



card.append(title , author , nbpages,toggleBtn,deleteBtn) ; 
books.appendChild(card) ; 

}





// add the event listener t the add button : 
let createBtn = document.querySelector("#add") ; 
createBtn.addEventListener("click" , ()=> {
  //display the form : 
  forma.style.display="block" ; 
})

forma.addEventListener("submit" ,(e)=>{
  e.preventDefault () ; 
  let title= document.querySelector("#title").value ; 
  let author = document.querySelector("#author").value ; 
  let nbpages = document.querySelector("#nbpages").value ; 
  let isread = document.querySelector("#isread").checked ; 
    
  forma.style.display="none" ; 
  createBook(title,author,nbpages,isread) ; 
  displayLibrary() ; 

  let inp = document.querySelectorAll("input") ; 
 inp.forEach(element => {
  element.value ="" ; 

  let ok =document.querySelector("#submit") ; 
  ok.value ="submit"
  
 });
  


  



})