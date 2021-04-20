// alert('Im Working. Im JS')

// a = 2


// expression = 한줄, A line of code
// Variable : Create -> Initialize -> Use

// let, const, var
// const : constant,  immutable, 상수
// var : variable

// 변수를 선언할 때는 const로
// 필요할때만 let을 사용한다.

// const nicoInfo = {
//     name: "Nico",
//     age: 33,
//     gender: "male",
//     isHandsome: false
// }

console.log(console)

function sayHello(name, age) {
    return `Hello ${name} you are ${age} years old`;  // `` 백틱
}


const greetShlee = sayHello("shlee", 33);
console.log(greetShlee);

// touch the HTML
console.log(document);

const title = document.getElementById("title")
// DOM : Document Object Model
title.innerHTML = "Hi from JS";

console.dir(title)
title.style.color = 'red';

document.title = 'I own you now'

document.querySelector("#title")

function handleClick(event) {
    console.log(event);
}

// window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick)

// className, classList












