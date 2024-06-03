let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', () => {
    p.classList.toggle("show");
    p.classList.toggle("hide");
});