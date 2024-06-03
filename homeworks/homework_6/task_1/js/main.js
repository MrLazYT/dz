let input_text = document.querySelector('.value');
let up_button = document.querySelectorAll('.button')[0];
let down_button = document.querySelectorAll('.button')[1];

up_button.addEventListener('click', function(e) {
    input_text.innerText = parseInt(input_text.innerText) + 1;
});

up_button.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

up_button.addEventListener('mouseenter', function() {
    up_button.style.cursor = 'pointer';
});

down_button.addEventListener('click', function(e) {
    input_text.innerText = parseInt(input_text.innerText) - 1;
});

down_button.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

down_button.addEventListener('mouseenter', function() {
    down_button.style.cursor = 'pointer';
});