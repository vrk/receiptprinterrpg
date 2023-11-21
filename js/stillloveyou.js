const envelope = document.getElementById('envelope-container');
const bottom = document.getElementById('bottom');
const flap = document.getElementById('flap');
const message = document.getElementById('message');
const front = document.getElementById('front-closed');
const end = document.getElementById('end');
const click = document.getElementById('click');

envelope.addEventListener('click', async () => {
  bottom.hidden = false;
  front.hidden = true;
  message.hidden = false;
  click.hidden = true;
  await delay(1000);
  const animation = message.animate(slideOutKeyframes, slideOutTiming);
  await animation.finished;
  message.style.zIndex = 1000;
  const animation2 = message.animate(slideDownKeyframes, slideDownTiming);
  await animation2.finished;
  const an3 = flap.animate(fadeOutKeyframes, fadeOutTiming);
  const an4 = bottom.animate(fadeOutKeyframes, fadeOutTiming);
  await Promise.all([an3.finished, an4.finished]);
  envelope.style.webkitMask = 'unset';
  envelope.style.mask = 'unset';

  const an5 = message.animate(zoomInKeyframes, zoomInTiming);
  await an5.finished;
  await delay(2000);
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
  duration: 750,
  iterations: 1,
  easing: 'linear',
  fill: "forwards"
};

const slideDownTiming = {
  duration: 500,
  iterations: 1,
  easing: 'ease-out',
  fill: "forwards"
};

const slideDownKeyframes = [
  { 
    transform: 'translateY(-300px)',
  },
  {
    transform: 'translateY(-150px)',
  }
];

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


const zoomInKeyframes = [
  { transform: 'translateY(-150px) scale(1, 1) rotate(0)'},
  { transform: 'translateY(-150px) scale(1.2, 1.2) rotate(-3deg)'},
];

const zoomInTiming = {
  duration: 1000,
  iterations: 1,
  easing: 'ease-out',
  fill: "forwards"
};