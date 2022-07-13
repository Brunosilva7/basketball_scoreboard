//HOME
let homeResult = document.getElementById("pointHome")
let homePoint = 0
function addOneHome(){
  homePoint += 1
  homeResult.innerText = homePoint
}

function addTwoHome(){
  homePoint += 2
  homeResult.innerText = homePoint

}
function addThreeHome(){
  homePoint += 3
  homeResult.innerText = homePoint
}
//GUESS
let guessResult = document.querySelector(".pointGuess")
let guessPoint = 0

function addOneGuess(){
  guessPoint += 1
  guessResult.innerText = guessPoint
}
function addTwoGuess(){
  guessPoint += 2
  guessResult.innerText = guessPoint
}
function addThreeGuess(){
  guessPoint += 3
  guessResult.innerText = guessPoint
}

// Clean the points

let resetHome = document.getElementById("pointHome")
let resetGuess = document.querySelector(".pointGuess")
function reset(){
  resetHome.innerText = 0
  resetGuess.innerText = 0
}