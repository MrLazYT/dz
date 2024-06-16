function submitHandler(e) {
    e.preventDefault();
    searchData();
}

function searchData() {
    let title = document.getElementById("title").value;
    let type = document.getElementById("type").value;

    const url = `http://www.omdbapi.com/?apikey=6742cabc&s=${title}&type=${type}`;

    let request = new XMLHttpRequest();
    request.open("GET", url);
    
    request.onload = () => {
        if (request.status === 200) {
            const items = JSON.parse(request.response);
            
            createElements(items.Search);
            
            console.log(items);
        }
        else {
            console.log("ff")
        }
    }
    
    request.send();

    return items;
}

function createElements(items) {
    let items_div = document.getElementById("items");

    for (let i = 0; i < items.length; i++) {
        console.log("dd");
        let div = document.createElement("div");
        div.classList.add("item");

        let img = document.createElement("img");
        img.src = items[i].Poster;

        let title = document.createElement("a");
        title.innerText = items[i].Title;
        
        let type = document.createElement("p");
        type.innerText = items[i].Type;
        
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(type);

        items_div.appendChild(div);
    }
}