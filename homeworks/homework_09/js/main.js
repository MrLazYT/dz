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

function submitHandler(e) {
    e.preventDefault();

    clearErrors();

    let data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        birthday: document.getElementById("birthday").value,
        gender: document.getElementById("gender").value,
        phone: document.getElementById("phone").value,
        skype: document.getElementById("skype").value
    }

    if (validateData(data)) {
        document.cookie = `firstname=${data.firstname}; path=/`;
        document.cookie = `lastname=${data.lastname}; path=/`;
        document.cookie = `birthday=${data.birthday}; path=/`;
        document.cookie = `gender=${data.gender}; path=/`;
        document.cookie = `phone=${data.phone}; path=/`;
        document.cookie = `skype=${data.skype}; path=/`;
    }
}

function clearErrors() {
    let firstname_error = document.getElementById("firstname_error");
    let lastname_error = document.getElementById("lastname_error");
    let birthday_error = document.getElementById("birthday_error");
    let phone_error = document.getElementById("phone_error");
    let skype_error = document.getElementById("skype_error");

    firstname_error.innerText = "";
    lastname_error.innerText = "";
    birthday_error.innerText = "";
    phone_error.innerText = "";
    skype_error.innerText = "";
}

function validateData(data) {
    let res = true;
    let firstname_error = document.getElementById("firstname_error");
    let lastname_error = document.getElementById("lastname_error");

    let firstname_res = validateName(data.firstname, firstname_error) && res;
    let lastname_res = validateName(data.lastname, lastname_error) && res;
    let birthday_res = validateBirthday(data.birthday) && res;
    let phone_res = validatePhone(data.phone) && res;
    let skype_res = validateSkype(data.skype) && res;

    res = firstname_res && lastname_res && birthday_res && phone_res && skype_res;

    return res;
}

function validateName(name, error_label) {
    let res = true;
    let nameRegx = /^[A-Za-z]{1,20}$/;

    if (name == "") {
        error_label.innerText = "Can't be empty";
        res = false;
    } else if (name.length > 20) {
        error_label.innerText = "Too long";
        res = false;
    } else if (!nameRegx.test(name)) {
        error_label.innerText = "Letters only";
        res = false;
    }

    return res;
}

function validateBirthday(birthday) {
    let res = true;
    let birthday_error = document.getElementById("birthday_error");

    if (birthday == "") {
        birthday_error.innerText = "Can't be empty";
        res = false;
    } else if (birthday < 1900) {
        birthday_error.innerText = "Only from 1900";
        res = false;
    } else if (birthday > new Date().getFullYear()) {
        birthday_error.innerText = "Must be by now";
        res = false;
    }

    return res;
}

function validatePhone(phone) {
    let res = true;
    let phone_error = document.getElementById("phone_error");
    let phoneRegx = /^$|^[0-9\-\+\(\) ]{9,26}$/;

    if (!phoneRegx.test(phone)) {
        phone_error.innerText = "Incorrect";
        res = false;
    }

    return res;
}

function validateSkype(skype) {
    let res = true;
    let skype_error = document.getElementById("skype_error");
    let skypeRegx = /^$|^[a-zA-Z][a-zA-Z0-9\.,\-_]{1,}$/;

    if (!skypeRegx.test(skype)) {
        skype_error.innerText = "Incorrect";
        res = false;
    }

    return res;
}