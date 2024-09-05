let btn = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [1,7,4],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];  

const resetGame = () => {
    turn0 = true;
    msgContainer.classList.add("hide");
    enableBtn();
}

btn.forEach((b) => {
    b.addEventListener("click",()=>{
        
       if(turn0){
        b.innerText = "0";
        turn0 = false;
       } 
       else{
        b.innerText = "X";
        turn0 = true;
       }
       b.disabled = true;
       count++;

       let isWinner = checkWinner();
       if(count == 9 && !isWinner){
        drawGame();
       }
    });
});
const enableBtn = () => {
    btn.forEach((b) => { 
      b.disabled = false;
      b.innerText = "";
    })
};

const disableBtn = () => {
    btn.forEach((b) => { 
      b.disabled = true;
    })
};
const showWinner= (winner) => {
  msg.innerText = `Congratulations, Winner is '${winner}'`;
  msgContainer.classList.remove("hide");
  disableBtn();
}
const checkWinner = () => {
    for(pattern of winPatterns){
            let pos1 = btn[pattern[0]].innerText;
            let pos2 = btn[pattern[1]].innerText;
            let pos3 =  btn[pattern[2]].innerText;

            if(pos1 != "" && pos1 == pos2 && pos2 == pos3){
                                    
                    showWinner(pos1);
                    return true;               
            }
    }
    return false;
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

const drawGame = () => {
    msg.innerText = "Game was a Draw";
    msgContainer.classList.remove("hide");
    
  }