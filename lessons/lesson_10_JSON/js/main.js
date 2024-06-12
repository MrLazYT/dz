const json = `{
    "login":"user",
    "password":"qwerty",
    "age":50,
    "address":
    [
        {"country":"Ukraine", "city":"Rivne"},
        {"country":"USA", "city":"Boston"},
        {"country":"Poland", "city":"Warsava"}
    ]
}`;

// JSON.parse(); -> json to object
// JSON.stringify(); -> object to json

const showHandler = () => {
    const logpass = document.getElementById("logpass");
    const age = document.getElementById("age");
    const addressDiv = document.getElementById("address");

    const userData = JSON.parse(json); // конвертуємо json в об'єкт

    logpass.innerText = `${userData.login} ${userData.password}`;
    age.innerText = `Age: ${userData.age}`;
    addressDiv.innerHTML = "";

    for (let i = 0; i < userData.address.length; i++) {
        const data = userData.address[i];
        const item = `Country: ${data.country}, City: ${data.city}`;

        const div = document.createElement("div");
        div.innerText = item;
        addressDiv.appendChild(div);
    }
};

class Computer {
    processor;
    ram;
    videocard;
    power;

    toJSON() {
        return {
            processor: this.processor,
            ram: this.ram,
            videocard: this.videocard === undefined ? "N/A" : this.videocard,
            power: this.power
        }
    }
}

const pc2 = new Computer();

const pc = {
    processor: "Intel",
    ram: "32GB",
    videocard: undefined,
    power: "400W",

    toJSON() {
        // метод сереалізації в json
        return {
            processor: this.processor,
            ram: this.ram,
            videocard: this.videocard === undefined ? "N/A" : this.videocard,
            power: this.power
        }
    }
};

const pcJson = JSON.stringify(pc); // з об'єкта у json
document.write(pcJson);