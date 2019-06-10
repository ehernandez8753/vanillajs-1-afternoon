let inputSetId = document.getElementById("idInput");
let inputSetColor = document.getElementById("colorInput");
let toRandomizeCards = false;

console.log(inputSetColor, inputSetId);

function setCard(){
    let card = document.getElementById(idInput.value);
    card.style.color = inputSetColor.value;
}

function resetCards(){
    let card = document.getElementById("diamonds");
    let mainBodyUI = document.getElementById("mainUI");

    mainBodyUI.style.backgroundColor = "white";
    card.style.color = "gray";
    card = document.getElementById("clubs");
    card.style.color = "gray";
    card = document.getElementById("hearts");
    card.style.color = "gray";
    card = document.getElementById("spades");
    card.style.color = "gray";
}

function changeRandomizeVal(){
    if(toRandomizeCards === false) toRandomizeCards = true;
    else toRandomizeCards = false;
}

window.setInterval(function randomizeCards(){
    if(toRandomizeCards === true){
        let mainBodyUI = document.getElementById("mainUI");
        let card = document.getElementById("diamonds");

        mainBodyUI.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
        card = document.getElementById("diamonds");
        card.style.color = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
        card = document.getElementById("clubs");
        card.style.color = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
        card = document.getElementById("hearts");
        card.style.color = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
        card = document.getElementById("spades");
        card.style.color = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
    }


}, 100);

