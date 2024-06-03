let container = document.querySelector(".container");

container.addEventListener('mousemove', function(e) {
    let x_cords = document.querySelector(".x_cords");
    let y_cords = document.querySelector(".y_cords");

    x_cords.innerText = e.clientX;
    y_cords.innerText = e.clientY;
});

container.addEventListener('mouseup', function(e) {
    e.preventDefault();
    let mouse_info = document.querySelector(".mouse_info");

    if (e.button == 0)
    {
        mouse_info.innerText = "left";
    }
    else if (e.button == 1)
    {
        mouse_info.innerText = "middle"
    }
    else if (e.button == 2)
    {
        mouse_info.innerText = "right";
    }
})

container.addEventListener('contextmenu', (e) => {
    e.preventDefault();
})