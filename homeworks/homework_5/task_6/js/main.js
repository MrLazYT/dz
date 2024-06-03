const PROGRESS_MAX = 300;

let progress_value = document.querySelector(".progress_value");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    let value = parseInt(progress_value.style.width);
    let five_percent = (PROGRESS_MAX / 100) * 5;

    if (isNaN(value))
    {
        value = 0;
    }
    
    value += five_percent;
    progress_value.style.width = `${value}px`;

    if (value >= PROGRESS_MAX)
    {
        button.disabled = true;
    }
});