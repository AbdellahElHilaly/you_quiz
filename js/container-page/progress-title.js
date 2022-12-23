let bar_1 = document.getElementById('bar-1-id');
let bar_2 = document.getElementById('bar-2-id');
let bar_3 = document.getElementById('bar-3-id');

let circle_1 = document.getElementById('circle-1-id');
let circle_2 = document.getElementById('circle-2-id');
let circle_3 = document.getElementById('circle-3-id');


let documentaionBody = document.getElementById('documentation-body-id');
let quizBody = document.getElementById('quiz-body-id');
let resultBody = document.getElementById('resulte-body-id');

documentaionBody.style.display = "block";
quizBody.style.display = "none";
resultBody.style.display = "none";

let pageTitel = document.getElementById('progress-barr-title-id');

bar_1.style.backgroundColor = "#00214d";
function chancheContent(indis){
    if(indis == 1){
        bar_1.style.backgroundColor = "#00214d";
        bar_2.style.backgroundColor = "#00ebc7";
        bar_3.style.backgroundColor = "#00ebc7";
        documentaionBody.style.display = "block";
        quizBody.style.display = "none";
        resultBody.style.display = "none";
        pageTitel.innerText = "Informations";
    }
    else if(indis == 2){
        bar_1.style.backgroundColor = "#00214d";
        bar_2.style.backgroundColor = "#00214d";
        bar_3.style.backgroundColor = "#00ebc7";
        documentaionBody.style.display = "none";
        quizBody.style.display = "block";
        resultBody.style.display = "none";
        pageTitel.innerText = "Quiz";

    }
    else if(indis == 3){
        bar_1.style.backgroundColor = "#00214d";
        bar_2.style.backgroundColor = "#00214d";
        bar_3.style.backgroundColor = "#00214d";
        documentaionBody.style.display = "none";
        quizBody.style.display = "none";
        resultBody.style.display = "block";
        pageTitel.innerText = "Result";
    }
}


