function validateForm(e) {
    e.preventDefault();

    clearErrors();

    const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value
    };

    if (validateData(data))
    {
        console.log(data);
    }
    else {  
        console.log("error");
    }
}

function clearErrors() {
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";
}

function validateData(data) {
    const emailRegex = /^[\w-\.\_]{3,}@[\w]{2,}\.[\w]{2,4}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

    if (data.email === "") {
        const emailError = document.getElementById("emailError");
        emailError.innerText = "Email can't be empty";

        return false;
    }

    if (!emailRegex.test(data.email)) {
        const emailError = document.getElementById("emailError");
        emailError.innerText = "Wrong email address";

        return false;
    }

    if (data.password.length == 0) {
        const passwordError = document.getElementById("passwordError");
        passwordError.innerText = "Password can't be empty";

        return false;
    }

    if (data.password.length < 6) {
        const passwordError = document.getElementById("passwordError");
        passwordError.innerText = "Password must contain minimum 6 symbols";

        return false;
    }

    if (!passwordRegex.test(data.password)) {
        const passwordError = document.getElementById("passwordError");
        passwordError.innerText = "Password must contain minimum 1 small letter, one 1 capital letter and 1 digit";

        return false;
    }

    if (data.password != data.confirmPassword) {
        const confirmPasswordError = document.getElementById("confirmPasswordError");
        confirmPasswordError.innerText = "Passwords must match";

        return false;
    }

    return true;
}