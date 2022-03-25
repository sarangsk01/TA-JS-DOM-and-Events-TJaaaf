let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modalInfo = document.querySelector(".modal_info");

let userData = {};
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let elements = event.target.elements;
    userData.name = elements.name.value;
    userData.email = elements.email.value;
    userData.choice = elements.choice.value;
    userData.color = elements.color.value;
    userData.movie = elements.movie.value;
    userData.book = elements.book.value;
    userData.terms = elements.terms.checked;
    console.log(userData);
    modal.classList.add("open");
    let close = document.querySelector(".modal_close");
    close.addEventListener('click',()=>{
        modal.classList.remove("open");
    });
    displayInfo(userData);
});

function displayInfo(data = {}){
    modalInfo.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let email = document.createElement("h1");
    email.innerText = `Email: ${data.email}`;
    let choice = document.createElement("h1");
    choice.innerText = `Watching Choice: ${data.choice}`;
    let color = document.createElement("h1");
    color.innerText = `Color: ${data.color}`;
    let movie = document.createElement("h1");
    movie.innerText = `Rating for movie: ${data.movie}`;
    let book = document.createElement("h1");
    book.innerText = `Book: ${data.book}`;
    let terms = document.createElement("h1");
    terms.innerText = `Hello ${data.terms  ? "You have accepted the terms and condition" : "You have not accepted the terms and condition"}`;
    modalInfo.append(h1,email,choice,color,movie,book,terms);
}