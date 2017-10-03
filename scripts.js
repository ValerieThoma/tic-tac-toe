//Globals
var whosTurn = 1;
var player1Squares = [];
var player2Squares = [];
var player1Img = "<img src='boJack.jpg'/>";
var player2Img = "<img src='mrPeanutButter.jpg'/>";
var winningCombos = [

	["A1", "B1", "C1"],
	["A2", "B2", "C2"],
	["A3", "B3", "C3"],
	["A1", "B1", "C1"],
	["A1", "A2", "A3"],
	["B1", "B2", "B3"],
	["C1", "C2", "C3"],
	["A1", "B2", "C3"],
	["A3", "B2", "C1"]
]

var gameOver = false;

var squares = document.getElementsByClassName("square");

var nextGame = document.getElementById("reset");

var scores = [
	0,
	0
]


for (let i = 0; i < squares.length; i++){
	// console.log(square[i]);
	squares[i].addEventListener("click", function(event) {
		// console.log(this);
		if(!gameOver){ 
		markSquare(this);
		}
	})
}


function markSquare(squareClicked){
	if(squareClicked.innerHTML !== '-'){
		document.getElementById('message').innerHTML = "Sorry, that square is taken."
	}else if(whosTurn === 1){
		squareClicked.innerHTML = player1Img;
		whosTurn = 2;
		player1Squares.push(squareClicked.id)
		console.log(player1Squares)
		document.getElementById('message').innerHTML = ""
		checkWin(player1Squares,1);
		
		// if(numPlayers == 1){
		// 	comperterMove();
		// }
	}else{
		squareClicked.innerHTML = player2Img;
		whosTurn = 1;
		player2Squares.push(squareClicked.id)
		document.getElementById('message').innerHTML = "Is this a cross-over episode?"
		checkWin(player2Squares,2);
	}
}
// function computerMove() {
// 	var squareFound =false;
// 	while(!squareFound){
// 		rand = Math.
// 		var isTaken = squares[rand].innerHTML;
// 		if(isTaken === "-"){
// 			squareFound = true;
// 		}
// 	}
// 	markSquare(rand)
// }

function checkWin(currentPlayerSquares,whoJustMarked) {
	for (let i = 0; i < winningCombos.length; i++){
		var squareCount = 0;
		for(let j = 0; j< winningCombos[i].length; j++){
			var winningSquare = winningCombos[i][j]
			if(currentPlayerSquares.indexOf(winningSquare) !== -1){
				squareCount++;
			}
		}
		if (squareCount === 3){
			endGame(winningCombos[i], whoJustMarked);
			break;
		}
	}
}

function endGame(winningCombo, whoJustMarked){
	if(whoJustMarked === 1){
		scores[0]++;	
	}else{
		scores[1]++;
	}
	document.getElementById('message').innerHTML = `Congrats to player ${whoJustMarked}!`
	gameOver = true;
	for(let i = 0; i < winningCombo.length; i++){
		document.getElementById(winningCombo[i]).className += " winning-square";
	}
	document.getElementsByClassName("p1-score")[0].innerHTML = scores[0];
	document.getElementsByClassName("p2-score")[0].innerHTML = scores[1];
}

function clearBoard(allSquares){
	for(let i = 0; i < squares.length; i++){
		squares[i].innerHTML = "-";
		squares[i].classList.remove("winning-square");
		player1Squares = [];
		player2Squares = [];
	}
	gameOver = false;
}


nextGame.addEventListener("click", function(event){
	clearBoard(squares);
	console.log("IS THIS WORKING?")
})




console.dir(document);

