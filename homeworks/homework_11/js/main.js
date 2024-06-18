let curPage = 1;

function submitHandler(e) {
    e.preventDefault();
    clearItems();
    searchData();
}

function clearItems() {
    let items_div = document.getElementById("items");
    items_div.innerText = "";
}

function searchData() {
    let title = document.getElementById("title").value;
    let type = document.getElementById("type").value;
    const url = `http://www.omdbapi.com/?apikey=6742cabc&s=${title}&type=${type}&page=${curPage}`;

    let request = new XMLHttpRequest();
    
    request.open("GET", url);
    
    request.onload = () => {
        if (request.status === 200) {
            let not_found_text = document.getElementById("not_found");

            try {
                const items = JSON.parse(request.response);
                
                not_found_text.classList.add("hidden");

                console.log(items);

                createElements(items.Search);
                createPagBtns(items.totalResults);
            }
            catch {
                not_found_text.classList.remove("hidden");
            }
        }
    }
    
    request.send();

    return items;
}

function createElements(items) {
    let items_div = document.getElementById("items");

    for (let i = 0; i < items.length; i++) {
        let div = document.createElement("div");
        div.classList.add("item");

        let img = document.createElement("img");
        img.src = items[i].Poster;

        let title = document.createElement("a");
        title.innerText = items[i].Title;
        
        let type = document.createElement("p");
        type.innerText = items[i].Type;

        let details_btn = document.createElement("button");
        details_btn.innerText = "Details";
        details_btn.addEventListener("click", function() {
            document.cookie = `poster=${items[i].Poster}; path=/`;
            document.cookie = `title=${items[i].Title}; path=/`;
            document.cookie = `year=${items[i].Year}; path=/`;
            document.cookie = `type=${items[i].Type}; path=/`;

            document.location.href = "/info";
        })
        
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(type);
        div.appendChild(details_btn);

        items_div.appendChild(div);
    }
}

function createPagBtns(total) {
    let buttons = document.querySelector(".buttons");
    buttons.innerText = "";
    let btn_count = Math.ceil(total / 10);

    let prev_btn = document.createElement("button");
    prev_btn.classList.add("pag_btn");
    prev_btn.innerText = "<";
    
    prev_btn.addEventListener("click", function() {
        if (curPage > 1) {
            curPage--;
            clearItems();
            searchData();
        }
    });

    buttons.appendChild(prev_btn);

    for (let i = 0; i < btn_count; i++) {
        let btn = document.createElement("button");
        btn.innerText = i + 1;
        btn.classList.add("pag_btn");
        
        btn.addEventListener("click", function() {
            if (curPage != this.innerText) {
                curPage = this.innerText;
                clearItems();
                searchData();
            }
        });

        buttons.appendChild(btn);
    }

    let next_btn = document.createElement("button");
    next_btn.classList.add("pag_btn");
    next_btn.innerText = ">";

    next_btn.addEventListener("click", function() {
        if (curPage < btn_count) {
            curPage++;
            clearItems();
            searchData();
        }
    });

    buttons.appendChild(next_btn);
}