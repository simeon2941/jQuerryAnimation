
let timerId = null;

window.addEventListener("DOMContentLoaded", function() {
document.addEventListener("click", startAnimation);
});

function startAnimation(e) {

// Get mouse coordinates
let clickX = e.clientX;
let clickY = e.clientY;

// if timerId is not null
if(timerId != null){
    // stop the timer with id timerId
    clearTimeout(timerId)
}
// call the moveImage function in every 10 milliseconds with parameters clickX and clickY 
// also save the timer to the variable timerId  
timerId = setInterval(moveImage, 10, clickX, clickY);
}

function moveImage(x, y) {
const img = document.querySelector("img");
  
// Determine location of image
let imgX = parseInt(img.style.left);
let imgY = parseInt(img.style.top);

// Determine (x,y) coordinates that center the image
// around the clicked (x, y) coords
const centerX = Math.round(x - (img.width / 2));
const centerY = Math.round(y - (img.height / 2));

// checks if (imgX,imgY) and (centerX,centerY) are same
if((imgX == centerX) &&(imgY == centerY)){
    // if same then stop the timeId
    clearInterval(timerId);

    // and set timerId to null
    timerId = null;
}

// Move 1 pixel in both directions toward the click
if (imgX < centerX) {
imgX++;
}
else if (imgX > centerX) {
imgX--;
}

if (imgY < centerY) {
imgY++;
}
else if (imgY > centerY) {
imgY--;
}

img.style.left = imgX + "px";
img.style.top = imgY + "px";
}