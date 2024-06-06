let button = document.querySelector("button");

button.addEventListener("click", function() {
    let color_container = document.querySelector(".colors");

    let red = document.getElementById("red_picker").value;
    let green = document.getElementById("green_picker").value;
    let blue = document.getElementById("blue_picker").value;

    let color_div = document.createElement("div");
    color_div.classList.add("color");

    let color_box = document.createElement("div");
    color_box.classList.add("color_box");
    color_box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    let color_p = document.createElement("p");
    color_p.innerText = `RGB(${red}, ${green}, ${blue})`;

    color_div.appendChild(color_box);
    color_div.appendChild(color_p);

    color_container.appendChild(color_div);
});