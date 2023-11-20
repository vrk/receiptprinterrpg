const welcomeScreen = document.getElementById('selection-welcome');
const waitScreen = document.getElementById('selection-now-we-wait');
const orderScreen = document.getElementById('orders');
const sakura = document.getElementById('sakura');
const bg = document.getElementById('bg');

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
}

async function delay(timeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeInMs);
  })
} 

start()