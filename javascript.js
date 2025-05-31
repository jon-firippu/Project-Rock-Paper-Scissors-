function getComputerChoice() {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    function getRandomInt(max) {
  return Math.floor(Math.random() * max);
    }
    let randomizer = getRandomInt(3);

    if (randomizer === 0) {
        return rock;
    }
    if (randomizer === 1) {
        return paper;
    }
    if (randomizer === 2) {
        return scissors;
    }
}

console.log(getComputerChoice());