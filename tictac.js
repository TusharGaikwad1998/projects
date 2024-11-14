
let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector(".resetbtn");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let matchdraw = document.querySelector("#draw");


let turnO = true ;

const winpattern = [
    [0 ,1, 2 ],
    [0 ,4 ,8],
    [0 ,3 ,6],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [2 ,4 ,6],
    [3 ,4 ,5],
    [6 ,7 ,8]
];
const resetgame = () =>{
    let turnO = true ;
    enabledboxes ();
    msgcontainer.classList.add("hide");
}
let count = 0;
     let matchdraw1 = () =>{
    if(checkwinner()==true){
        console.log("match is a draw");
    draw.innerText = `The match is draw `;
   
    }else{
        console.log("jdiufhe");
    }
}

boxes.forEach((box) => {
box.addEventListener("click", () => {
    count++;
    console.log(count);
    if(turnO){
        box.innerText=("O");
        turnO=false;
    }else{
        box.innerText=("X");
        turnO = true;
        }
    box.disabled = true;
    checkwinner();
    matchdraw1();
    
    
});
});

let disabledboxes = () =>{
    for(box of boxes ){
        box.disabled = true;
    }
    }
    let enabledboxes = () =>{
        for(box of boxes ){
            box.disabled = false;
            box.innerText = "";
        }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
     disabledboxes();
};

const checkwinner = () =>{
for(let pattern of winpattern){
       let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
       let posval3 = boxes[pattern[2]].innerText;


   if(posval1 !=""&& posval2 !="" && posval3 !=""){
    if(posval1 === posval2 && posval2 === posval3){
        console.log("winner",posval1);
        disabledboxes();
        showWinner(posval1);
    }
   }
}
};
    
   newgamebtn.addEventListener("click",resetgame);
   resetbtn.addEventListener("click",resetgame);

