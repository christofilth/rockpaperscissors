# Project: Rock Paper Scissors
for The Odin Project's foundations course

## Introduction
For this project, I am recreating the game Rock, Paper, Scissors in JavaScript, to be played in a browser console.

The full assignment can be found [here](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors).

### Setup the project structure
Created a [Git repository](https://github.com/christofilth/rockpaperscissors).
Created blank html document with script tag, linking to external .js file. Tested link between .html and .js with console.log().

### Write the logic to get the computer choice
Wrote pseudocode for getComputerChoice function. Wrote code for getComputerChoice function. The function creates a random number from 1-100, and then returns either the words Rock, Paper or Scissors depending on the range of the number, 1-33 = Rock etc. Code tested in browser console. 

### Write the logic to get the human choice
Wrote pseudocode for getHumanChoice. Wrote code for getHumanChoice. The function creates a prompt to ask the player for Rock, Paper or Scissors, sets it as lowercase, and stores it in the variable humanChoice. If the player enters anything that isn't Rock, Paper or Scissors, the player receives an error and the loop restarts. 

### Write the logic to play a single round
Created variables to store the player score and computer score. Wrote pseudocode for playRound function. Wrote code for playRound. The function checks humanChoice and cpuChoice against each other, and depending on the rule e.g. Paper beats Rock, gives a point to the correct player. 

### Write the logic to play the entire game
Wrote pseudocode for playGame function. Wrote code for playGame. playGame includes the function playRound. The gameRound variable starts at 0, every time playRound is called gameRound is incremented by 1. When gameRound = 5, the game ends, giving the player a score and letting them know if they Win/Lose/Draw. 

### Update game to include UI
Altered code to remove rounds. Cleaned up comments in script.js. Added buttons to represent Rock, Paper and Scissors choices for the player. Added visual score display. Added endGame function to run if gameRound = 5. 
