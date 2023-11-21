const envelope = document.getElementById('envelope-container');
const bottom = document.getElementById('bottom');
const message = document.getElementById('message');
const front = document.getElementById('front-closed');
const end = document.getElementById('end');

envelope.addEventListener('click', async () => {
  bottom.hidden = false;
  front.hidden = true;
  message.hidden = false;
  await delay(1000);
  const animation = message.animate(slideOutKeyframes, slideOutTiming);
  await animation.finished;
  await delay(1000);
  end.style.opacity = 1;

}, { once: true });



async function delay(timeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeInMs);
  })
}


const slideOutKeyframes = [
  { 
    transform: 'translateY(0)',
  },
  {
    transform: 'translateY(-300px)',
  }
];

const slideOutTiming = {
  duration: 500,
  iterations: 1,
  easing: 'ease-out',
  fill: "forwards"
};
