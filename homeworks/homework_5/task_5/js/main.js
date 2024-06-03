let remove_btns = document.querySelectorAll("button");

for (let i = 0; i < remove_btns.length; i++)
{
    remove_btns[i].addEventListener("click", function() {
        remove_news(remove_btns[i]);
    });
}

function remove_news(remove_btn)
{
    let news_title = remove_btn.parentNode;
    let news = news_title.parentNode;
    news.remove();
}