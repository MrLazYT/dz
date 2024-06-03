let getRnd = () => Math.floor(Math.random() * 256);
let getRGB = () => `rgb(${getRnd()}, ${getRnd()}, ${getRnd()})`;

function getElement(color = false)
{
    let div = document.createElement('div');
    div.style.width = div.style.height = '150px';
    let rgb = !color ? getRGB() : color;

    div.style.backgroundColor = rgb;
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';

    let span = document.createElement('span');
    span.textContent = rgb;
    div.append(span);

    //document.querySelector('.root').append(div);
    document.querySelector('.root').insertAdjacentElement('afterbegin', div);
}

document.querySelectorAll('button')[0].addEventListener('click', () => {
    getElement();
});
document.querySelectorAll('button')[1].addEventListener('click', function() {
    this.remove();
    let color = document.createElement('input');
    color.setAttribute('type', 'color');
    
    document.querySelector('p').append(color);

    document.querySelector('input').addEventListener('change', () => {
        getElement(color.value);
    });

});