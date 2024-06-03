// Task 1
// class Circle
// {
//     constructor(radius)
//     {
//         this.radius = radius;
//     }

//     getRadius()
//     {
//         return this.radius;
//     }

//     setRadius(radius)
//     {
//         this.radius = radius;
//     }

//     getDiameter()
//     {
//         return this.radius * 2;
//     }

//     getArea()
//     {
//         return Math.PI * Math.pow(this.radius, 2)
//     }

//     getLength()
//     {
//         return 2 * Math.PI * this.radius;
//     }
// }

// Task 2
// class HtmlElement
// {
//     constructor(tagName, isAutoClose = false, content = "", attributes = [], styles = [], elements = [])
//     {
//         this.tagName = tagName;
//         this.isAutoClose = isAutoClose;
//         this.content = content;
//         this.attributes = attributes;
//         this.styles = styles;
//         this.elements = elements;
//     }

//     addAttribute(attribute)
//     {
//         this.attributes.push(attribute);
//     }

//     addStyle(style)
//     {
//         this.styles.push(style);
//     }

//     addElement(element)
//     {
//         this.elements.push(element);
//     }

//     addElementToStart(element)
//     {
//         this.elements.unshift(element);
//     }

//     getHtml()
//     {
//         let html = "";

//         html += `<${this.tagName} `;

//         for (let i = 0; i < this.attributes.length; i++)
//         {
//             let attribute_string = this.attributes[i].get();
//             html += attribute_string + " ";
//         }

//         html += ' style="';

//         for (let i = 0; i < this.styles.length; i++)
//         {
//             let style_string = this.styles[i].get();
//             html += style_string + "; ";
//         }

//         html += `">${this.content}\n`;

//         if (this.elements.length > 0)
//         {
//             for (let i = 0; i < this.elements.length; i++)
//             {
//                 html += this.elements[i].getHtml();
//             }
//         }

//         if (!this.isAutoClose)
//         {
//             html += `</${this.tagName}>`;
//         }

//         return html;
//     }

//     print()
//     {
//         let html = this.getHtml();

//         document.write(html);
//     }
// }

// class HtmlAttribute
// {
//     constructor(name, value)
//     {
//         this.name = name;
//         this.value = value;
//     }

//     get()
//     {
//         return `${this.name} = "${this.value}"`;
//     }
// }

// class HtmlStyle
// {
//     constructor(name, value)
//     {
//         this.name = name;
//         this.value = value;
//     }

//     get()
//     {
//         return `${this.name}: ${this.value}`
//     }
// }

// let h3_div1 = new HtmlElement("h3", false, content = "What is Lorem Ipsum?");

// let img_div1_attributes = [
//     new HtmlAttribute("src", "lipsum.png"),
//     new HtmlAttribute("alt", "Lorem Ipsum")
// ]
// let img_div1_styles = [
//     new HtmlStyle("width", "100%")
// ]
// let img_div1 = new HtmlElement("img", true, content = "", attributes = img_div1_attributes, styles = img_div1_styles)

// let a_p_div1_attributes = 
// [
//     new HtmlAttribute('href', "https://www.lipsum.com/"),
//     new HtmlAttribute('target', "_blank"),
// ];

// let a_p_div1 = new HtmlElement("a", false, content = "More...", attributes = a_p_div1_attributes);

// let p_elements = [
//     a_p_div1,
// ];

// let p_div1_style = new HtmlStyle("text-align", "justify");
// let p_div1 = new HtmlElement(
//     "p",
//     false,
//     content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     attributes = [],
//     styles = [p_div1_style],
//     elements = p_elements
//     );

// let div1_styles = [
//     new HtmlStyle("width", "300px"),
//     new HtmlStyle("margin", "10px")
// ]

// let div1_elements = [
//     h3_div1,
//     img_div1,
//     p_div1,
// ]

// let div1 = new HtmlElement("div", false, content = "", attributes = [], styles = div1_styles, elements = div1_elements);

// let top_div_attributes = [
//     new HtmlAttribute("id", "wrapper"),
// ];

// let top_div_styles = [
//     new HtmlStyle("display", "flex")
// ];

// let top_div_elements = [
//     div1,
//     div1,
// ];

// let top_div = new HtmlElement("div", false, content = "", attributes = top_div_attributes, styles = top_div_styles, elements = top_div_elements);

// top_div.print();

// Task 3
// class CssClass
// {
//     constructor(name, styles = [])
//     {
//         this.name = name;
//         this.styles = styles;
//     }

//     addStyle(style)
//     {
//         this.styles.push(style);
//     }

//     removeStyle(index)
//     {
//         this.styles.splice(index);
//     }

//     getCss()
//     {
//         let css = `${this.name} {`;

//         for (let i = 0; i < this.styles.length; i++)
//         {
//             let style_string = this.styles[i].get();

//             css += style_string;
//         }

//         css += "}\n\n";
//     }
// }

// class CssStyle
// {
//     constructor(name, value)
//     {
//         this.name = name;
//         this.value = value;
//     }

//     get()
//     {
//         return `${this.name}: ${this.value};\n`;
//     }
// }

// Task 4
// class HtmlBlock
// {
//     constructor(cssStyles = [], htmlElement = "")
//     {
//         this.cssStyles = cssStyles;
//         this.htmlElement = htmlElement;
//     }

//     getCode()
//     {
//         let css = "<style>";

//         for (let i = 0; i < this.cssStyles.length; i++)
//         {
//             css += this.cssStyles[i].getCss();
//         }

//         css += "</style>\n\n";

//         let html = this.htmlElement.getHtml();

//         let code = css + html;

//         return code;
//     }

//     print()
//     {
//         document.write(this.getCode());
//     }
// }

// class CssClass
// {
//     constructor(name, styles = [])
//     {
//         this.name = name;
//         this.styles = styles;
//     }

//     addStyle(style)
//     {
//         this.styles.push(style);
//     }

//     removeStyle(index)
//     {
//         this.styles.splice(index);
//     }

//     getCss()
//     {
//         let css = `${this.name} {\n`;

//         for (let i = 0; i < this.styles.length; i++)
//         {
//             let style_string = "    " + this.styles[i].get();

//             css += style_string;
//         }

//         css += "}\n\n";

//         return css;
//     }
// }

// class CssStyle
// {
//     constructor(name, value)
//     {
//         this.name = name;
//         this.value = value;
//     }

//     get()
//     {
//         return `${this.name}: ${this.value};\n`;
//     }
// }

// class HtmlElement
// {
//     constructor(tagName, isAutoClose = false, content = "", attributes = [], styles = [], elements = [])
//     {
//         this.tagName = tagName;
//         this.isAutoClose = isAutoClose;
//         this.content = content;
//         this.attributes = attributes;
//         this.styles = styles;
//         this.elements = elements;
//     }

//     addAttribute(attribute)
//     {
//         this.attributes.push(attribute);
//     }

//     addStyle(style)
//     {
//         this.styles.push(style);
//     }

//     addElement(element)
//     {
//         this.elements.push(element);
//     }

//     addElementToStart(element)
//     {
//         this.elements.unshift(element);
//     }

//     getHtml()
//     {
//         let html = "";

//         html += `<${this.tagName} `;

//         for (let i = 0; i < this.attributes.length; i++)
//         {
//             let attribute_string = this.attributes[i].get();
//             html += attribute_string + " ";
//         }

//         html += ' style="';

//         for (let i = 0; i < this.styles.length; i++)
//         {
//             let style_string = this.styles[i].get();
//             html += style_string + "; ";
//         }

//         html += `">${this.content}\n`;

//         if (this.elements.length > 0)
//         {
//             for (let i = 0; i < this.elements.length; i++)
//             {
//                 html += this.elements[i].getHtml();
//             }
//         }

//         if (!this.isAutoClose)
//         {
//             html += `</${this.tagName}>`;
//         }

//         return html;
//     }

//     print()
//     {
//         let html = this.getHtml();

//         document.write(html);
//     }
// }

// class HtmlAttribute
// {
//     constructor(name, value)
//     {
//         this.name = name;
//         this.value = value;
//     }

//     get()
//     {
//         return `${this.name} = "${this.value}"`;
//     }
// }

// class HtmlStyle
// {
//     constructor(name, value)
//     {
//         this.name = name;
//         this.value = value;
//     }

//     get()
//     {
//         return `${this.name}: ${this.value}`
//     }
// }

// let cssClass1 = new CssClass(".wrap");
// cssClass1.addStyle(new CssStyle("display", "flex"));

// let cssClass2 = new CssClass(".block");
// cssClass2.addStyle(new CssStyle("width", "300px"));
// cssClass2.addStyle(new CssStyle("margin", "10px"));

// let cssClass3 = new CssClass(".img");
// cssClass3.addStyle(new CssStyle("width", "100%"));

// let cssClass4 = new CssClass(".text");
// cssClass4.addStyle(new CssStyle("text-align", "justify"));

// let css_styles = [cssClass1, cssClass2, cssClass3, cssClass4];

// let h3_div1 = new HtmlElement("h3", false, content = "What is Lorem Ipsum?");

// let img_div1_attributes = [
//     new HtmlAttribute("class", "img"),
//     new HtmlAttribute("src", "lipsum.png"),
//     new HtmlAttribute("alt", "Lorem Ipsum")
// ];

// let img_div1 = new HtmlElement("img", true, content = "", attributes = img_div1_attributes, styles = [])

// let a_p_div1_attributes = 
// [
//     new HtmlAttribute('href', "https://www.lipsum.com/"),
//     new HtmlAttribute('target', "_blank"),
// ];

// let a_p_div1 = new HtmlElement("a", false, content = "More...", attributes = a_p_div1_attributes);

// let p_elements = [
//     a_p_div1,
// ];

// p_div1_attributes = [
//     new HtmlAttribute("class", "text")
// ];

// let p_div1 = new HtmlElement(
//     "p",
//     false,
//     content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     attributes = p_div1_attributes,
//     styles = [],
//     elements = p_elements
//     );

// let div1_attributes = [
//     new HtmlAttribute("class", "block")
// ];

// let div1_elements = [
//     h3_div1,
//     img_div1,
//     p_div1,
// ];

// let div1 = new HtmlElement("div", false, content = "", attributes = div1_attributes, styles = [], elements = div1_elements);

// let top_div_attributes = [
//     new HtmlAttribute("id", "wrapper"),
//     new HtmlAttribute("class", "wrap"),
// ];

// let top_div_elements = [
//     div1,
//     div1,
// ];

// let top_div = new HtmlElement("div", false, content = "", attributes = top_div_attributes, styles = [], elements = top_div_elements);

// let html_block = new HtmlBlock(css_styles, top_div);
// html_block.print();