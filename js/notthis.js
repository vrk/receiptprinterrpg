let pressed = false;
const button = document.getElementById("power-btn");
const fadeToBlack = document.getElementById("fadetoblack");
const fadePower = document.getElementById("fadepowertoo");
let startPowerDown = false;

const onDown = (e) => {
  e.preventDefault();
  button.classList.add("pressed");
  pressed = true;
  fadeToBlack.style.opacity = 1.0;
  setTimeout(() => {
    if (pressed) {
      powerDown();
    }
  }, 1500);
}

const powerDown = () => {
  if (startPowerDown) {
    return;
  }
  startPowerDown = true;
  fadePower.style.zIndex = 10;
  fadePower.style.opacity = 1;
  setTimeout(() => {
    window.location.href = "/revert"
  }, 3000);

}

const onUp = () => {
  if (startPowerDown) {
    return;
  }
  pressed = false;
  button.classList.remove("pressed");
  fadeToBlack.style.opacity = 0;
}

button.addEventListener("mousedown", onDown);
button.addEventListener("mouseup", onUp);
button.addEventListener("touchstart", onDown);
button.addEventListener("touchend", onUp);
button.addEventListener("touchcancel", onUp);