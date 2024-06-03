let button = document.querySelector('button');

function generateRnd()
{
    let rnd = Math.random() * 256;

    return rnd;
}

button.addEventListener('click', function() {
    let new_block = document.createElement('div');
    new_block.classList = 'color_block';
    new_block.style.width = '100px';
    new_block.style.height = '50px';
    new_block.style.backgroundColor = `rgb(${generateRnd()}, ${generateRnd()}, ${generateRnd()})`;

    new_block.addEventListener('click', function() {
        this.remove();
    });

    let colors_container = document.querySelector('.colors');
    
    colors_container.insertAdjacentElement('afterbegin', new_block);
});
