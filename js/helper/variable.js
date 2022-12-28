let audio = true;
let buttonCards = document.getElementsByClassName('card-button');
let btnStartQuiz = document.getElementById('btn-start-quiz');
let quizPage = document.getElementById('quiz-page');
let timer = document.getElementById('timer-id');
let soundOn = document.getElementById('sound-on-id');
let soundOff = document.getElementById('sound-off-id');


soundOff.style.display = "none";
timer.style.display = "none";
let questionIndex = 0;
quizPage.style.display = "none";