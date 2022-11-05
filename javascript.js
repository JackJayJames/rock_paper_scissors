console.log("here"); /*Just makes sure that the code is working*/

var Rock_Paper_Scissors = {                 /*Declering necesery variables*/
    player_score: 0,
    computer_score: 0,
    draw_score: 0
};

function getPlayerChoice() /*Gets input from user, and checks the validity of the input, also makes the input case insensitiv*/
{
    while(true)
    {
        let str = prompt("Enter your choice: ");
        if(str.toLowerCase() == "rock")
        {
            return str;
        }
        else if(str.toLowerCase() == "paper")
        {
            return str;
        }
        else if(str.toLowerCase() == "scissors")
        {
            return str;
        }
        else
        {
            alert("Wrong input!!")
        }
    }
}

function getRndInteger() /*Gets random number from 0 to 2*/
{
    return Math.floor(Math.random() * 3);
}

function getComputerChoice()    /*Decides what computer playes by random number*/
{
    let num = getRndInteger();
    if(num == 0)
    {
        return "rock";
    }
    else if(num == 1)
    {
        return "paper";
    }
    else if(num == 2)
    {
        return "scissors";
    }
}
function playRound_result(player, computer)
{
    if(player == "rock")
    {
        if(computer == "paper")
        {
            return "computer";
        }
        else if(computer == "scissors")
        {
            return "player";
        }
        else
        {
            return "draw";
        }
    }
    else if(player == "paper")
    {
        if(computer == "scissors")
        {
            return "computer";
        }
        else if(computer == "rock")
        {
            return "player";
        }
        else
        {
            return "draw";
        }
    }
    else if(player == "scissors")
    {
        if(computer == "rock")
        {
            return "computer";
        }
        else if(computer == "paper")
        {
            return "player";
        }
        else
        {
            return "draw";
        }
    }
}

function show_computers_play(play)
{
    let comChoice = document.querySelector("#computers-choice");
    if(comChoice.hasChildNodes() == false)
    {
        let comPlay = new Image();
        comPlay.src = `/images/${play}.png`;
        comChoice.appendChild(comPlay);
    }
    else
    {
        comChoice.firstChild.src = `/images/${play}.png`;
    }
    comChoice.style = "display: flex; justify-content: center; align-items: center; border: .8em solid orange";
    setTimeout(comChoice.style = "border: .5em solid var(--border-color)", 500);
}

function show_score()
{
    const player_score = document.querySelector("#player-score");
    const computer_score = document.querySelector("#computer-score");
    player_score.textContent = Rock_Paper_Scissors.player_score;
    computer_score.textContent = Rock_Paper_Scissors.computer_score;
}

function playRound(player)    /*Compares players and computers input, and decides winner of each round*/
{
    const computer = getComputerChoice();
    show_computers_play(computer);
    Rock_Paper_Scissors[`${playRound_result(player.target.alt, computer)}_score`]++;
    show_score();
    if((Rock_Paper_Scissors.player_score === 5)||(Rock_Paper_Scissors.computer_score === 5))
    {
        game_result();
    }
}

function game_result()  /*gets result of the game*/
{
    if(Rock_Paper_Scissors.player_score > Rock_Paper_Scissors.computer_score)
    {
        showGameResult("Player");
    }
    else
    {
        showGameResult("Computer");
    }
}

function showGameResult(result)
{
    hideGame();
    const output = document.querySelector("#game-container");

    const gm_result = document.createElement("div");
    gm_result.id = "end_result";
    gm_result.style = "display: flex; flex-direction: column; justify-content: center; align-items: center";
    //gm_result.style = "flex"

    //const gm_result_text = document.c

    const img_result = new Image();
    img_result.alt = result;
    img_result.src = `/images/${result}.jpg`;
    img_result.style = "color: white; width: 15em; height: 13em; border: .5em solid var(--border-color); border-radius: .5em";

    //img_result.id = "end_result";

    const gm_result_text = document.createElement("h1");
    gm_result_text.textContent = `${result} has won!`;
    gm_result_text.style = "color: white";

    gm_result.appendChild(img_result);
    gm_result.appendChild(gm_result_text);
    output.appendChild(gm_result);
    console.log(result);
}

function zeroGame()
{
    Rock_Paper_Scissors.player_score = 0;
    Rock_Paper_Scissors.computer_score = 0;
}

function hideGame()
{
    zeroGame();
    show_score();
    let game_container = document.querySelectorAll("#game-container > *");
    game_container.forEach(function (e) {
        e.style.display = "none";
    });
}

function show_game()
{
    if(document.querySelector("#end_result") != null)
    {
        document.querySelector("#game-container").removeChild(document.querySelector("#game-container").lastChild);
    }
    document.querySelector("#start-game-button").textContent = "Start again";
    zeroGame();
    show_score();
    let game_container = document.querySelectorAll("#game-container > *");
    game_container.forEach(function (e) {
        e.style.display = "flex";
    });
}                                                         /*game_result function gets end result of the game*/

const start_game = document.querySelector('#start-game-button');
start_game.addEventListener('click', show_game);

const play_buttons = document.querySelectorAll('.play_button');

play_buttons.forEach(pressed => pressed.addEventListener("click", e => playRound(e)));