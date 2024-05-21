let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreCount = document.querySelector("#user-score");
const compScoreCount = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin){
        msg.innerText = "You won!";
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreCount.innerText = userScore;
    }
    else{
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreCount.innerText = compScore;
    }

}

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        //Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock") {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});