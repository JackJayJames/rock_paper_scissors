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
    console.log(Rock_Paper_Scissors);
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
    const img_result = new Image();
    img_result.alt = result;
    img_result.style = "color: white";
    img_result.id = "end_result";
    output.appendChild(img_result);
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
    if(document.querySelector("#end_result") != null)
    {
        document.querySelector("#end_result").remove();
    }
    let game_container = document.querySelectorAll("#game-container > *");
    game_container.forEach(function (e) {
        e.style.display = "none";
    });
}

function show_game()
{
    let game_container = document.querySelectorAll("#game-container > *");
    game_container.forEach(function (e) {
        e.style.display = "flex";
    });
}

/*function game() /*This function gets called when html is loaded*/
//{
    //for(let i = 0; i < 5; i++)      /*Loop is used, so the game is has 5 rounds*/
    /*{
        Rock_Paper_Scissors.player = getPlayerChoice();     /*This function gets input from user*/
        /*Rock_Paper_Scissors.computer = getComputerChoice();     /*This function gets random input from computer*/
        /*result = playround(Rock_Paper_Scissors.player, Rock_Paper_Scissors.computer);   /*This funkcion playes a round*/
        /*console.log(result); /*Outputs winner of each round*/
        /*if(Rock_Paper_Scissors.result == "player")  /*This if and else if statements counts score, of each round played*/
        /*{
            Rock_Paper_Scissors.player_score++;
        }
        else if(Rock_Paper_Scissors.result == "computer")
        {
            Rock_Paper_Scissors.computer_score++;
        }
    }
    //showResult(game_result(player_score, computer_score)) //not working yet
    document.getElementById('computers-choice').textContent = game_result(Rock_Paper_Scissors.player_score, Rock_Paper_Scissors.computer_score);
    console.log(game_result(Rock_Paper_Scissors.player_score, Rock_Paper_Scissors.computer_score));     /*Current output of the code, after all 5 rounds*/
//}                                                          /*game_result function gets end result of the game*/

const start_game = document.querySelector('#start-game-button');
start_game.addEventListener('click', show_game);

const play_buttons = document.querySelectorAll('.play_button');
/*play_buttons.forEach(pressed => pressed.addEventListener('click', function (e) {
    console.log(e.target.alt);
}));*/
play_buttons.forEach(pressed => pressed.addEventListener("click", e => playRound(e)));