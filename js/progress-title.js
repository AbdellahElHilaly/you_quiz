let bar_1 = document.getElementById('bar-1-id');
let bar_2 = document.getElementById('bar-2-id');
let bar_3 = document.getElementById('bar-3-id');

let circle_1 = document.getElementById('circle-1-id');
let circle_2 = document.getElementById('circle-2-id');
let circle_3 = document.getElementById('circle-3-id');


let sectionDocumentaion = document.getElementById('quiz-section-id');
let sectionQuiz = document.getElementById('quiz-section-id');
let sectionResult = document.getElementById('quiz-section-id');

let setionTitle = document.getElementById('progress-barr-title-id');

bar_1.style.backgroundColor = "black";
function chancheContent(indis){
    if(indis == 1){
        bar_1.style.backgroundColor = "black";
        bar_2.style.backgroundColor = "#ff5470";
        bar_3.style.backgroundColor = "#ff5470";
        sectionQuiz.style.display = "none";
        setionTitle.innerText = "Documentation";
    }
    else if(indis == 2){
        bar_1.style.backgroundColor = "black";
        bar_2.style.backgroundColor = "black";
        bar_3.style.backgroundColor = "#ff5470";
        sectionQuiz.style.display = "block";
        setionTitle.innerText = "Quiz";

    }
    else{
        bar_1.style.backgroundColor = "black";
        bar_2.style.backgroundColor = "black";
        bar_3.style.backgroundColor = "black";
        sectionQuiz.style.display = "none";
        setionTitle.innerText = "Result";

    }
}


