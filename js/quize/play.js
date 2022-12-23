let buttonCards = document.getElementsByClassName('card-button');
let questionIndex = 0;

questions = shuffleObjArray(questions);




play();
function play(){
    remply(questionIndex);
    moveBarTime(getDely(questionIndex));
    
    for(let i=0 ; i<buttonCards.length ; i++){
        buttonCards[i].addEventListener('click', async () => {
            for(btn of buttonCards) btn.disabled = true;
            clearInterval(idAnimaion);
            reponsAnimation(i , questionIndex);
            
            if(questionIndex<9) {
                sleep(1000).then(() => {
                    remply(++questionIndex);
                    moveBarTime(getDely(questionIndex));
                    for(btn of buttonCards) btn.disabled = false;
                    for(let j=0 ; j<4 ; j++) cards[j].setAttribute("class", 'card carde-'+(j+1));
                    
                });
            }
            else{
                gameOver();
            }
        });
    }
}

function reponsAnimation(i , index){
    if(i == questions[index].R_C_Indis){
        animationCard(i , true);
        calculeResult();
    }
    else {
        animationCard(questions[index].R_C_Indis);
        showFalseRepons(i);
    }
}
