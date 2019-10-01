
var numberOfSqr = 6; //Hard mode default start
var colors = []; //For all RGB Colors
var pickedColor; //randomly picked
var squares = document.querySelectorAll(".square");// Store all the divs with id "square" on a variable
var colorDisplay = document.getElementById("display");//Selecting the span content
var message = document.getElementById("message"); //Try Again or You got it
var h1 = document.querySelector("h1"); //Title
var reset = document.querySelector("#reset"); //start a new game
var modeButton = document.querySelectorAll(".mode"); //Easy and hard

//Constructor
init();

function init(){ 
	// Select Easy 3 squares / Hard 6 squares
	setUpModeButtons();
	//Assign the colors and add event listener
	setUpSquares();
	//Start a new game
	resetFunct();
	}


function setUpModeButtons(){
	for (var i = 0; i < modeButton.length; i++){
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
	    modeButton[1].classList.remove("selected");
	    //Add "selected" style 
		this.classList.add("selected");
		//If statement
		this.textContent === "EASY" ? numberOfSqr = 3: numberOfSqr = 6;
		resetFunct();
		});
	}
}

function setUpSquares(){
		// Loop through each square
	for(var i = 0; i < squares.length; i++){
		// Add event listener to each square
		 squares[i].addEventListener("click", function(){
		 	var clickedColor = this.style.backgroundColor;
		 	if(clickedColor === pickedColor){
		 		message.textContent = "You got it!";
		 		changeColor(clickedColor);
		 		h1.style.backgroundColor = pickedColor;
		 		reset.textContent = "Play Again!"
		 		}else{
		 			this.style.backgroundColor = "#232323";
		 			message.textContent = "Try Again!"
		 		}
		});
}

}

function resetFunct(){
	//pick new 3 coloured squares
	colors = generateRandomColors(numberOfSqr);

	//pick new rgb color
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	reset.textContent = "New colors";
	message.textContent = " ";

	//hide bottom 3 squares
	for(var i = 0; i < squares.length; i++){
		//If that square has a color picked
		if (colors[i]){
			squares[i]. style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		} else {
			//Don´t display the squares
			squares[i].style.display = "none";
		
		}
	}
		h1.style.backgroundColor = "green";

}



//To start a new game
reset.addEventListener("click", function(){

	resetFunct();
});

//Setting the span content to the picked Color
colorDisplay.textContent = pickedColor;


function generateRandomColors(num){
	//make array
	var arr = []

	//add colors
	for (var i = 0; i < num; i++){
		arr.push(randomColorRGB());

	}

	return arr;

}

function randomColorRGB(){
	//Pick a red 
	var r = Math.floor(Math.random()*256);

	//Pick a green
	var g = Math.floor(Math.random()*256); 

	//Pick a blue
	var b = Math.floor(Math.random()*256);

return "rgb(" + r + ", " + g + ", " + b + ")";
}



//When user choose the right color
function changeColor(color){	
	//go through all squares
	for(var i = 0; i < squares.length; i++){
		//set each square to the randomly chosen color
		squares[i].style.backgroundColor = color; 
	}
}

function randomColor(){
	//Math.random pick a number between 0 and the array length 
	//Math.floor rounds it to an int
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];

}
	