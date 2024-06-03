let buttons = document.querySelectorAll(".button");
let contents = document.querySelectorAll(".btn_content");

for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", function() {
        for (let j = 0; j < contents.length; j++)
        {
            if (contents[j] != contents[i])
            {
                contents[j].classList.add("hide");
                contents[j].classList.remove("show");
                buttons[j].style.backgroundColor = "#597ba0";
            }
        }

        contents[i].classList.toggle("hide");
        contents[i].classList.toggle("show");

        if (contents[i].classList.contains("show"))
        {
            buttons[i].style.backgroundColor = "#4873a2";
        }
        else if (contents[i].classList.contains("hide"))
        {
            buttons[i].style.backgroundColor = "#597ba0";
        }
    });

    buttons[i].addEventListener("selectstart", function(e) {
        e.preventDefault();
    });

    buttons[i].addEventListener("mouseover", function() {
        buttons[i].style.backgroundColor = "#4873a2";
    });

    buttons[i].addEventListener("mouseout", function() {
        if (!contents[i].classList.contains("show"))
        {
            buttons[i].style.backgroundColor = "#597ba0";
        }
    });
}