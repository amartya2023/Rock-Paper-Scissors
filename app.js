let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    console.log("Game was draw...");
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("You Win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    } else {
        console.log("You lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    // rock, paper, scissiors
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper" ) {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})