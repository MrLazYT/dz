// let numb = new Array(5, 3, 4, 5, "Test", true, {name: "Olena", age:12}, [5, 8, 5, 4, 6]);

// console.log(numb);

let colors = ["red", "blue", "orange"];

//console.log(colors.at(-1));
//colors.length;

for (const iterator of colors) {
    //document.write(`<p style = "margin-left:50px; font-size:2em; background-color:${iterator}; padding:10px">${iterator}</p>`);
    document.write(`<p style = "margin-left:50px; font-size:2em;>${iterator}</p>`);
}

document.write(`<p style = "text-align:center; font-size:2em;>Push</p>`);
colors.push("lime", "gold");

for (const iterator of colors) {
    document.write(`<p style = "margin-left:50px; font-size:2em;>${iterator}</p>`);
}

document.write(`<p style = "text-align:center; font-size:2em;>Unshift</p>`);
colors.push("green", "violet");

for (const iterator of colors) {
    document.write(`<p style = "margin-left:50px; font-size:2em;>${iterator}</p>`);
}

document.write(`<p style = "text-align:center; font-size:2em;>Pop</p>`);
colors.pop();

for (const iterator of colors) {
    document.write(`<p style = "margin-left:50px; font-size:2em;>${iterator}</p>`);
}

document.write(`<p style = "text-align:center; font-size:2em;>shift</p>`);
colors.shift();

for (const iterator of colors) {
    document.write(`<p style = "margin-left:50px; font-size:2em;>${iterator}</p>`);
}

document.write(`<p style = "text-align:center; font-size:2em;>Slice</p>`);
let slice = colors.slice(0, 3);

for (const iterator of slice) {
    document.write(`<p style = "margin-left:50px; font-size:2em;>${iterator}</p>`);
}

document.write(`<p style = "text-align:center; font-size:2em;>Splice</p>`);
let splice = colors.splice(1, 3, "black", "blue", "yellow");

for (const iterator of splice) {
    document.write(`<p style = "margin-left:50px; font-size:2em;>${iterator}</p>`);
}

document.write(`<p style = "text-align:center; font-size:2em;>Splice</p>`);
splice = colors.splice(1, 0, "magenta");

for (const iterator of splice) {
    document.write(`<p style = "margin-left:50px; font-size:2em;>${iterator}</p>`);
}

let numb = [1, 2, 5, 4, 7, 8, 5, 4, 6];

// document.write(`<p style = "text-align:center; font-size:2em;>Concat</p>`);
// let res = colors.concat(true, numb);

// for (const iterator of res) {
//     document.write(`<p style = "margin-left:50px; font-size:2em;>${iterator}</p>`);
// }

// res = [
//     ...colors,
//     {name: "test"},
//     ...numb
// ]
// res = [
//     ...colors,
//     {name: "test"},
//     ...numb
// ]

// console.log(res);

// console.log(colors.indexOf("blue"));
// console.log(colors.lastIndexOf("blue"));
// console.log(colors.find((x) => x.length == 4));

console.log(colors.join("<br>"));

let str = "Lorem ipsum";
// str += "!!!!"

let res = str + " !!!!!";

console.log(res[0]);
res[0] = 'HHH';
console.log(typeof(res[0]));

console.log(res.toLowerCase());
console.log(res.toUpperCase());
console.log(res.charAt(2));
console.log(res.charCodeAt(2));

console.log(res.split(' '));
console.log(res.substring(0, 3));

let text = " text ";
console.log(text.trim());
console.log(text.trim().length);