document.querySelector('.container').addEventListener('click', (e) => {
    if (e.target.tagName == 'LI')
    {
        e.target.classList.add('styleLi');
    }

    if (e.target.classList.contains('testP'))
    {
        e.target.classList.add('styleP');
    }
});