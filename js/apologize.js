const fakeCameraBtn = document.getElementById("fakecameraicon");
const instructions = document.getElementById("iconinstructions");

const onSelected = () => {
  fakeCameraBtn.remove();
  instructions.remove();
}


fakeCameraBtn.addEventListener('click', () => {
  onSelected();
  showFake();
});


async function delay(timeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Delayed for 1 second.");
      resolve();
    }, timeInMs);
  })
} 
