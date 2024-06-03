let button = document.querySelector('button');

button.addEventListener('click', function() {
    let name = document.querySelector('.name');
    let comment = document.querySelector('.textarea_comment');
    let date = new Date();
    let stringDate = `${date.getDay()}.${date.getMonth() + 1}.${date.getFullYear()}`;

    let comment_div = document.createElement('div');
    comment_div.classList.add('comment');

    let name_p = document.createElement('p');
    name_p.classList.add('bold');
    name_p.innerText = name.value;
    
    let date_p = document.createElement('p');
    date_p.classList.add('date');
    date_p.innerText = stringDate;

    let comment_p = document.createElement('p');
    comment_p.innerText = comment.value;

    let hr = document.createElement('hr');

    comment_div.appendChild(name_p);
    comment_div.appendChild(date_p);
    comment_div.appendChild(comment_p);
    comment_div.appendChild(hr)

    let comments = document.querySelector('.comments');
    
    comments.appendChild(comment_div);

    name.value = "";
    comment.value = "";
});