// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const screenWidth = screen.width;
const body = document.querySelector('body'),
    h2 = document.querySelector('h2');

function getX() {
    return window.screenX;
}

function resizeHandler() {
    const currentScreenX = getX();

    if (currentScreenX <= screenWidth * 0.1) {
        body.style.backgroundColor = "#FFD232";
    } else if (currentScreenX <= screenWidth * 0.5) {
        body.style.backgroundColor = "#C73DA3";
    } else {
        body.style.backgroundColor = "#1E82FF";
    }

    // console.log("currentWidth", currentScreenX);
    // console.log("screenWidth", screen.width);
}

function init() {
    h2.style.color = "white";
    body.style.backgroundColor = "#FFD232"
    window.addEventListener('resize', resizeHandler);

}

init();