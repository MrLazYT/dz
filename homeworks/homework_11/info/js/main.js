function get_cookie_data() {
    let cookie = document.cookie;
    let data = cookie.split("; ");
    let obj = {};

    for (let i = 0; i < data.length; i++) {
        let key_value = data[i].split("=");

        obj[key_value[0]] = key_value[1];
    }

    return obj;
}

function loadHandler() {
    let data = get_cookie_data();

    let img = document.querySelector("img");
    img.src = data.poster;

    let title = document.getElementById("title");
    title.innerText = data.title;

    let year = document.getElementById("year");
    year.innerText = data.year;

    let type = document.getElementById("type");
    type.innerText = data.type;
}