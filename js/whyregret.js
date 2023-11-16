const qScreen = document.getElementById('questioning');
const transitionScreen = document.getElementById('transition');
const printerPlzButton = document.getElementById('printerplz');

printerPlzButton.addEventListener('click', async () => {
  qScreen.hidden = true;
  transitionScreen.hidden = false;
  await delay(3000);
  window.location = '/yes';
});


async function delay(timeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeInMs);
  })
} 