let textResult = document.getElementById('text-result-id');
let resultContainer = document.getElementById('result-container');
let btnTryAgain = document.getElementById('btn-again-quiz');

btnTryAgain.addEventListener('click', async () => {
    location.reload();
});

let myresult = 0;
function calculeResult(){
    return myresult++;
}

function showResult(){
    textResult.innerText = "your result is : " + calculeResult() + '/' + questions.length;
}

let arrayWrongResponsIndexs =  new Array();

function wrongRespons(index){
    arrayWrongResponsIndexs.push(index);
}

function showCorection(){
    resultContainer.innerHTML = '';
    for(index in questions){

        if(arrayWrongResponsIndexs.includes(Number(index))){
            resultContainer.innerHTML += 
                `
                <div class="question-container bg-danger"> 
                    <div class="index bg-danger">${index}</div> 
                    <div class="question bg-danger">${questions[index].question}</div>
                </div>

                <div class="responce-container bg-danger">
                    <iconify-icon icon="material-symbols:note-alt-rounded" style="color: green;" ></iconify-icon>
                    <div class="respons bg-danger">${questions[index].correctRepons}</div>
                </div>
                <div class="line"></div>
            `;
        }
        else {
            resultContainer.innerHTML += 
                `
                <div class="question-container bg-success"> 
                    <div class="index bg-success">${index}</div> 
                    <div class="question bg-success">${questions[index].question}</div>
                </div>
                <div class="line"></div>
            `;
        }
        
    }
}
