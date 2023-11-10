const timerDisplay = document.getElementsByClassName('timer')[0];
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
let seconds = 1; // 60 seconds

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
    }, 1000);
}
function handleGameOver() {
   
    timerDisplay.style.visibility = 'hidden';

    alert("Game Over!"); 
}
startTimer();
