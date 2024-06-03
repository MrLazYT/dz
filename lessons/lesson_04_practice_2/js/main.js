class News {
    constructor(title, text, tags, date) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.date = date;
    }

    print() {
        let curDate = new Date();
        let dayString = "Сьогодні";

        if (Math.round(curDate - this.date) == 0 && (curDate - this.date) / 1000 / 60 / 60 < 24) {
            dayString = "Сьогодні"
        }
        else if ((curDate - this.date) / 1000 / 60 / 60 >= 24 && (curDate - this.date) / 1000 / 60 / 60 / 24 < 7 ) {
            dayString = `${Math.floor((curDate - this.date) / 1000 / 60 / 60 / 24)} днів тому`;
        }
        else {
            dayString = `${(this.date.getDate()) + 1}.${(this.date.getMonth()) + 1}.${(this.date.getFullYear()) + 1}`;
        }

        document.write(`
        <div>
            <h1>${this.title}</h1>
            <p>${dayString}</p>
            <p>${this.text}</p>
            <p>${this.tags}</p>
        </div>`)
    }
}

let news1 = new News("Hello world", "lorem ipsum", "#test #lorem #news", new Date());
news1.print();
let news2 = new News("Hello world", "lorem ipsum", "#test #lorem #news", new Date(2023, 11, 3));
news2.print();
let news3 = new News("Hello world", "lorem ipsum", "#test #lorem #news", new Date(2024, 4, 26));
news3.print();