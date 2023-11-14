const printAppBtn = document.getElementById("printappicon");
const instructions = document.getElementById("iconinstructions");
const blackScreen = document.getElementById("blackscreen");
const printScreenButton = document.getElementById("go-to-print-screen");
const divElement = document.getElementById('backgroundcontainer');
const printScreen = document.getElementById('background-print-screen');
const printScreenContents = document.getElementById('print-screen-contents');
const textarea = document.getElementById('apologytextarea');
const printApologyButton = document.getElementById('printapologybutton');

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

let buildingString = '';
let message = "I am sorry, friend. ";
let index = 0;
textarea.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (index === message.length - 1) {
    printApologyButton.disabled = false;
  } else if (index === message.length) {
    index = 0;
  }
  buildingString += message[index];
  textarea.innerHTML = buildingString;
  index++;
  textarea.setSelectionRange(buildingString.length, buildingString.length);
});

printScreenButton.addEventListener('click', async () => {
  onSelected();
  printScreen.hidden = false;
  printScreen.classList.add('comein');
  printScreenContents.classList.add('comein');
  await delay(600);
  textarea.focus();
})

async function delay(timeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeInMs);
  })
} 
