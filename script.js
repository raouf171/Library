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

card.append(title , author , nbpages,isread) ; 
books.appendChild(card) ; 

}

// add the event listener t the add button : 
let createBtn = document.querySelector("button") ; 
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

  



})