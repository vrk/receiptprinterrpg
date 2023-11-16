const printAppBtn = document.getElementById("printappicon");
const instructions = document.getElementById("iconinstructions");
const blackScreen = document.getElementById("blackscreen");
const printScreenButton = document.getElementById("print-menu");
const divElement = document.getElementById('backgroundcontainer');
const printScreen = document.getElementById('background-print-screen');
const printScreenContents = document.getElementById('print-screen-contents');
const textarea = document.getElementById('apologytextarea');
const printApologyButton = document.getElementById('printapologybutton');
const apologySection = document.getElementById('apology');
const phoneoutSection = document.getElementById('phoneout');
const takeOutButton = document.getElementById('takeoutyourphone');
const phonegrab = document.getElementById('phonegrab');

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
  printScreenButton.style.visibility = 'hidden';
  printScreenButton.hidden = false;
  await delay(350);
  printScreenButton.style.visibility = 'visible';
  blackScreen.hidden = true;
}

printAppBtn.addEventListener('click', () => {
  onSelected();
  showPrintScreen();
});

let buildingString = '';
let message = "I am sorry.";
let index = 0;
textarea.addEventListener('beforeinput', (event) => {
  event.preventDefault();
  if (index === message.length) {
    printApologyButton.disabled = false;
    return;
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

takeOutButton.addEventListener('click', async () => {
  apologySection.style.opacity = 0;
  await delay(500);
  apologySection.hidden = true;
  phoneoutSection.hidden = false;
  await delay(500);
  wholePhone.style.opacity = 1;
  wholePhone.style.transform = 'translateY(0)';
  await delay(500);
  bg.style.opacity = 1;

})

async function delay(timeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeInMs);
  })
} 
