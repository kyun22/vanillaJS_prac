const body = document.querySelector('body');

const IMG_NUMBER = 4;

function handleImageLoad() {
    console.log("finish loading");
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    image.addEventListener("loadend", handleImageLoad);

}

function getRandomNum() {
    const random = Math.floor(Math.random() * IMG_NUMBER);
    return random;
}

function init() {
    const random = getRandomNum();
    paintImage(random);
}

init();