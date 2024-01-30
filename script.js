let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset');
let showWinBox = document.querySelector('.showWinner');
let newgamebut = document.querySelector('.showWinner button');
let msg = document.querySelector('.msg');
let ting = new Audio('ting.mp3');
let congo = document.querySelector('.congo');


let turnX = true; //PlayerX, PlayerY



const newGame = ()=>{
    boxes.forEach(box=>{
        box.innerHTML = "";
        box.disabled = false;
        turnX = true;
    });
    showWinBox.classList.add('hide');
    
}

 const resetGame = ()=>{
    boxes.forEach(box=>{
        box.innerHTML = "";
        box.disabled = false;
        turnX = true;
    });
 }

let winPattterns = [
      [0,1,2,],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [3,4,5],
      [6,7,8],
];

boxes.forEach(box=>{
    box.addEventListener('click', ()=>{
        if(turnX){
            box.innerHTML = 'X';
            turnX = false;
            ting.play();
        }else{
            box.innerHTML = 'O';
            turnX = true;
            ting.play();
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) =>{
    msg.innerText = `The winner is ${winner}`;
    showWinBox.classList.remove('hide');
    boxes.forEach(box=>{
        box.disabled = true;
    });

}

const checkWinner = () => {
     for (let pattern of winPattterns){
           let pos1val = boxes[pattern[0]].innerText;
           let pos2val = boxes[pattern[1]].innerText;
           let pos3val = boxes[pattern[2]].innerText;

           if(pos1val != "" && pos2val != "" && pos3val != "" ){
              if(pos1val === pos2val && pos2val ===pos3val){
                 showWinner(pos1val);
                 resetbtn.style.display = 'none'
                 
              }
           }
        
     };
};




