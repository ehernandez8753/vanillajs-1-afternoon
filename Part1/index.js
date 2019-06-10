let board = [];
let playerClicked = false;

let topRight = document.getElementById("2");
let topCenter = document.getElementById("1");
let topLeft = document.getElementById("0");
let midRight = document.getElementById("5");
let midCenter = document.getElementById("4");
let midLeft = document.getElementById("3");
let botRight = document.getElementById("8");
let botCenter = document.getElementById("7");
let botLeft = document.getElementById("6");


function play(clickedId){
    playerSpan = document.getElementById("player");
    clickedElement = document.getElementById(clickedId);


    if(playerSpan.innerText === "X"){
        playerSpan.innerText =  "O";
        clickedElement.innerText = "X";
        board[clickedId] = "X";
        clickedElement.onload = checkForWin();
        
    }else{
        playerSpan.innerText = "X";
        clickedElement.innerText = "O";
        board[clickedId] = "O";
        clickedElement.onload = checkForWin();
    }

    playerClicked = true;
    
}

function checkForWin(){
    let winningPlayer = "";
    /*--------------HORIZONTAL VICTORIES------------------------*/

    if(topLeft.innerText === topCenter.innerText && topLeft.innerText === topRight.innerText && topLeft.innerText !== "")
    {
        if(topLeft.innerText !== "" && topCenter.innerText !== "" && topRight.innerText != "")
        {
            winningPlayer = topLeft.innerText;
            window.alert(`Player ${winningPlayer} has horizontally won the game!`);
        }
    }

    else if(midLeft.innerText === midCenter.innerText && midLeft.innerText === midRight.innerText && midLeft.innerText !== "")
    {
        if(midLeft.innerText !== "" && midCenter.innerText !== "" && midRight.innerText != "")
        {
            winningPlayer = midLeft.innerText;
            window.alert(`Player ${winningPlayer} has horizontally won the game!`);
        }
    }

    else if(botLeft.innerText === botCenter.innerText && botLeft.innerText === botRight.innerText && botLeft.innerText !== "")
    {
        if(botLeft.innerText !== "" && botCenter.innerText !== "" && botRight.innerText != "")
        {
            winningPlayer = botLeft.innerText;
            window.alert(`Player ${winningPlayer} has horizontally won the game!`);
        }
    }

    /*--------------VERTICAL VICTORIES------------------------*/

    else if(topLeft.innerText === midLeft.innerText && topLeft.innerText === botLeft.innerText && topLeft.innerText !== "")
    {
        if(topLeft.innerText !== "" && midLeft.innerText !== "" && botLeft.innerText != "")
        {
            winningPlayer = topLeft.innerText;
            window.alert(`Player ${winningPlayer} has vertically won the game!`);
        }
    }

    else if(topCenter.innerText === midCenter.innerText && topCenter.innerText === botCenter.innerText && topCenter.innerText !== "")
    {
        if(topCenter.innerText !== "" && midCenter.innerText !== "" && botCenter.innerText != "")
        {
            winningPlayer = topCenter.innerText;
            window.alert(`Player ${winningPlayer} has vertically won the game!`);
        }
    }

    else if(topRight.innerText === midRight.innerText && topRight.innerText === botRight.innerText && topRight.innerText !== "")
    {
        if(topRight.innerText !== "" && midRight.innerText !== "" && botRight.innerText != "")
        {
            winningPlayer = topRight.innerText;
            window.alert(`Player ${winningPlayer} has vertically won the game!`);
        }
    }

    /*--------------DIAGONAL VICTORIES------------------------*/

    else if(topLeft.innerText === midCenter.innerText && topLeft.innerText === botRight.innerText && topLeft.innerText !== "")
    {
        if(topLeft.innerText !== "" && midCenter.innerText !== "" && botRight.innerText != "")
        {
            winningPlayer = topLeft.innerText;
            window.alert(`Player ${winningPlayer} has diagonally won the game!`);
        }
    }

    else if(topRight.innerText === midCenter.innerText && topRight.innerText === botLeft.innerText && topRight.innerText !== "")
    {
        if(topRight.innerText !== "" && midCenter.innerText !== "" && botLeft.innerText != "")
        {
            winningPlayer = topRight.innerText;
            window.alert(`Player ${winningPlayer} has diagonally won the game!`);
        }
    }

    else if((topLeft.innerText != "" && topCenter.innerText != "" && topRight.innerText != "" && midLeft.innerText != "" && midCenter.innerText != "" && 
        midRight.innerText != "" && botLeft.innerText != "" && botCenter.innerText != "" && botRight.innerText !== "") && playerClicked === true){
        window.alert(`The game was a Cats game`);
    }

}