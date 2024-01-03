let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let turn0=true;
let count =0; //for checking draw condition

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
     
];

//reserGame will reset the game,hide msg and show reset button
const resetGame = () =>{
    turn0=true;
    count=0;
    enableBoxes();
   

};
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msgContainer.classList.add("hide");
    resetBtn.classList.remove("hide");
};

const showWinner=(winner) => {
    msg.innerText=`Congratulations! winner is ${winner}`;
    disableBoxes();
};
const gameDraw=() => {
    msg.innerText="Game Is Draw!!!";
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            box.style.color="#ec7475";
            turn0=false;
        }else{
            box.innerText="X";
            box.style.color="#7bb274";
            turn0=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
}); 





newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
