let numSquares = 6;
let colors = generateRnadomColors(numSquares);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");


        //mode buttons event listeners
        for (let i = 0; i < modeButtons.length; i++) {
            modeButtons[i].addEventListener("click", function () {
                for (let i = 0; i < modeButtons.length; i++) {
                    modeButtons[i].classList.remove("selected");
                }
                this.classList.add("selected");
                if (this.textContent === "Easy") {
                    numSquares = 3;
                } else if (this.textContent === "Medium") {
                    numSquares = 6;
                } else {
                    numSquares = 9;
                }
                reset();
            });
        }
    


function reset(){
    //generate all new colors
    colors = generateRnadomColors(numSquares);
    //pick a new random color from the array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent= "New Colors";
    messageDisplay.textContent="";
    //change colors of squares
    for(let i=0;i<squares.length;i++){
        if (colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        } else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor = "#4682b4";
}




resetButton.addEventListener("click", ()=> {
   reset();
})

colorDisplay.textContent = pickedColor;

for( let i=0; i< squares.length; i++){
    //Add initial colors
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;
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

let changeColors = (color) => {
    //loop through all the squares
    for(let i=0;i<colors.length;i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRnadomColors(num){
    // make an array
    let arr = [];

    //repeat num times
    for(let i=0;i<num;i++){
        
        //get random color and push into arr
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    //pick red 0-255
   let r= Math.floor(Math.random() * 256);

   //pick green
   let g= Math.floor(Math.random() * 256);

   //pick blue 
   let b= Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b +")";
}
