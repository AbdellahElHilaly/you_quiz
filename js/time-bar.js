let start = document.getElementById('start');
let end = document.getElementById('end');

function move(deley) {
    let barTime = document.getElementById("BarTime");
    let width = 100;
    let smout = 0.01;
    if(deley <10) smout = 0.1;

    newDellay = (deley*1000*smout)/100;
    console.log(newDellay);
    
    let id = setInterval(frame, newDellay);
    function frame() {
        if (width <=0) {
            alert("end time");
            clearInterval(id);
            i = 0;
        } else {
            width-=smout;
            barTime.style.width = width + "%";
            if(width<=65 && width>25 ) barTime.style.backgroundColor = "#fde24f";
            else if(width<=35) barTime.style.backgroundColor = "red";
        }
    }
}
move(30);