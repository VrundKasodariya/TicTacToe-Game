let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newButton = document.querySelector("#new_game");

// console.log(boxes);
let turnX = true;// Turn of X

const WinPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,7],
    [6,4,2]
]
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
    }
}
const resetGame = ()=>{
    turnX = true;
    enableBoxes();
    for(let box of boxes){
        box.innerText = "";
    }
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText = "X"
            turnX = false
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner =(Winner)=>{
    msg.innerText = "Winner is " + Winner;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = ()=>{
    for(pattern of WinPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner is " + pos1);
                showWinner(pos1);
            }
        }
    }
}

newButton.addEventListener("click",resetGame); 
reset.addEventListener("click",resetGame); 