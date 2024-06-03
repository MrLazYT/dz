let p = document.querySelector("p");

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

p.addEventListener("selectstart", function(e) {
    e.preventDefault();
})