let btn = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#rstBtn");
let msg = document.querySelector("#msg");

const winPatttern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnO = true;

const resetGame = () => {
  turnO = true;
  for (let box of btn) {
    box.disabled = false;
    box.innerText = " ";
    msg.innerText = " ";
  }
};

btn.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";

      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    Winner();
  });
});

rstBtn.addEventListener("click", resetGame);

const Winner = () => {
  for (let pattern of winPatttern) {
    
    

    let pos1Val = btn[pattern[0]].innerText ;
    let pos2Val = btn[pattern[1]].innerText ;
    let pos3Val = btn[pattern[2]].innerText ;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        msg.innerText = "Winner" +" " + pos1Val ;
       
      }
    }


  }
};
