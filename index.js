var numSquares = 6;
var colors = generateRnadomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click",()=>{
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors = generateRnadomColors(numSquares);
    pickedColor= pickColor();
    colorDisplay.textContent=pickedColor;
    for(let i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor= colors[i];
        } else{
            squares[i].style.display= "none";
        }
    }
})

hardBtn.addEventListener("click",()=>{
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    colors = generateRnadomColors(numSquares);
    pickedColor= pickColor();
    colorDisplay.textContent=pickedColor;
    for(let i=0;i<squares.length;i++){
            squares[i].style.backgroundColor= colors[i];
            squares[i].style.display= "black";
        }
    
})


resetButton.addEventListener("click", ()=> {
    //generate all new colors
    colors = generateRnadomColors(numSquares);
    //pick a new random color from the array
    pickedColor = pickColor();

    messageDisplay.textContent="";
    resetButton.textContent= "New Colors";
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(let i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor = "#4682b4";
})

colorDisplay.textContent = pickedColor;

for( let i=0; i< squares.length; i++){
    //Add initial colors
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to the picked color
        if(clickedColor===pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent="Play again?";
        } else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
     });
}

var changeColors = (color) => {
    //loop through all the squares
    for(let i=0;i<colors.length;i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRnadomColors(num){
    // make an array
    var arr = [];

    //repeat num times
    for(let i=0;i<num;i++){
        
        //get random color and push into arr
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    //pick red 0-255
   var r= Math.floor(Math.random() * 256);

   //pick green
   var g= Math.floor(Math.random() * 256);

   //pick blue 
   var b= Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b +")";
}