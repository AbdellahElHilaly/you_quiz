let textResult = document.getElementById('text-result-id');
let resultContainer = document.getElementById('result-container');
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
    console.log(arrayWrongResponsIndexs);
    for(index in questions){

        if(arrayWrongResponsIndexs.includes(Number(index))){
            resultContainer.innerHTML += 
                `
                <div class="question-container"> 
                    <div class="index bg-danger">${index}</div> 
                    <div class="question">${questions[index].question}</div>
                </div>

                <div class="responce-container">
                    <iconify-icon icon="material-symbols:note-alt-rounded" style="color: green;" width="45"></iconify-icon>
                    <div class="respons">${questions[index].correctRepons}</div>
                </div>
            `;
        }
        else {
            resultContainer.innerHTML += 
                `
                <div class="question-container"> 
                    <div class="index bg-success">${index}</div> 
                    <div class="question ">${questions[index].question}</div>
                </div>
            `;
        }
        
    }
}
