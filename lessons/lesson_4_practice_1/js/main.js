class PrintMachine {
    constructor(font_size, color, font_family) {
        this.font_size = font_size;
        this.color = color;
        this.font_family = font_family;
    }

    print(text) {
        document.write(`<p style = "font-size:${this.font_size}; font-family:${this.font_family}; color:${this.color};">${text}</p>`)
    }
}

let printer = new PrintMachine("60px", "lightblue", "Arial");
printer.print("Hello, world!");