let start = document.getElementById('start');
let end = document.getElementById('end');

let  seconds1 = new Date().getTime() / 1000;
let  seconds = new Date().getTime() / 1000;




let time = 13;

function move(time) {
    let barTime = document.getElementById("BarTime");
    let width = 0;

    delay = time*1000;

    let id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width+=0.1;
            barTime.style.width = width + "%";
        }
        start.innerText = seconds1;
        seconds = new Date().getTime() / 1000;
        end.innerText = seconds;
    }
}
move();