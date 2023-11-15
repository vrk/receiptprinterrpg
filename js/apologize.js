const printAppBtn = document.getElementById("printappicon");
const instructions = document.getElementById("iconinstructions");
const blackScreen = document.getElementById("blackscreen");
const printScreenButton = document.getElementById("go-to-print-screen");
const divElement = document.getElementById('backgroundcontainer');
const printScreen = document.getElementById('background-print-screen');
const printScreenContents = document.getElementById('print-screen-contents');
const textarea = document.getElementById('apologytextarea');
const printApologyButton = document.getElementById('printapologybutton');

const wholePhone = document.getElementById('phonecase');
const bg = document.getElementById('bg');

const onSelected = () => {
  printAppBtn.remove();
  instructions.remove();
  printScreenButton.hidden = true;
  divElement.classList.remove("printer");
}

async function showPrintScreen() {
  blackScreen.classList.add("shown");
  await delay(350);

  divElement.classList.add("printer");

  printScreenButton.hidden = false;

  await delay(50);
  blackScreen.hidden = true;
}

printAppBtn.addEventListener('click', () => {
  onSelected();
  showPrintScreen();
});

let buildingString = '';
let message = "I am sorry. ";
let index = 0;
textarea.addEventListener('beforeinput', (event) => {
  event.preventDefault();
  buildingString += message[index];
  textarea.innerHTML = buildingString;
  index++;
  textarea.setSelectionRange(buildingString.length, buildingString.length);
  if (index === message.length - 1) {
    printApologyButton.disabled = false;
  } else if (index === message.length) {
    index = 0;
  }
});

printScreenButton.addEventListener('click', async () => {
  onSelected();
  printScreen.hidden = false;
  printScreen.classList.add('comein');
  printScreenContents.classList.add('comein');
  await delay(600);
  textarea.focus();
})

printApologyButton.addEventListener('click', async () => {
  if (printApologyButton.disabled) { return; }
  printScreenContents.classList.add('printing');
  for (let i = 0; i < 3; i++) {
    printScreenContents.innerHTML = 'Printing.  ';
    await delay(300);
    printScreenContents.innerHTML = 'Printing.. ';
    await delay(300);
    printScreenContents.innerHTML = 'Printing...';
    await delay(300);
  }
  await delay(300);

  wholePhone.style.opacity = 0;
  wholePhone.style.transform = 'translateY(100px)';
  await delay(1000);
  wholePhone.hidden = true;
})

async function delay(timeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeInMs);
  })
} 
