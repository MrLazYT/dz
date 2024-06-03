let button = document.querySelector("button");

function generateRnd()
{
    return Math.floor(Math.random() * 101);
}

button.addEventListener('click', function(e) {
    let value_input = document.querySelector("h1");
    let rnd = generateRnd();
    value_input.innerText = rnd;
})