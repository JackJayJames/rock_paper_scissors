console.log("here");

function getPlayerChoice()
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

function getRndInteger()
{
    return Math.floor(Math.random() * 3);
}

function getComputerChoice()
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

function playround(player, computer)
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

function game_result(player, computer)
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

function game()
{
    let player;
    let computer;
    let result;
    let player_score = 0;
    let computer_score = 0;
    for(let i = 0; i < 5; i++)
    {
        player = getPlayerChoice();
        computer = getComputerChoice();
        result = playround(player, computer);
        if(result == "player")
        {
            player_score++;
        }
        else if(result == "computer")
        {
            computer_score++;
        }
    }
    console.log(game_result(player_score, computer_score));
}