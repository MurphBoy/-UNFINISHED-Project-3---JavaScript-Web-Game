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

// Define the boundaries for "lap 02"
const lap02StartX = 500;
const lap02EndX = 5000;
const lap02StartY = 425;
const lap02EndY = 575;

// Define the boundaries for "lap 03"
const lap03StartX = 500;
const lap03EndX = 5000;
const lap03StartY = 600;
const lap03EndY = 750;

// Define the boundaries for "lap 04"
const lap04StartX = 500;
const lap04EndX = 5000;
const lap04StartY = 775;
const lap04EndY = 925;

// Define the boundaries for "lap 05"
const lap05StartX = 500;
const lap05EndX = 5000;
const lap05StartY = 950;
const lap05EndY = 1100;

// Define the boundaries for "lap 06"
const lap06StartX = 500;
const lap06EndX = 5000;
const lap06StartY = 1125;
const lap06EndY = 1275;

// Define the boundaries for "lap 07"
const lap07StartX = 500;
const lap07EndX = 5000;
const lap07StartY = 1300;
const lap07EndY = 1450;

// Define the boundaries for "lap 08"
const lap08StartX = 500;
const lap08EndX = 5000;
const lap08StartY = 1475;
const lap08EndY = 1625;

// Define the boundaries for "lap 09"
const lap09StartX = 500;
const lap09EndX = 5000;
const lap09StartY = 1650;
const lap09EndY = 1800;

// Define the boundaries for "lap 10"
const lap10StartX = 500;
const lap10EndX = 5000;
const lap10StartY = 1825;
const lap10EndY = 1975;

// Define the boundaries for "lap 11"
const lap11StartX = 500;
const lap11EndX = 5000;
const lap11StartY = 2000;
const lap11EndY = 2150;

// Define the boundaries for "lap 12"
const lap12StartX = 500;
const lap12EndX = 5000;
const lap12StartY = 2175;
const lap12EndY = 2325;

// Define the boundaries for "lap 13"
const lap13StartX = 500;
const lap13EndX = 5000;
const lap13StartY = 2525;
const lap13EndY = 2675;

// Define the boundaries for "lap 14"
const lap14StartX = 500;
const lap14EndX = 5000;
const lap14StartY = 2700;
const lap14EndY = 2850;

// Define the boundaries for "lap 15"
const lap15StartX = 500;
const lap15EndX = 5000;
const lap15StartY = 2875;
const lap15EndY = 3025;

// Define the boundaries for "lap 16"
const lap16StartX = 500;
const lap16EndX = 5000;
const lap16StartY = 3050;
const lap16EndY = 3200;

// Define the boundaries for "lap 17"
const lap17StartX = 500;
const lap17EndX = 5000;
const lap17StartY = 3225;
const lap17EndY = 3375;

// Define the boundaries for "lap 18"
const lap18StartX = 500;
const lap18EndX = 5000;
const lap18StartY = 3400;
const lap18EndY = 3550;

// Define the boundaries for "lap 19"
const lap19StartX = 500;
const lap19EndX = 5000;
const lap19StartY = 3575;
const lap19EndY = 3725;

// Define the boundaries for "lap 20"
const lap20StartX = 500;
const lap20EndX = 5000;
const lap20StartY = 3750;
const lap20EndY = 3900;

// Define the boundaries for "lap 21"
const lap21StartX = 500;
const lap21EndX = 5000;
const lap21StartY = 3925;
const lap21EndY = 4075;

// Define the boundaries for "lap 22"
const lap22StartX = 500;
const lap22EndX = 5000;
const lap22StartY = 4100;
const lap22EndY = 4250;

// Define the boundaries for "lap 23"
const lap23StartX = 500;
const lap23EndX = 5000;
const lap23StartY = 4275;
const lap23EndY = 4425;

// Define the boundaries for "lap 24"
const lap24StartX = 500;
const lap24EndX = 5000;
const lap24StartY = 4450;
const lap24EndY = 4600;

// Define the boundaries for "lap 25"
const lap25StartX = 500;
const lap25EndX = 5000;
const lap25StartY = 4800;
const lap25EndY = 4950;

// Define the boundaries for "lap 26"
const lap26StartX = 500;
const lap26EndX = 5000;
const lap26StartY = 4975;
const lap26EndY = 5125;

// Define the boundaries for "lap 27"
const lap27StartX = 500;
const lap27EndX = 5000;
const lap27StartY = 5150;
const lap27EndY = 5300;

// Define the boundaries for "lap 28"
const lap28StartX = 500;
const lap28EndX = 5000;
const lap28StartY = 5325;
const lap28EndY = 5475;

// Define the boundaries for "lap 29"
const lap29StartX = 500;
const lap29EndX = 5000;
const lap29StartY = 5500;
const lap29EndY = 5650;

// Define the boundaries for "lap 30"
const lap30StartX = 500;
const lap30EndX = 5000;
const lap30StartY = 5675;
const lap30EndY = 5825;

// Define the boundaries for "lap 31"
const lap31StartX = 500;
const lap31EndX = 5000;
const lap31StartY = 5850;
const lap31EndY = 6000;

// Define the boundaries for "lap 32"
const lap32StartX = 500;
const lap32EndX = 5000;
const lap32StartY = 6025;
const lap32EndY = 6175;

// Define the boundaries for "lap 33"
const lap33StartX = 500;
const lap33EndX = 5000;
const lap33StartY = 6200;
const lap33EndY = 6350;

// Define the boundaries for "lap 34"
const lap34StartX = 500;
const lap34EndX = 5000;
const lap34StartY = 6375;
const lap34EndY = 6525;

// Define the boundaries for "lap 35"
const lap35StartX = 500;
const lap35EndX = 5000;
const lap35StartY = 6550;
const lap35EndY = 6700;

// Define the boundaries for "lap 36"
const lap36StartX = 500;
const lap36EndX = 5000;
const lap36StartY = 6725;
const lap36EndY = 6875;

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