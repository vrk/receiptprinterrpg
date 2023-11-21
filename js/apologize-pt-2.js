const printAppBtn = document.getElementById("printappicon");
const blackScreen = document.getElementById("blackscreen");
const printMenu = document.getElementById("print-menu");
const printScreenButton = document.getElementById("go-to-print-screen");
const divElement = document.getElementById('backgroundcontainer');
const printScreen = document.getElementById('background-print-screen');
const printScreenContents = document.getElementById('print-screen-contents');
const textarea = document.getElementById('apologytextarea');
const printApologyButton = document.getElementById('printapologybutton');
const apologySection = document.getElementById('apology');
const phoneoutSection = document.getElementById('phoneout');
const takeOutButton = document.getElementById('takeoutyourphone');
const phonegrab = document.getElementById('phonegrab');
const receiptPrinter = document.getElementById('receiptprinter');

const wholePhone = document.getElementById('phonecase');
const bg = document.getElementById('bg');

const onSelected = () => {
  printAppBtn.remove();
  printMenu.hidden = true;
  divElement.classList.remove("printer");
}

async function showPrintScreen() {
  blackScreen.hidden = false;
  blackScreen.style.zIndex = 100;
  await delay(200);
  blackScreen.classList.add("shown");
  printMenu.style.visibility = 'hidden';
  printMenu.hidden = false;
  await delay(350);
  printMenu.style.visibility = 'visible';
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
  event.stopPropogation();

  if (index === message.length) {
    return;
  }
  buildingString += message[index];
  textarea.innerHTML = buildingString;
  index++;
  textarea.setSelectionRange(buildingString.length, buildingString.length);
  if (index === message.length) {
    printApologyButton.disabled = false;
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

  receiptPrinter.hidden = false;
  receiptPrinter.style.opacity = 1;
  wholePhone.style.opacity = 0;
  wholePhone.style.transform = 'translateY(100px)';
  await delay(1500);
  wholePhone.style.visibility = 'hidden';
  wholePhone.style.zIndex = -1000;
  await delay(500);
  document.querySelector('.hid-receipt').classList.add('show')
  await delay(3500);
  document.querySelector('#theend').style.opacity = 1;
})

async function delay(timeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeInMs);
  })
} 
