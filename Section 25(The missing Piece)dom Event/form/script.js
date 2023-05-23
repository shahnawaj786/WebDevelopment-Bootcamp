console.log("working");
let form = document.querySelector('#form');
let input = document.querySelector('#catName');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(input.value);
    let newCat = input.value;
    let newLi = document.createElement('li');
    newLi.append());
document.body.appendChild(newLi);
});
