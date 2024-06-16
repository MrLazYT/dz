const newsUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fed343d260de4e4795aeb4314c306d4c"

// then catch

// Poganyj varijant. Buv dlja opysu roboty
// const promise = fetch(newsUrl);
// promise.then((response) => {
//     console.log(response);

    // const text = response.text(); // string

    // text.then((text) => {
    //     console.log(JSON.parse(text));
    // });

    // const promiseJson = response.json();

    // promiseJson.then((data) => {
    //     // tut pracjujemo z danymy
    //     console.log(data);
    // })
// });

// Standarnyj varijant čerez fetch-then-catch

// fetch(newsUrl)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("response was not ok");
//         }

//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("Response error: ", error);
//     });

// drugyj varijant čerez async await

async function fetchRequestFunc() {

}

const fetchRequestLambda = async() => {
    try {
        const response = await fetch(newsUrl);

        if (!response.ok) {
            throw new Error("response was not ok");
        }

        const data = await response.json();

        showHtml(data);
        
        console.log(data);
    } catch (error) {
        console.log("Response error: ", error);
    }
}

const showHtml = (data) => {
    for (let i = 0; i < data.articles.length; i++) {
        const item = data.articles[i];

        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const imgDiv = document.createElement("div")

        const img = document.createElement("img");
        img.setAttribute("class", "card-img");
        img.setAttribute("src", item.urlToImage);
        imgDiv.appendChild(img);
        card.appendChild(imgDiv);

        const title = document.createElement("div");
        title.setAttribute("class", "title");
        title.innerText = item.title;
        card.appendChild(title);

        const date = document.createElement("div");
        date.setAttribute("class", "date");
        date.innerText = item.publishedAt;
        card.appendChild(date);

        const description = document.createElement("div");
        description.setAttribute("class", "description");
        description.innerText = item.description;
        card.appendChild(description)

        const detail = document.createElement("div");
        detail.setAttribute("class", "detail");
        
        const link = document.createElement("a");
        link.setAttribute("href", item.url);
        link.innerText = "Details";
        detail.appendChild(link);

        card.appendChild(detail);

        const news = document.getElementById("news");
        news.appendChild(card);
    }
}

fetchRequestLambda();

// pryklad POST

const body = {
    login: "login",
    password: "qwerty"
}

fetch(newsUrl, {
    method: "POST",
    // headers, jaki vymagaje api
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(body), // dani, jaki jdut' na api
})
    .then((response) => {
        // obrobka vidpovidi
    })
    .catch((error) => {
        console.log(error);
    });