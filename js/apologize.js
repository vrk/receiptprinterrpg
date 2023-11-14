const printAppBtn = document.getElementById("printappicon");
const instructions = document.getElementById("iconinstructions");
const blackScreen = document.getElementById("blackscreen");
const printScreenButton = document.getElementById("go-to-print-screen");
const divElement = document.getElementById('backgroundcontainer');
const printScreen = document.getElementById('background-print-screen');

const onSelected = () => {
  printAppBtn.remove();
  instructions.remove();
  printScreenButton.hidden = true;
  divElement.classList.remove("printer");
}

async function showPrintScreen() {
  blackScreen.classList.add("shown");
  await delay(350);
  blackScreen.hidden = true;

  divElement.classList.add("printer");

  printScreenButton.hidden = false;
}

printAppBtn.addEventListener('click', () => {
  onSelected();
  showPrintScreen();
});

printScreenButton.addEventListener('click', () => {
  onSelected();
  printScreen.hidden = false;
  printScreen.classList.add('comein');


})

async function delay(timeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Delayed for 1 second.");
      resolve();
    }, timeInMs);
  })
} 
