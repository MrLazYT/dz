function formHandler(event) {
    event.preventDefault();

    const cred = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    // validation
    if (cred.email === "" || cred.password === "") {
        return false;
    }

    // write cookie
    // name=value
    // path=šljah de kuki znahodjat'sja
    // expires=termin diji Fri, 7 Jun 2024 19:00:00 GMT

    let date = new Date();
    date.setMinutes(date.getMinutes() + 1);

    document.cookie = `email=${cred.email}; path=/; expires=${date.toString()}`;
    document.cookie = `password=${cred.password}; path=/; expires=${date.toString()}`;

    document.location.href = "/";
}

function getCookie() {
    const cookie = document.cookie;
    const obj = {};

    const values = cookie.split("; ");

    for (let i = 0; i < values.length; i++) {
        const item = values[i].split("=");
        obj[item[0]] = item[1];
    }

    return obj;
}

function loadHandler() {
    const cookie = getCookie();

    if ("email" in cookie && "password in cookie")
    {
        document.location.href = "/"; // kydaje korystuvača na inše posylannja
    }
}