let inputSetId = document.getElementById("idInput");
let inputSetColor = document.getElementById("colorInput");

console.log(inputSetColor, inputSetId);

function setCard(){
    let card = document.getElementById(idInput.value);
    card.style.color = inputSetColor.value;
}

function resetCards(){
    let card = document.getElementById("diamonds");
    card.style.color = "gray";
    card = document.getElementById("clubs");
    card.style.color = "gray";
    card = document.getElementById("hearts");
    card.style.color = "gray";
    card = document.getElementById("spades");
    card.style.color = "gray";
}