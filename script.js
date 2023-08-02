let options = ["✊","✋","✌"];
let playerChoice = querySelector("#playerChoice");
let computerChoice = Math.random(options);

let choosen = querySelector("#chosen");

addEventListener("onClick",()=>{
    if(playerChoice === "✊")
    {
        if(computerChoice === "✌")
        {
            // won
        }
        else if(computerChoice === "✋" )
        {
            // lose
        }
        else
        {
            // draw
        }
    }
    else if(playerChoice === "✋")
    {
        if(computerChoice === "✊" )
        {
            // won
        }
        else if(computerChoice === "✌")
        {
            // lose
        }
        else
        {
            // draw
        }
    }
    else
    {
        if(computerChoice === "✋")
        {
            // won
        }
        else if(computerChoice === "✊" )
        {
            // lose
        }
        else
        {
            // draw
        }
    }
});