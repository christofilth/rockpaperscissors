/* Function getComputerChoice 
    Create variable cpuChoice
    Create variable ranNum
    Generate a random number between 1-100, store in ranNum
    If the number is below 33, change cpuChoice to "Rock"
    If the number is between 33 and below 66, change cpuChoice to "Paper"
    If the number is between 66 and 100, change cpuChoice to "Scissors"
    Return cpuChoice
*/ 

let cpuChoice = "none"

function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 100);
    console.log(ranNum);
    if (ranNum <= 32) {
        cpuChoice = "Rock"
    } 
    else if (ranNum >= 33 && ranNum <= 65) {
        cpuChoice = "Paper"
    }
    else if (ranNum >= 66 && ranNum <=100) {
        cpuChoice = "Scissors"
    }

    return cpuChoice 
}

console.log(getComputerChoice());
