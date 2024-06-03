const form = document.forms["signinForm"];
console.log(form);

function formSubmit(e)
{
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pasword = document.getElementById("password").value;

    const cred = {
        email: email,
        password: password
    };

    console.log(cred);
}

const button = document.getElementById("add_btn");

function addPhone()
{
    const div = document.getElementById("div");

    const phone = document.getElementById("phone");
    const label = document.getElementById("label");
    const input = document.getElementById("input");
    label.innerText = "";
}

function changeColor()
{
    const color = document.getElementById("colorInput").value;
    const form = document.forms["signinForm"];

    form.style["backgroundColor"] = color;
}