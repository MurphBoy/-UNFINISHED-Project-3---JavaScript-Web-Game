// Define the boundaries for "lap 01"
const lap01StartX = 0;
const lap01EndX = 100;
const lap01StartY = 50;
const lap01EndY = 150;

// Initialize coin counter
let coins = 0;

// Function to check if the black dot crosses "lap 01"
function checkCrossing(x, y) {
  if (
    x >= lap01StartX &&
    x <= lap01EndX &&
    y >= lap01StartY &&
    y <= lap01EndY
  ) {
    return true;
  } else {
    return false;
  }
}

// Function to update the position and check for crossing
function updatePosition(newX, newY) {
  if (checkCrossing(newX, newY)) {
    coins++;
    console.log("Congratulations! You crossed lap 01 and earned a coin.");
  }
}

// Example usage
let blackDotX = 75;
let blackDotY = 100;

// Update position and check for crossing
updatePosition(blackDotX, blackDotY);

// Print the number of coins
console.log("Total coins:", coins);

// Set the initial level value
let Level = 1;

// Update the level value
Level = 2;

// Output the level value
console.log("Current level:", level);