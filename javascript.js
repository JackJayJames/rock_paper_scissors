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
    console.log(num);
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
    console.log(player + " - " + computer);
}

const player = getPlayerChoice();
const computer = getComputerChoice();
console.log(playround(player, computer));