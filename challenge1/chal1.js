const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector('h2');

let index = 0;

function changeColor() {
    if(index >= colors.length){ index = 0; }
    h2.style.color = colors[index];
    index++
}

const superEventHandler = {
    mouseOverHandler() {
        h2.innerText = "The mouse is here!";
        changeColor();
    },
    mouseLeaveHandler() {
        h2.innerText = "the mouse is gone!";
        changeColor();
    },
    resizeHandler() {
        h2.innerText = "You just resized!"
        changeColor();
    },
    contextMenuHandler() {
        h2.innerText = "That was a right click!"
        changeColor();
    }
}

function init() {
    h2.addEventListener('mouseover', superEventHandler.mouseOverHandler);
    h2.addEventListener('mouseleave', superEventHandler.mouseLeaveHandler);
    window.addEventListener('resize', superEventHandler.resizeHandler)
    window.addEventListener('contextmenu', superEventHandler.contextMenuHandler);
}

init();