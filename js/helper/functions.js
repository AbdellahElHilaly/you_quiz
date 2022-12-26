
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function getDely(index){
    // if( questions[index].deficulty == 1) return 2;
    // else if( questions[index].deficulty == 2) return 4;
    // else if( questions[index].deficulty == 3) return 7;
    // else if( questions[index].deficulty == 4) return 20;
    // else if( questions[index].deficulty == 5) return 30;

    return 1;
}

function shuffleObjArray(array){
    let helpArray = new Array();
    for(let qstIndex in array){
        helpArray.push(qstIndex);
    }
    let shuffledHepleArray = shuffle(helpArray);
    let shufledArray = new Array();
    for(index in shuffledHepleArray){
        shufledArray.push(array[shuffledHepleArray[index]]);
    }
    return shufledArray;
}

function shuffle(array) {
    return array.sort(() => (Math.random() - 0.5));
}
