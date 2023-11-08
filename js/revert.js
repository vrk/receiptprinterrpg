const explanation = document.getElementById("explanation");
const realCameraBtn = document.getElementById("realcameraicon");
const fakeCameraBtn = document.getElementById("fakecameraicon");
const instructions = document.getElementById("iconinstructions");

const onSelected = () => {
  explanation.remove();
  realCameraBtn.remove();
  fakeCameraBtn.remove();
  instructions.remove();
}



realCameraBtn.addEventListener('click', async () => {
  onSelected();
  try {
    const videoElement = document.querySelector('video');
    // videoElement.autoplay = true;
    // videoElement.muted = true;
    // videoElement.loop = true;
    // videoElement.playsinline = true;
    // videoElement.setAttribute('webkit-playsinline', true);

    const divElement = document.getElementById('backgroundcontainer');
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
    videoElement.srcObject = stream;
    videoElement.play();
    document.getElementById('dot').hidden = false;
    divElement.appendChild(videoElement);
    continueStory();
  } catch (e) {
    console.log(e);
    showFake();
  }
});

async function showFake() {
  await delay(500);
  document.getElementById('dot').hidden = false;
  await delay(1000);
  const divElement = document.getElementById('backgroundcontainer');
  divElement.classList.add("fake");
  continueStory();
}

fakeCameraBtn.addEventListener('click', () => {
  onSelected();
  showFake();
});

async function continueStory() {
  document.getElementById('storycontinued').hidden = false;
  await delay(1000);
  document.getElementById('scrolldownbutton').classList.remove("hidden");
  document.getElementById('scrolldownbutton').classList.add("visible");
}


var prevScrollpos = window.scrollY;
window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    // document.getElementById("stub").style.top = "0";
  } else {
    // document.getElementById("stub").style.top = "150px";
  }
  prevScrollpos = currentScrollPos;
}


async function delay(timeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Delayed for 1 second.");
      resolve();
    }, timeInMs);
  })
} 
