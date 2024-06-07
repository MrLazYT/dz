function getCookie() {
    const cookie = document.cookie;

    const cookieRow = cookie.split("; ");

    let obj = {};

    for (let i = 0; i < cookieRow.length; i++) {
        const items = cookieRow[i].split("=");
        const key = items[0];
        const value = items[1];

        obj[key] = value;
    }

    return obj;
}

function loadHandler() {
    const cookie = getCookie();

    if ("email" in cookie && "password" in cookie) {
        let hello_msg = document.getElementById("hello_msg");

        hello_msg.innerText = `Hello, ${cookie.email}`;
    }
    else {
        document.location.href = "/registration";
    }
}

function removeCookie(name) {
    document.cookie = `${name}=""; expires=${new Date(0)}`;
}

function exit(e) {
    e.preventDefault();

    console.log("Worked!!!");

    removeCookie("email");
    removeCookie("password");

    document.location.href = "/registration";
}