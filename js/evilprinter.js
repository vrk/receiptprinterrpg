const welcomeScreen = document.getElementById('selection-welcome');
const verywell = document.getElementById('welcome-message');
const waitScreen = document.getElementById('selection-now-we-wait');
const orderScreen = document.getElementById('orders');
const bg = document.getElementById('bg');
const form1 = document.getElementById('completion1');
const firstInput = form1.querySelector('input[type=number]');
const fogContainer = document.getElementById('fogcontainer');

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

const fadeInKeyframes = [
  { opacity: 0},
  { opacity: 1},
];

const fadeInTiming = {
  duration: 500,
  iterations: 1,
  easing: 'ease-out',
  fill: "forwards"
};

async function quickstart() {
  welcomeScreen.hidden = true;
  bg.classList.remove("hidden");
  bg.classList.add("shown");
  fogContainer.classList.add('shown');
  orderScreen.hidden = false;
  await delay (500);
  orderScreen.classList.add("shown");
  orderScreen.classList.remove("hidden");
  await delay (5000);
  firstInput.focus();
}

async function start() {
  await delay (4000);
  const animation = verywell.animate(fadeOutKeyframes, fadeOutTiming);
  await animation.finished;
  verywell.innerHTML = `
    <p>You wait for your first print job to come in...
  `;
  await delay (1000);
  const animation2 = verywell.animate(fadeInKeyframes, fadeInTiming);
  await animation2.finished;
  await delay (4000);
  const animation3 = welcomeScreen.animate(fadeOutKeyframes, fadeOutTiming);
  await animation3.finished;

  welcomeScreen.classList.add("hidden");
  await delay (1500);
  welcomeScreen.hidden = true;
  bg.classList.remove("hidden");
  bg.classList.add("shown");
  fogContainer.classList.add("shown");
  orderScreen.hidden = false;
  await delay (500);
  orderScreen.classList.add("shown");
  orderScreen.classList.remove("hidden");
  await delay (5000);
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
  if (firstInput.value.trim() === '7890') {
    firstInput.value = '';
    response.innerHTML = "nooo it's crumpled"
    message.innerHTML = "lol NICE"
    instructions.remove();
    form1.remove();
    await delay(2000);
    questionTwo()
  } else {
    firstInput.value = '';
    message.innerHTML = "wrong code >:("
  }
});


const orderBox2 = `
<div class="box orderbox" id="order2">
  <h1>Order #2</h1>
  <p id="response2">I took a photo of some flowers. Print it please?</p>

  <div class="instructions" id="instructions2">
    <p>
      <span class="emoji">️🌞</span>
      LET'S OVERHEAT
      <span class="emoji">️🌞</span>
    </p>
    <p>
      Turn to page X in your paper zine and
      print the photo WAY too dark.
    </p>
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
    if (input.value.trim() === '1111') {
      input.value = '';
      response.innerHTML = "dang, it came out kinda dark"
      message.innerHTML = "they never saw it coming >:D"
      instructions.remove();
      form.remove();
      await delay(3000);
      const thisOrderBox = orderScreen.querySelector('.orderbox');
      const thisCompBox = orderScreen.querySelector('.compbox');
      const animation3 = thisOrderBox.animate(fadeOutKeyframes, fadeOutTiming);
      const animation4 = thisCompBox.animate(fadeOutKeyframes, fadeOutTiming);
      await Promise.all([animation3.finished, animation4.finished]);
      await delay(1000);
      questionThree();
    } else {
      message.innerHTML = "wrong code >:("
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
    <p>
      <span class="emoji">️🤨</span>
      Hmmm....
      <span class="emoji">️🧐</span>
    </p>
    <p>
      You're kinda curious...<br>
      Turn to page X and follow the instructions?
    </p>
  </div>
</div>
`;



/** adapted from https://codepen.io/mnald12/pen/RwvbvLq */

const canvas = document.getElementById("canvas");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const ctx = canvas.getContext("2d");

const LEFT = "LEFT";
const RIGHT = "RIGHT";

const getDir = () => {
  const dec = Math.floor(Math.random() * 30);
  if (dec < 16) return LEFT;
  else return RIGHT;
};

class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.floor(Math.random() * 30);
    this.clr = "silver";
    this.dir = getDir();
    this.speed = Math.floor(Math.random() * 2) + 1;
  }
  moveLeft() {
    this.x -= this.speed;
  }
  moveRight() {
    this.x += this.speed;
  }
  update() {
    if (this.x <= 0) {
      this.dir = RIGHT;
    } else if (this.x >= canvas.width) {
      this.dir = LEFT;
    }

    if (this.dir === LEFT) {
      this.moveLeft();
    } else {
      this.moveRight();
    }
  }
  drawRoot(x, y) {
    let sx = x,
      sy = y,
      ex = sx + Math.floor(Math.random() * 50) - 15,
      ey = sy + Math.floor(Math.random() * 30);
    let i = 0,
      limit = Math.floor(Math.random() * 20);
    while (i < limit) {
      ctx.beginPath();
      ctx.strokeStyle = "silver";
      ctx.lineWidth = 1;
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.stroke();
      sx = ex;
      sy = ey;
      ex = sx + Math.floor(Math.random() * 50) - 15;
      ey = sy + Math.floor(Math.random() * 30);
      i++;
    }
  }
  drawLightning() {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(25, 25, 25, 0.1)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let sx = this.x,
      sy = this.y,
      ex = sx + Math.floor(Math.random() * 30) - 15,
      ey = sy + Math.floor(Math.random() * 30);

    let i = 0,
      limit = Math.floor(Math.random() * 20) + 10;

    while (i < limit) {
      ctx.beginPath();
      ctx.strokeStyle = "silver";
      ctx.lineWidth = 3;
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.stroke();
      sx = ex;
      sy = ey;
      ex = sx + Math.floor(Math.random() * 30) - 15;
      ey = sy + Math.floor(Math.random() * 30);
      let root = Math.floor(Math.random() * 1000);
      if (root < 50) {
        this.drawRoot(sx, sy);
      }
      i++;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.clr;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();

    const strike = Math.floor(Math.random() * 100000);

    if (strike < 100) {
      this.drawLightning();
    }
  }
}

const clouds = [];

let i = 0;

while (i < canvas.width) {
  clouds.push(new Cloud(i, 0));
  i += Math.floor(Math.random() * 10) + 1;
}


var fps = 5;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;
  

const animate = () => {
       
  now = Date.now();
  delta = now - then;
  if (delta > interval) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.shadowColor = "aliceblue";
    ctx.shadowBlur = 10;

    for (let c of clouds) {
      c.draw();
      c.update();
    }
    then = now - (delta % interval);
  }

  requestAnimationFrame(animate);
};

animate();

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
