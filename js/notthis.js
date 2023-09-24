let pressed = false;
const button = document.getElementById("power-btn");
const fadeToBlack = document.getElementById("fadetoblack");

const onDown = () => {
  pressed = true;
  fadeToBlack.style.opacity = 1.0;
  setTimeout(() => {
    if (pressed) {
    }
  }, 3000);
}

const onUp = () => {
  pressed = false;
  fadeToBlack.style.opacity = 0;
}

button.addEventListener("mousedown", onDown);
button.addEventListener("mouseup", onUp);
button.addEventListener("touchstart", onDown);
button.addEventListener("touchend", onUp);
button.addEventListener("touchcancel", onUp);