console.log("hello there");
let h1 = document.querySelector('h1');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    let x = parseInt(Math.random() * 255 + 1);
    let y = parseInt(Math.random() + 255 + 1);
    let z = parseInt(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${x},${y}, ${x})`;
    h1.innerText = `${x}, ${y}, ${z}`;
})