function formSubmitHandler(e) {
    e.preventDefault();

    clearErrorLabel();

    const data = {
        firstName: document.getElementById("firstName").value,
        lastame: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("passwond").value,
        confirmPassword: document.getElementById("confirmPassword").value,
    }

    if(validateData(data)) {
        const form = document.forms["signupForm"];
        form.reset(); // очищення полів форми
        //form.submit(); // підтвердження форми
        console.log(data);
    }
    else {
        console.log("Not valid");
    }
}

function showErrorLabel(text, size = "0.8em") {
    const labelError = document.getElementById("labelError");
    labelError.innerText = text;
    labelError.hidden = false;
    labelError.style.fontSize = size;
}

function clearErrorLabel() {
    const labelError = document.getElementById("labelError");
    labelError.innerText = "";
    labelError.hidden = true;
}

function validateData(data) {
    const regexEmail = /^[\w-.]{3,}@[\w-.]{2,}\.[\w-]{2,4}$/;
    const regexPassword = /^[\w]$/;

    if (data.email === "") {
        showErrorLabel("Пошта обов'язкова");
        return false;
    }

    if (regexEmail.test(data.email)) {
        showErrorLabel("Некоректний формат пошти");
        return false;
    }

    if (data.password.lenght < 6)
    {
        showErrorLabel("Мінімальна довжина паролю 6 символів");
        return false;
    }

    if (!regexPassword.test(data.password))
        {
            showErrorLabel("Пароль повинен містити мінімум цифру, велику і малу літери", "0.5em");
        return false;
        }

    if (data.password != data.confirmPassword)
    {
        showErrorLabel("Паролі повинні збігатися");
        return false;
    }
}

function testForm(e) {
    const form = docu.forms["searchForm"];
    form.reset();
    form.submit();

    return false;
}