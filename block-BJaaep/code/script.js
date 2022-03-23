const NUMBERS = [1,2,3,4,5,6,7,8,9,10,11,12];
function handleEvent(event){
    console.log(event.target,"Event");
}

let root = document.querySelector(".second");
root.addEventListener("click",handleEvent);

NUMBERS.forEach((number)=>{
    let li = document.createElement("li");
    li.classList.add("box");
    li.setAttribute("data-text",number);
    root.append(li);
});


function handleEvent(event){
    // console.log(event.target.dataset.number);
    // console.dir(event.target);
    let number = event.target.dataset.number;
}

let firstBoxes = document.querySelectorAll(".first li");
let secondBox = document.querySelector(".second");
firstBoxes.forEach((box) => {
    box.addEventListener("click",(event) =>{
        console.log("Test");
        event.target.innerText = 1;

        setTimeout(() => {
            event.target.innerText = "";
        }, 5000);
    });

    });
    secondBox.addEventListener("click",(event) => {
        console.log(event.target);
});