class NewsArray {
    constructor(news) {
        this.newsArray = [];
    }

    get() {
        return this.newsArray;
    }

    print() {
        for (const news of this.newsArray) {
            news.print();
        }
    }

    addNews(news) {
        this.newsArray.push(news);
    }

    removeNews(index) {
        this.newsArray.splice(index);
    }
}

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

news1 = new News("News 1", "lorem 1 2 3", "", new Date());
news2 = new News("News 2", "lorem 1 2 3", "", new Date(2022, 12, 23));
news3 = new News("News 3", "lorem 1 2 3", "", new Date(2021, 5, 13));
news4 = new News("News 4", "lorem 1 2 3", "", new Date(2023, 4, 26));
news5 = new News("News 5", "lorem 1 2 3", "", new Date(2023, 4, 2));

newsArray = new NewsArray();
newsArray.addNews(news1);
newsArray.addNews(news2);
newsArray.addNews(news3);
newsArray.addNews(news4);
newsArray.addNews(news5);

newsArray.print();