const apiUrl = "https://swapi.dev/api/people";

//if (window.XMLHttpRequest) {
//     const request = new XMLHttpRequest();
// }
// else {
//     // for IE
//     const request = new ActiveXObject("Microsoft.XMLHTTP")
// }

function dataToHtml(data) {
    const list = document.getElementById("list");

    for (let i = 0; i < data.length; i++) {
        const li = document.createElement("li");
        li.innerText = `${data[i].name} Height: ${data[i].height}; Eye: ${data[i].eye}`
    }
}

getSwapiData = () => {
    const request = new XMLHttpRequest();

    request.open("GET", apiUrl);
    
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log("status", request.status); // http response status code

            const jsonResponse = request.response; // json
            //const response = request.responseXML; // xml

            const obj = JSON.parse(jsonResponse);

            console.log(obj);

            dataToHtml(obj.results);
        } else {
            console.log("request was not ok");
        }
    }

    request.send();
}

function showImgFilms(films) {
    const div = document.getElementById("films");

    for (let i = 0; i < films.length; i++) {
        const img = document.createElement("img");
        img.setAttribute("src", films[i].Poster);
        img.style["width"] = "10px";
    }
}

function searchFilms(title) {
    const omdbapi = `${title}`;
    const request = new XMLHttpRequest();

    request.open("GET", omdbapi);

    request.onload = () => {
        if (request.status === 200) {
            const films = JSON.parse(request.response);
            console.log(films);

            showImgFilms(films.Search);
        }

        request.send;
    }
}
