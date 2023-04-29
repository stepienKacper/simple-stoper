var timerDisplay = document.querySelector("#time");
var startButton = document.querySelector(".start");
var stopButton = document.querySelector(".stop");
var resetButton = document.querySelector(".reset");

// ustawienie początkowej wartości czasu
var startTime = 0;

// ustawienie wartości stopera na początku
var timerId;
var timerRunning = false;

// funkcja wywoływana co 10ms
function updateTimer() {
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;
  
    var hours = Math.floor(elapsedTime / 3600000);
    elapsedTime = elapsedTime % 3600000;
  
    var minutes = Math.floor(elapsedTime / 60000);
    elapsedTime = elapsedTime % 60000;
  
    var seconds = Math.floor(elapsedTime / 1000);
    var milliseconds = elapsedTime % 1000;
  
    // wyświetlenie czasu na ekranie
    timerDisplay.innerHTML = hours + ":" +
                              ("0" + minutes).slice(-2) + ":" +
                              ("0" + seconds).slice(-2) + "." +
                              ("00" + milliseconds).slice(-3);
  }

// funkcja uruchamiana po naciśnięciu przycisku "start"
function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    startTime = new Date().getTime();
    timerId = setInterval(updateTimer, 10);
  }
}

// funkcja uruchamiana po naciśnięciu przycisku "stop"
function stopTimer() {
  if (timerRunning) {
    timerRunning = false;
    clearInterval(timerId);
  }
}

// funkcja uruchamiana po naciśnięciu przycisku "reset"
function resetTimer() {
  stopTimer();
  timerDisplay.innerHTML = "0.000";
}

// ustawienie funkcji na przyciski
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);