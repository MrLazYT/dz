let country_selector = document.getElementById("country");
let city_selector = document.getElementById("city");

let old_country_selection = "none";

country_selector.addEventListener("click", function() {
    if (old_country_selection != this.value) {
        while (city_selector.lastChild) {
            city_selector.removeChild(city_selector.lastChild);
        }
    }

    old_country_selection = country_selector.value;
});

city_selector.addEventListener("click", function() {
    let cities;

    if (country_selector.value == "ukraine" && this.length == 0) {
        cities = ["", "Kyiv", "Lviv", "Odesa", "Rivne", "Zapoizhzhia", "Uzhhorod"];

        for (let i = 0; i < cities.length; i++) {
            let option = document.createElement("option");
            option.value = cities[i].toLowerCase();
            option.innerText = cities[i];
            
            this.appendChild(option);
        }
    } else if (country_selector.value == "poland" && this.length == 0) {
        cities = ["", "Warsaw", "Krakow", "Szczecin", "Zamosc", "Lublin", "Opole"];

        for (let i = 0; i < cities.length; i++) {
            let option = document.createElement("option");
            option.value = cities[i].toLowerCase();
            option.innerText = cities[i];
            
            this.appendChild(option);
        }
    } else if (country_selector.value == "germany" && this.length == 0) {
        cities = ["", "Berlin", "Leipzig", "Dresden", "Rehgensburg", "Munchen"];

        for (let i = 0; i < cities.length; i++) {
            let option = document.createElement("option");
            option.value = cities[i].toLowerCase();
            option.innerText = cities[i];
            
            this.appendChild(option);
        }
    } else if (country_selector.value == "france" && this.length == 0) {
        cities = ["", "Paris", "Caen", "Rouen", "Lyon"];

        for (let i = 0; i < cities.length; i++) {
            let option = document.createElement("option");
            option.value = cities[i].toLowerCase();
            option.innerText = cities[i];
            
            this.appendChild(option);
        }
    } else if (country_selector.value == "uk" && this.length == 0) {
        cities = ["", "London", "York", "Cardiff", "Cambridge", "Edinburgh", "Manchester"];

        for (let i = 0; i < cities.length; i++) {
            let option = document.createElement("option");
            option.value = cities[i].toLowerCase();
            option.innerText = cities[i];
            
            this.appendChild(option);
        }
    }
});

let button = document.querySelector("#button");

button.addEventListener("click", function() {
    let data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        birthday: document.getElementById("birthday").value,
        gender: "",
        country: "",
        city: "",
        skills: []
    }

    let gender = "None";
    let male = document.getElementById("male");
    let female = document.getElementById("female");

    let country_select = document.getElementById("country");
    let country = country_select.options[country_select.selectedIndex].text;
    data.country = country;

    let city_select = document.getElementById("city");
    let city = city_select.options[city_select.selectedIndex].text;
    data.city = city;

    if (male.checked) {
        gender = "Male";
    } else if (female.checked) {
        gender = "Female"
    }

    data.gender = gender;

    let skills = document.getElementsByName("skill");
    let skills_str = document.getElementsByName("skill_str");

    for (let i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            data.skills.push(skills_str[i].innerText);
        }
    }

    console.log(data);

    let table_inputs = document.getElementsByClassName("value");
    let i = 0;

    for (let d in data) {
        table_inputs[i].innerText = data[d];
        i++;
    }
});