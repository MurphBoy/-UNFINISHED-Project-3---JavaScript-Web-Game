//init object globally
var objImage = null;
let safe = true;
function init() {
    objImage = document.getElementById("image1");
    objImage.style.position = "relative";
    objImage.style.left = "0px";
    objImage.style.top = "0px";
    
}
function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            moveLeft();
            // Update position and check for crossing
            updatePosition(objImage.style.left, objImage.style.top);
            break;
        case 38: //Up arrow key
            moveUp();
            // Update position and check for crossing
            updatePosition(objImage.style.left, objImage.style.top);
            break;
        case 39: //right arrow key
            moveRight();
            // Update position and check for crossing
            updatePosition(objImage.style.left, objImage.style.top);
            break;
        case 40: //down arrow key
            moveDown();
            // Update position and check for crossing
            updatePosition(objImage.style.left, objImage.style.top);
            break;
    }
}
function moveLeft() {
    objImage.style.left = parseInt(objImage.style.left) - 50 + "px";
}
function moveUp() {
    objImage.style.top = parseInt(objImage.style.top) - 50 + "px";
}
function moveRight() {
    objImage.style.left = parseInt(objImage.style.left) + 50 + "px";
}
function moveDown() {
    objImage.style.top = parseInt(objImage.style.top) + 50 + "px";
}
window.onload = init;

// Define the boundaries for "lap 01"
const lap01StartX = 500;
const lap01EndX = 5000;
const lap01StartY = 250;
const lap01EndY = 400;

// Initialize coin counter
let coins = 0;

// Function to check if the black dot crosses "lap 01"
function checkCrossing(x, y) {
  x = parseInt(x)
  y = parseInt(y)
  console.log(x, y)
  console.log(safe)
  if (
    x == lap01StartX &&
    y >= lap01StartY &&
    y <= lap01EndY
  ) 
   {
    safe = true;
   }

  if (
    y <= lap01StartY ||
    y >= lap01EndY
  )
  {
    safe = false;
  }
  if(
    safe &&
    x == lap01EndX
  )
  {
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
console.log("Current level:", Level);