let area = document.querySelectorAll(".btnarea");
let resetBtn = document.querySelector("#reset");
let winMsg = document.querySelector(".winDiv")

let turn0 = true; 

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame =() =>{
    turn0=true;
    enableBoxes();
    winMsg.classList.add("d-none");
}

const disableBoxes =()=>{
    for(let parea of area){
        parea.classList.add("disabled");
    }
}
const enableBoxes =()=>{
    for(let parea of area){
        parea.classList.remove("disabled");
        parea.innerHTML="";
    }
}

const showWinner=(winner)=>{
    winMsg.innerHTML=`Winner is ${winner}`;
    winMsg.classList.remove("d-none");
    disableBoxes();
}

area.forEach((parea) => {
    parea.addEventListener("click",()=>{
        
       if(turn0){
        parea.innerHTML = "0";
        turn0 = false;
       }
       else{
        parea.innerHTML = "X";
        turn0 = true;
       };
       parea.classList.add("disabled");
       checkWinner();
    });
    
});

const checkWinner=()=>{
    for(pattern of winPattern){
       let pos1 = area[pattern[0]].innerHTML;
       let pos2 = area[pattern[1]].innerHTML;
       let pos3 = area[pattern[2]].innerHTML;

       if(pos1 != "" || pos2 != "" || pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1);
            showWinner(pos1);
        }
       }
       

    }
}

resetBtn.addEventListener("click",resetGame);