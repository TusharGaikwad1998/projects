// let userscore = 0;
// let compscore = 0;


// const choices = document.querySelectorAll(".choic");
// const amsg = document.querySelector("#msg");


// const genCompChoic = () =>{
//     const options = ["rock","paper","scisor"];
//     const randidx = Math.floor(Math.random() * 3);
//     return options[randidx];
// }
// const drawGame = () =>{
//     console.log("game was Draw!!");
//     amsg.innerText=("The Game is Draw!!");
//     amsg.style.backgroundColor="#081b31";
// }
// const showWinner = (userWin , userchoic , compChoic ) =>{
//     if(userWin){
//         console.log("You win " );
//         amsg.style.backgroundColor = "green";
//         amsg.innerText=`You win. ${userchoic} beats ${compChoic} `;
// }else{
//     console.log(`computer win`);
//     amsg.innerText=`You lose. ${compChoic} beats ${userchoic}`;
//     amsg.style.backgroundColor="red";
// }
// };
    
// const playGame = (userchoic) => {
//     console.log("user choic = ", userchoic);

//     // generate comp choic

//     const compChoic = genCompChoic();
//     console.log("comp choice is",compChoic );

//     if(userchoic == compChoic){
//      drawGame();
//      }else{
//         let userWin = true;
//         if( userchoic === "rock"){
//             userWin = compChoic ==="paper"? false : true;
//         }else if( userchoic ==="paper"){
//            // rock , scissor
//            userWin = compChoic ==="scisor" ? false : true; 
//         }else{
//             // rock paper
//          userWin = compChoic === "rock" ? false : true;

//         }
//         showWinner(userWin);
//      }
// };



// choices.forEach((choic) => {
// choic.addEventListener("click" , () =>{
//     const userchoic = choic.getAttribute("id");
//     playGame(userchoic);
    

//     });
//  });

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});