
let steps = 3;

let leftTopOffset = 0;
let leftLeftOffset = -25;
let rightTopOffset = 50;
let rightRightOffset = 100;

let leftGoesUp = true;
let verticalDelta = 25;
let horizontalDelta = 10;

let bgValue = 0;
let isStopping = false;

setTimeout(() => {
  runDiv.innerHTML = "You decide";
  setTimeout(() => {
    runDiv.innerHTML = "to run.";
    setTimeout(() => {
      runDiv.hidden = true;
      setTimeout(() => {
        runningDiv.hidden = false;

      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

const button = document.getElementById('step-button');
const righthand = document.getElementById('right-hand-svg');
const lefthand = document.getElementById('left-hand-svg');
const runDiv = document.getElementById('run');
const runningDiv = document.getElementById('running-away');
const boxyEnding = document.getElementById('theend');
button.addEventListener('click', () => {

  const dirMultiplier = leftGoesUp ? 1 : -1;

  if (steps < 42) {
    rightTopOffset += verticalDelta * dirMultiplier
    righthand.style.top = `${rightTopOffset}px`;
    rightRightOffset += horizontalDelta * dirMultiplier;
    righthand.style.left = `${rightRightOffset}px`;
  }

  if (steps < 48) {
    leftTopOffset -= verticalDelta * dirMultiplier
    lefthand.style.top = `${leftTopOffset}px`;
    leftLeftOffset += horizontalDelta * dirMultiplier;
    lefthand.style.left = `${leftLeftOffset}px`;
  } else {
    lefthand.style.opacity = 0;
    lefthand.style.transform = 'translateY(100px)';
    righthand.style.opacity = 0;
    righthand.style.transform = 'translateY(100px)';
    boxyEnding.style.opacity = 1;
    boxyEnding.style.transform = 'translateY(0)';
    button.style.opacity = 0;
  }

  steps++;
  if (steps % 6 === 0) {
    leftGoesUp = !leftGoesUp;
  }

  if (steps === 10) {
    flashTwo();
  } else if (steps === 20) {
    flashOne();
  } else if (steps === 30) {
    flashThree();
  }

  bgValue += 7;
  const bgColor = `rgb(${bgValue}, ${bgValue}, ${bgValue})`;
  if (bgValue > 254) {
    if (!leftGoesUp) {
      isStopping = true;
      console.log("stop at", steps)
    }
  }
  document.body.style.backgroundColor = bgColor;
})

function flashOne() {
  const box = document.getElementById("one");
  box.hidden = false;
  setTimeout(() => {
    box.hidden = true;
  }, 500);
}

function flashTwo() {
  const box = document.getElementById("two");
  box.hidden = false;
  setTimeout(() => {
    box.hidden = true;
  }, 500);
}

function flashThree() {
  const box = document.getElementById("three");
  box.hidden = false;
  setTimeout(() => {
    box.hidden = true;
  }, 500);
}