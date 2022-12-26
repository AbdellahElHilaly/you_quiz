let buttonCards = document.getElementsByClassName('card-button');
let btnStartQuiz = document.getElementById('btn-start-quiz');
let quizPage = document.getElementById('quiz-page');
let questionIndex = 0;
quizPage.style.display = "none";
btnStartQuiz.addEventListener('click', async () => {
    btnStartQuiz.style.display = "none";
    quizPage.style.display = "block";
    play();
});

questions = shuffleObjArray(questions);



function play(){
    nextQuestion();
    for(let i=0 ; i<buttonCards.length ; i++){
        buttonCards[i].addEventListener('click', async () => {
            clearInterval(idAnimaion);
            reponsAnimation(i , questionIndex);

            sleep(1000).then(() => {
                nextQuestion();
            });
            
        });
    }
}

function reponsAnimation(i , index){
    index--;
        if(i == questions[index].R_C_Indis){
            animationCard(i , true);
            calculeResult();
        }
        else {
            wrongRespons(index);
            animationCard(questions[index].R_C_Indis);
            showFalseRepons(i);
        }
}


function nextQuestion(){
    if(questionIndex < questions.length ) {
        remply(questionIndex);
        moveBarTime(getDely(questionIndex) , questionIndex);
        activeCards();
        questionIndex++;
    }
    else{
        gameOver();
    }
}
function activeCards(){
    for(btn of buttonCards) btn.disabled = false;
    for(let j=0 ; j<4 ; j++) cards[j].setAttribute("class", 'card carde-'+(j+1));
}



