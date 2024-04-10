
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let resetbtn= document.querySelector("#reset");

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");

const winpara = document.querySelector("#win");

let userscore=0;
let compScore=0;

const getcompChoice = ()=>{
    let options = ["rock" , "paper" ,"scissors"];
    const rndmIdx = Math.trunc(Math.random() *3);
    return options[rndmIdx];
}

const disblechoice= ()=>{

    for(const choice of choices){
      // choice.getAttribute("id").disabled = true;
      // console.log(" functio");
      choice.disabled= true;
       
    }
     
    console.log(" function excecuted");
}
const showWinner = (userwin, userchoice, compChoice) => {
    if (userwin) {
      userscore++;
      userScorePara.innerText = userscore;
      msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
      // console.log(userscore);
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userchoice}`;
      msg.style.backgroundColor = "red";
      // console.log(compScore +" comp score");
    }

  };

const drawgame=()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
} 


choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
         console.log("choice was clicked");
         let userchoice= choice.getAttribute("id");
      
         playgame(userchoice);

    })
});



const playgame =(userchoice) =>{

    const compChoice = getcompChoice();

    if (userchoice===compChoice)
    {
        drawgame();
    }
    else {
        let userwin = true;

        if(userchoice==="rock"){
            userwin= compChoice==="paper"? false : true;
        }
        else if (userchoice === "paper") {
            //rock, scissors
            userwin = compChoice === "scissors" ? false : true;
          } else {
            //rock, paper
            userwin = compChoice === "rock" ? false : true;
          }

          showWinner(userwin, userchoice, compChoice);

          winnermsg(compScore, userscore);
       
           

    }


   const resetgame = ()=>{
    userScorePara.innerText = 0; 
    compScorePara.innerText = 0;
    userscore=0;
    compScore=0;
     msg.innerText = "Play Game";
        msg.style.backgroundColor= "#1d3557";
    }
    
    resetbtn.addEventListener("click" , resetgame);
};


 


const winnermsg= (userscore,compScore) =>{
  
 if(userscore==5 || compScore==5){
  if(userscore==5){
    winpara.innerText = "You lost."
    disblechoice();

  }
  else if (compScore==5)
  {
    winpara.innerText = "You Won."
    disblechoice();
  }
 }
}

