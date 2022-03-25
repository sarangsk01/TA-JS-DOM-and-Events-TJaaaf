let form = document.querySelector("form");

let errorMessages = {};

function displayError(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessages[name]; 
    elm.parentElement.classList.add("error");
};
function displaySuccess(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = "";
    errorMessages[name] = "";
    elm.parentElement.classList.remove("error");
    elm.parentElement.classList.add("success");
};
let userData = {};
function handleSubmit(event){
    event.preventDefault();
    let elements = event.target.elements;
    const username = elements.username.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const passwordCheck = elements["password-check"].value;
    console.log({username,name,email,phone,password,passwordCheck});
    
    if(username.length <= 4){
        errorMessages.username = "Username can't be less than 4 characters";
        displayError("username");
    }else{
        displaySuccess("username");
    }
    if(!isNaN(name)){
        errorMessages.name = "Name can't be numbers";
        displayError("name");
    }else{
        displaySuccess("name");
    }
}
form.addEventListener("submit",handleSubmit);
