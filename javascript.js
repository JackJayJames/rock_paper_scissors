console.log("here"); /*Just makes sure that the code is working*/

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

function playround(player, computer)    /*Compares players and computers input, and decides winner of each round*/
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

function game_result(player, computer)  /*gets result of the game*/
{
    if(player > computer)
    {
        return "Player won";
    }
    else if(player < computer)
    {
        return "Computer won";
    }
    else if(player == computer)
    {
        return "It's a draw";
    }
}

function game() /*This function gets called when html is loaded*/
{
    let player;
    let computer;
    let result;                 /*Declering necesery variables*/
    let player_score = 0;
    let computer_score = 0;
    for(let i = 0; i < 5; i++)      /*Loop is used, so the game is has 5 rounds*/
    {
        player = getPlayerChoice();     /*This function gets input from user*/
        computer = getComputerChoice();     /*This function gets random input from computer*/
        result = playround(player, computer);   /*This funkcion playes a round*/
        console.log(result); /*Outputs winner of each round*/
        if(result == "player")  /*This if and else if statements counts score, of each round played*/
        {
            player_score++;
        }
        else if(result == "computer")
        {
            computer_score++;
        }
    }
    document.getElementById('computers-choice').textContent = game_result(player_score, computer_score);
    //console.log(game_result(player_score, computer_score));     /*Current output of the code, after all 5 rounds*/
}                                                               /*game_result function gets end result of the game*/

const start_game = document.querySelector('#start-game-button');
start_game.addEventListener('click', game);

const play_buttons = document.querySelectorAll('.play_button');
play_buttons.forEach(pressed => pressed.addEventListener('click', function (e) {
    console.log(e.target.textContent);
}));