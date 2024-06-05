let login = document.getElementById("login");
let checkbox = document.getElementById("checkbox");
let button = document.getElementById("login_btn");

button.addEventListener("click", function() {
    let rememeberText = "Я НЕ запам'ятав тебе";
    let name = login.value;
    
    if (checkbox.checked == true) {
        rememeberText = "Я запам'ятав тебе";
    }

    alert(`Привіт, ${name}! ${rememeberText}!`);
});