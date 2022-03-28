let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector(".movies_list");
let allMovies = [
    {
        name:"Forest Gump",
        watched: false,
    },
    {
        name:"Inception",
        watched: true,
    },
];

input.addEventListener("keyup",(event) =>{
    if(event.keyCode === 13){
        console.log(event.target.value);
        allMovies.push({
            name:event.target.value,
            watched: false,
        });
        event.target.value = "";
        createMovieUI();
    }
});

function deleteMovie(event){
// console.dir(event.target.parentElement.remove());
let id = event.target.dataset.id;
allMovies.splice(id,1);
createMovieUI();
}

function handleChange(event){
    // console.log(event.target);
    let id = event.target.id;
    console.log(id);
    allMovies[id].watched = !allMovies[id].watched; 
}

function createMovieUI(){
    rootElm.innerHTML = "";
    allMovies.forEach((movie, i) =>{
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.classList.add('styled-checkbox');
        input.type = "checkbox";
        input.id = i;
        input.checked = movie.watched;
        input.addEventListener('change',handleChange);
        let label = document.createElement("label");
        label.for = "1";
        label.innerText = movie.name;
        let span = document.createElement("span");
        span.innerText = "❌";
        span.setAttribute('data-id',i);
        span.addEventListener('click',deleteMovie);
        li.append(input,label,span);
        rootElm.append(li);
    });

}

createMovieUI();