let container = document.getElementById('container');
console.log(container);
container.style.backgroundColor = 'lightblue';
container.style.padding = "10px";

let articles = document.getElementsByClassName('article');
console.log(articles);

for (let i = 0; i < articles.length; i++) {
    // articles[i].style.padding = '10px';
    // articles[i].style.borderBottom = "2px solid darkblue";
    // articles[i].style.boxShadow = "2px 0px 5px black";
    // articles[i].style.marginBottom = "10px";
    articles[i].classList.add('hide');
}

let h2 = document.getElementsByTagName('h2');

for (let i = 0; i < h2.length; i++)
{
    h2[i].style.color = "darkblue";
}

let p = document.querySelectorAll('.article p')

for (let i = 0; i < p.length; i++) {
    // p[i].style.backgroundColor = "white";
    // p[i].style.padding = "15px";
    // p[i].style.border = "groove 2px";

    p[i].className = "p";
    // p[i].classList.add('show');
    // p[i].classList.remove('hide');
    // console.log(p[i].classList.contains('show'))
    // p[i].classList.toggle('hide');
}

// h2[0].onclick = function() {
//     p[0].classList.toggle('hide');
// }

// h2[0].addElementListener('click', function() {
//     this.style.color = "green";
//     p[0].classList.toggle('hide');
// })

for (let i = 0; i < h2.length; i++) {
    h2[i].addEventListener('click', function() {
        this.style.color = "green";
        //articles[i].classList.toggle('show');
        articles[i].className += "test";
    })

    h2[i].addEventListener('mouseenter', function() {
        h2[i].style.cursor = "pointer";
    })
}