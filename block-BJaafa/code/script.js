let key = document.querySelector("h2");
let description = document.querySelector("p");
let button = document.querySelector("button");

function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}
button.addEventListener("click",handleClick);

function handleClick(){
    let random = getRandomNumber(data.length);
    let shortcuts = data[random];
    key.innerText = shortcuts.shortcut;
    description.innerText = shortcuts.description;
}
handleClick();