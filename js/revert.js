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
    const videoElement = document.createElement('video');
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;
    videoElement.playsinline = true;
    videoElement.setAttribute('webkit-playsinline', true);

    const divElement = document.getElementById('backgroundcontainer');
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
    videoElement.srcObject = stream;
    videoElement.play();
    divElement.appendChild(videoElement);
    continueStory();
  } catch (e) {
    console.log(e);
    showFake();
  }
});

function showFake() {
  const divElement = document.getElementById('backgroundcontainer');
  divElement.classList.add("fake");
  continueStory();
}

fakeCameraBtn.addEventListener('click', () => {
  onSelected();
  showFake();
});

function continueStory() {
  document.getElementById('storycontinued').hidden = false;

}