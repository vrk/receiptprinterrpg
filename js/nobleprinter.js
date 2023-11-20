const welcomeScreen = document.getElementById('selection-welcome');
const waitScreen = document.getElementById('selection-now-we-wait');
const orderScreen = document.getElementById('orders');
const sakura = document.getElementById('sakura');
const bg = document.getElementById('bg');
const form1 = document.getElementById('completion1');
const firstInput = form1.querySelector('input[type=number]');

async function quickstart() {
  welcomeScreen.classList.add("hidden");
  welcomeScreen.hidden = true;
  bg.classList.remove("hidden");
  bg.classList.add("shown");
  orderScreen.hidden = false;
  orderScreen.classList.add("shown");
  orderScreen.classList.remove("hidden");
  await delay (5000);
  sakura.classList.add("shown");
  firstInput.focus();
}

async function start() {
  await delay (4000);
  welcomeScreen.classList.add("hidden");
  await delay (1500);
  welcomeScreen.hidden = true;
  waitScreen.classList.remove("hidden");
  waitScreen.classList.add("shown");
  await delay (3000);
  waitScreen.classList.add("hidden");
  await delay (1500);
  bg.classList.remove("hidden");
  bg.classList.add("shown");
  orderScreen.hidden = false;
  await delay (500);
  orderScreen.classList.add("shown");
  orderScreen.classList.remove("hidden");
  await delay (5000);
  sakura.classList.add("shown");
  firstInput.focus();
}

async function delay(timeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeInMs);
  })
} 

start();
// quickstart();



const message = document.getElementById('message');
const response = document.getElementById('response');
const instructions = document.getElementById('instructions');
form1.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (firstInput.value.trim() === '4321') {
    firstInput.value = '';
    response.innerHTML = "wowww it's so COOL!!"
    message.innerHTML = "great work!!"
    instructions.remove();
    form1.remove();
    await delay(2000);
    questionTwo()
  } else {
    firstInput.value = '';
    message.innerHTML = "incorrect code :("
  }
});


const orderBox2 = `
<div class="box orderbox" id="order2">
  <h1>Order #2</h1>
  <p id="response2">can you please write me a poem?</p>

  <div class="instructions" id="instructions2">
    <span class="emoji">️✏️</span>
    Return to your paper zine!<br>
    Turn to page X and follow the instructions.
  </div>
</div>

<div class="box narrow compbox" id="compbox2">
  <form id="completion2">
    <h2>Completion code:</h2>
    <label>
      <input type="number" min="0" maxlength="4" name="code" id="completioncode2"/>
    </label>
    <input type="submit" value="next order"/>
  </form>
  <span id="message2"></span>
</div>
`;

const slideOutKeyframes = [
  { 
    transform: 'translateX(0)',
    opacity: 1
  },
  {
    transform: 'translateX(250px)',
    opacity: 0
  }
];

const slideOutTiming = {
  duration: 500,
  iterations: 1,
  easing: 'ease-out',
  fill: "forwards"
};

const fadeOutKeyframes = [
  { opacity: 1},
  { opacity: 0},
];

const fadeOutTiming = {
  duration: 500,
  iterations: 1,
  easing: 'ease-out',
  fill: "forwards"
};

async function questionTwo() {
  const order1 = document.querySelector('#order1');
  const compbox1 = document.querySelector('#compbox1');
  const animation1 = order1.animate(fadeOutKeyframes, fadeOutTiming);
  const animation2 = compbox1.animate(fadeOutKeyframes, fadeOutTiming);
  await Promise.all([animation1.finished, animation2.finished]);
  await delay(1000);
  orderScreen.innerHTML = '';
  orderScreen.innerHTML = orderBox2;
  const form = orderScreen.querySelector('form');
  const message = orderScreen.querySelector('#message2');
  const response = orderScreen.querySelector('#response2');
  const instructions = orderScreen.querySelector('#instructions2');
  const input = form.querySelector('input[type=number]');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (input.value.trim() === '3456') {
      input.value = '';
      response.innerHTML = "I love it :')"
      message.innerHTML = "well done!!"
      instructions.remove();
      form.remove();
      await delay(2000);
      const thisOrderBox = orderScreen.querySelector('.orderbox');
      const thisCompBox = orderScreen.querySelector('.compbox');
      const animation3 = thisOrderBox.animate(fadeOutKeyframes, fadeOutTiming);
      const animation4 = thisCompBox.animate(fadeOutKeyframes, fadeOutTiming);
      await Promise.all([animation3.finished, animation4.finished]);
      await delay(1000);
      questionThree();
    } else {
      message.innerHTML = "incorrect code :("
    }
  });
  await delay(2000);
  input.focus();
}

async function questionThree() {
  orderScreen.innerHTML = '';
  orderScreen.innerHTML = orderBox3;
}

const orderBox3 = `
<div class="box orderbox" id="order3">
  <h1>Order #3</h1>
  <p id="response3">hi receipt printer!! we have a message for you :D</p>

  <div class="instructions" id="instructions2">
    <span class="emoji">️✏️</span>
    Return to your paper zine!<br>
    Turn to page X and follow the instructions.
  </div>
</div>
`;
