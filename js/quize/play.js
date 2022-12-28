
soundOff.addEventListener('click', async () => {
    soundOff.style.display = "none";
    soundOn.style.display = "block";
    audio = true;
});
soundOn.addEventListener('click', async () => {
    soundOn.style.display = "none";
    soundOff.style.display = "block";
    audio = false;
});

btnStartQuiz.addEventListener('click', async () => {
    btnStartQuiz.style.display = "none";
    timer.style.display = "block";
    intialaze();
    audioPlay('../../assets/MP3/audio.mp3');
    sleep(3800).then(() => {
        timer.style.display = "none";
        quizPage.style.display = "block";
        play();
    });
});





function intialaze(){
    questionIndex = 0;
    arrayWrongResponsIndexs.length = "";
    questions = shuffleObjArray(questions);
}    


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
        audioPlay('../../assets/MP3/aoudio-true.wav');
    }
    else {
        wrongRespons(index);
        animationCard(questions[index].R_C_Indis);
        showFalseRepons(i);
        audioPlay('../../assets/MP3/audio-false.mp3');
    }
}


function nextQuestion(){
    console.log(questionIndex);
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



