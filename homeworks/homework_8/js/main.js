function addcolor(e) {
    e.preventDefault();
    
    let name_error = document.getElementById("name_error");
    let code_error = document.getElementById("code_error");

    name_error.value = "";
    code_error.value = "";

    let color_container = document.querySelector(".colors");

    let name = document.getElementById("name_input").value;
    let type = document.getElementById("color_type").value;
    let code = document.getElementById("code_input").value;

    let name_regex = /^[A-Za-z]{0,}$/;
    let rgb_regex = /^\d+[(\s)|(,)]+[\s+]?\d+[(\s)|(,)]+[\s+]?\d+$/;
    let rgba_regex = /^\d+[(\s)|(,)]+[\s+]?\d+[(\s)|(,)]+[\s+]?\d+[(\s)|(,)]+[\s+]?[0-1]?(?:\.\d+)?$/;
    let hex_regex = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;

    let to_add = true;

    if (name == "") {
        name_error.innerText = "The color name can't be empty";
        to_add = false;
    }

    if (!name_regex.test(name)) {
        name_error.innerText = "The color name must contain only letters";
        to_add = false;
    }

    if (type == "rgb") {
        if (code == "") {
            code_error.innerText = "The color code can't be empty";
            to_add = false;
        }

        if (!rgb_regex.test(code)) {
            code_error.innerText = "The color code must match: [0, 255], [0, 255], [0, 255]";
            to_add = false; 
        }
    } else if (type == "rgba") {
        if (code == "") {
            code_error.innerText = "The color code can't be empty";
            to_add = false;
        }

        if (!rgba_regex.test(code)) {
            code_error.innerText = "The color code must match: [0, 255], [0, 255], [0, 255], [0.0, 1]";
            to_add = false; 
        }
    } else if (type == "hex") {
        if (code == "") {
            code_error.innerText = "The color code can't be empty";
            to_add = false;
        }

        if (!hex_regex.test(code)) {
            code_error.innerText = "The color code must match: #(?:[0-9a-fA-F]{3,4}){1,2}";
            to_add = false; 
        }
    }

    if (to_add) {
        let color_div = document.createElement("div");
        color_div.classList.add("color");

        let color_box = document.createElement("div");
        color_box.classList.add("color_box");

        if (type == "rgb") {
            color_div.style.backgroundColor = `rgb(${code})`;
        } else if (type == "rgba") {
            color_div.style.backgroundColor = `rgba(${code})`;
        } else if (type == "hex") {
            color_div.style.backgroundColor = code;
        }

        let p_name = document.createElement("p");
        p_name.id = "color_name";
        p_name.innerText = name;

        let p_type = document.createElement("p");
        p_type.id = "color_type";
        p_type.innerText = type;

        let p_code = document.createElement("p");
        p_code.id = "color_code";
        p_code.innerText = code;

        color_box.appendChild(p_name);
        color_box.appendChild(p_type);
        color_box.appendChild(p_code);

        color_div.appendChild(color_box);

        color_container.appendChild(color_div);
    }
};