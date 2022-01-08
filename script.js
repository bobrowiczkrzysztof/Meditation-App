const minutesLeft = document.querySelector('#minutes-left');
const secondsLeft = document.querySelector('#seconds-left');
const decrement = document.querySelector('#decrement');
const increment = document.querySelector('#increment');
const timeSet = document.querySelector('#time-set');
const startTheTimer = document.querySelector('#start-the-timer');

// Default Time Set
timeSet.innerHTML = 30;

let intNum = parseInt(timeSet.innerHTML);

// Decrement Button
decrement.addEventListener('click', () => {
  if (timeSet.innerHTML <= 15 && timeSet.innerHTML != 5) {
    intNum -= 5;
    timeSet.innerHTML = intNum;
    console.log(intNum);
    console.log(timeSet.innerHTML);
    return;
  } else if (timeSet.innerHTML <= 5) {
    return;
  }
  intNum -= 15;
  timeSet.innerHTML = intNum;
});

// Increment Button
increment.addEventListener('click', () => {
  if (intNum >= 5 && intNum < 15) {
    intNum += 5;
    timeSet.innerHTML = intNum;
  } else if (intNum >= 15 && intNum < 60) {
    intNum += 15;
    timeSet.innerHTML = intNum;
  }
  return;
});

function countdownTimer(duration) {
  let timer = duration;

  myInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    minutesLeft.innerHTML = minutes;
    secondsLeft.innerHTML = seconds;

    if (--timer < 0) {
      timer = 0;
    }
  }, 1000);
}

let timerActive = false;
startTheTimer.addEventListener('click', () => {
  let timeRemaining = 60 * intNum;
  if (timerActive == false) {
    timerActive = true;
    counter = countdownTimer(timeRemaining);
  } else {
    clearInterval(myInterval);
    countdownTimer(timeRemaining);
  }
});
