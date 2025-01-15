let userScore = 0;
let compScore = 0;

const chocies = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "game was draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userchoice , CompChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        // console.log("You win!");
        msg.innerText = `You Win! ${userchoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;

        // console.log("You lose!");
        msg.innerText = `You lose! ${CompChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    const option = ["rock", "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const playGame = (userchoice) => {
    // console.log("User choice = ", userchoice);
    const CompChoice = genCompChoice();
    // console.log("computer choice = ",CompChoice);

    if(userchoice === CompChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            //scissor, paper
            userWin = CompChoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            //rock, scissor
            userWin = CompChoice === "scissor" ? false : true;
        }else{
            //rock, paper
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, CompChoice);
    }
}

chocies.forEach((chocie) => {
    chocie.addEventListener("click", () => {
        const userchoice = chocie.getAttribute("id");
        playGame(userchoice);
    });
});

