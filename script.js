var blueCar = document.getElementById("bluecar");
var greyCar = document.getElementById("greycar");
var result = document.getElementById("result");
var score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;

blueCar.addEventListener("animationiteration",function(){
    var random  = ((Math.floor(Math.random()*3))*130)
    blueCar.style.left = random+"px"
    counter++;
})

window.addEventListener("keydown",function(e){
    if(e.keyCode =="39"){
        var greyCarLeft = parseInt(window.getComputedStyle(greyCar).getPropertyValue("left"))
        if(greyCarLeft<260)
        {
            greyCar.style.left = (greyCarLeft+130)+"px";
        }
    };
    if (e.keyCode == "37"){
        var greyCarLeft = parseInt(window.getComputedStyle(greyCar).getPropertyValue("left"))
        if(greyCarLeft>0)
        {
            greyCar.style.left = (greyCarLeft-130)+"px";
    
        }
    }
         
})
setInterval(function Gameover(){
    var blueCarTop= parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
    var blueCarLeft= parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var greyCarLeft= parseInt(window.getComputedStyle(greyCar).getPropertyValue("left"));
    // console.log(blueCarTop, blueCarLeft, greyCarLeft)
    if((blueCarLeft === greyCarLeft)&&(blueCarTop>250)&&(blueCarTop<450)){
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML =`Your score is ${counter}`;
        handleGameOver();

        counter = 0;
    }
    

},10)



let seconds = 60; // 60 seconds
const timerDisplay = document.getElementsByClassName('timer')[0];
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

function startTimer() {
    const timerInterval = setInterval(() => {
        seconds--;

        if (seconds >= 0) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;

            minutesDisplay.textContent = minutes;
            secondsDisplay.textContent = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
        } else {
            console.log("qwe")
            clearInterval(timerInterval);
            handleGameOver();

            
             // Call a function to handle game over actions
        }
    }, 1000); // Update every 1 second (1000 milliseconds)
}

function handleGameOver() {
   
    timerDisplay.style.visibility = 'hidden';

    alert("Game Over!"); 
}

startTimer();





// var button=document.getElementById("startScreen")
// button.addEventListener("click",()=>{
//     window.location.href="./index.html"
// })
