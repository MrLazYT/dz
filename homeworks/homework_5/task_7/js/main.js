let tds = document.querySelectorAll("td");

for (let i = 0; tds.length; i++)
{
    tds[i].addEventListener("mouseover", function() {
        tds[i].style.backgroundColor = "#ffa984"
    });

    tds[i].addEventListener("mouseout", function() {
        tds[i].style.backgroundColor= "white";
    });
}