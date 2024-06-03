let like_count = document.querySelector(".like_count");
let like_btn = document.querySelector("button");

like_btn.addEventListener("click", function() {
    let current_likes = parseInt(like_count.innerText);
    
    like_count.innerText = current_likes + 1;
});