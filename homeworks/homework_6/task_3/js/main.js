let colors = document.querySelectorAll('.color');

for (let i = 0; i < colors.length; i++)
{
    colors[i].addEventListener('click', function() {
        let p = document.querySelector('p');

        p.style.color = window.getComputedStyle(colors[i]).backgroundColor;
    });
}