// adding audio effects
const audioPP = new Audio();
audioPP.src = "../sounds/PinkPanther.mp3";

var balls = document.getElementsByClassName("ball");

window.onload = playAudio();

function playAudio() {
    audioPP.play();
  };


document.onmousemove = () => {
        var x = (event.clientX * 100) / window.innerWidth + "%";
        var y = (event.clientY * 100) / window.innerHeight + "%";
  
        for (let i = 0; i < 2; i++) {
            balls[i].style.left = x;
            balls[i].style.top = y;
            balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
        }
            
}

document.onclick = () => {playAudio();}
    




