let html_btn = document.querySelectorAll('.button')[0];
let css_btn = document.querySelectorAll('.button')[1];
let js_btn = document.querySelectorAll('.button')[2];

html_btn.addEventListener('click', function(e) {
    let text1 = "HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.";
    let text2 = "Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.";

    add_info(text1, text2);
});

html_btn.addEventListener("mouseenter", function(e) {
    this.style.cursor = "pointer";
});

html_btn.addEventListener("selectstart", function(e) {
    e.preventDefault();
});

css_btn.addEventListener('click', function(e) {
    let text1 = "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.";
    let text2 = "CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts. This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.";

    add_info(text1, text2);
});

css_btn.addEventListener("mouseenter", function(e) {
    this.style.cursor = "pointer";
});

css_btn.addEventListener("selectstart", function(e) {
    e.preventDefault();
});

js_btn.addEventListener('click', function(e) {
    let text1 = "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.";
    let text2 = "Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.";

    add_info(text1, text2);
});

js_btn.addEventListener("mouseenter", function(e) {
    this.style.cursor = "pointer";
});

js_btn.addEventListener("selectstart", function(e) {
    e.preventDefault();
});


function add_info(text1, text2)
{
    info = document.querySelector('.info');
    info.textContent = "";

    let p = document.createElement("p");
    let br = document.createElement("br");
    let p2 = document.createElement("p");

    p.innerText = text1;
    p2.innerText = text2;

    info.appendChild(p);
    info.appendChild(br);
    info.appendChild(p2);
}