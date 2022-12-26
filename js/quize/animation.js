

// let idCardAnimation;

function animationCard(index){ // crads content repons correct be green 
    let counter=0;
    sleepCards(cards);

    var interval = setInterval(function() {
        if(counter%2==0) {
            cards[index].setAttribute("class", "card carde-animation-correct");
        }
        else cards[index].setAttribute("class", "card carde-animation-sleep");
        counter++;
    }, 200);
    
      // stop the interval after 10 seconds
    setTimeout(function() {
        clearInterval(interval);
    }, 800);
    
}

function sleepCards(){ // all cards be gray 
    for(let card of cards) card.setAttribute("class", "card carde-animation-sleep");
    for(btn of buttonCards) btn.disabled = true;
}

function showFalseRepons(index){ // change color of cards (red)
    cards[index].setAttribute("class", "card carde-animation-false");
}
