let idAnimaion;

function moveBarTime(deley) {
    let barTime = document.getElementById("BarTime");
    barTime.style.backgroundColor = "#00ebc7";
    let width = 100;
    let smout = 0.01;
    if(deley <=10) smout = 0.1;
    if(deley <=5) smout = 1;

    newDellay = (deley*1000*smout)/100;
    clearInterval(idAnimaion);
    idAnimaion = setInterval(frame, newDellay);
    function frame() {
        if (width <=0) {
            clearInterval(idAnimaion);
            i = 0;
        } else {
            width-=smout;
            barTime.style.width = width + "%";
            if(width<=65 && width>25 ) barTime.style.backgroundColor = "#fde24f";
            else if(width<=35) barTime.style.backgroundColor = "red";
        }
    }
}