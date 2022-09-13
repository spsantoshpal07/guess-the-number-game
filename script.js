'use strict';
let secretNumber = Math.floor(Math.random()*20 + 1);
let score = 20;

let highScore = document.querySelector(".highscore");

document.querySelector(".check").addEventListener('click', function() {
    let guess = Number(document.querySelector(".guess").value);
    if(secretNumber === guess) {
        document.getElementsByTagName('body')[0].style.backgroundColor = "#60b347";
        document.querySelector(".message").textContent = "🏆🏆 Your guessed it right!!";
        if(highScore.textContent < score)
            highScore.textContent = score;
        document.querySelector(".number").textContent = secretNumber;
    } else if(secretNumber > guess) {
        document.querySelector(".message").textContent = "📉Too low!!";
        document.querySelector(".score").textContent = --score;
    } else if(secretNumber < guess) {
        document.querySelector(".message").textContent = "📈Too high!!";
        document.querySelector(".score").textContent = --score;
    }
});

document.querySelector(".again").addEventListener('click', function() {
    document.getElementsByTagName('body')[0].style.backgroundColor = "#222";
    document.querySelector(".message").textContent = "Start guessing...";
    // highScore.textContent = score;
    secretNumber = Math.floor(Math.random()*20 + 1);
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = '';
});