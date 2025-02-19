function rollDice(){
    var x = Math.floor(Math.random() * 6) + 1;
var y = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "./images/dice" + x + ".png";
var randomDiceImage2 = "./images/dice" + y + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (x > y) {
    document.querySelector("h1").textContent = "🏁 P1 WINS!!!"; 
    document.querySelector(".tie").textContent = "P2, better luck next time <3";
} else if (x < y) {
    document.querySelector("h1").textContent = "P2 WINS!!! 🏁"; 
    document.querySelector(".tie").textContent = "P1, better luck next time <3";
} else {
    document.querySelector("h1").textContent = "It's a Tie! 🎲"; 
    document.querySelector(".tie").textContent = "Play again!";
}
}
function getValue() {
    let inputs = document.querySelectorAll("input");
    document.querySelector("#p1").textContent = inputs[0].value || "Player 1"; // Default name
    document.querySelector("#p2").textContent = inputs[1].value || "Player 2"; // Default name
}
