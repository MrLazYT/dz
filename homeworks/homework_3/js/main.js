// Task 1
// let car = {
//     maker: "Ford",
//     model: "Mondeo",
//     year: 2008,
//     avr_speed: 100,

//     print: function() {
//         document.write(`<p>Maker: ${this.maker}</p><p>Mondeo: ${this.model}</p><p>Year: ${this.year}</p><p>Average Speed: ${this.avr_speed}</p>`)
//     },

//     calculate_time: function(distance) {
//         let time = (distance / this.avr_speed);
//         let breaks = Math.floor(time / 4);
//         let total = time + breaks;

//         document.write(`<p>Time = ${total}</p>`)
//     }
// }

// car.print();
// car.calculate_time(450);

// Task 2
// function Fraction(numerator, denominator) {
//     this.numerator = numerator,
//     this.denominator = denominator
// }

// Fraction.prototype.sum = function(fraction2) {
//     let numerator = this.numerator * fraction2.denominator + fraction2.numerator * this.denominator;
//     let denominator = this.denominator * fraction2.denominator;

//     return new Fraction(numerator, denominator);
// }

// Fraction.prototype.difference = function(fraction2) {
//     let numerator = this.numerator * fraction2.denominator - fraction2.numerator * this.denominator;
//         let denominator = this.denominator * fraction2.denominator;

//         return new Fraction(numerator, denominator);
// }

// Fraction.prototype.multiply = function(fraction2) {
//     let numerator = this.numerator * fraction2.numerator;
//         let denominator = this.denominator * fraction2.denominator;

//         return new Fraction(numerator, denominator);
// }

// Fraction.prototype.divide = function(fraction2)
// {
//     let numerator = this.numerator * fraction2.denominator;
//         let denominator = this.denominator * fraction2.numerator;

//         return new Fraction(numerator, denominator);
// }

// let fraction1 = new Fraction(2, 6);
// let fraction2 = new Fraction(3, 5);

// let fraction3 = fraction1.sum(fraction2);
// console.log(fraction3);

// fraction3 = fraction1.difference(fraction2);
// console.log(fraction3);

// fraction3 = fraction1.multiply(fraction2);
// console.log(fraction3);

// fraction3 = fraction1.divide(fraction2);
// console.log(fraction3);

// Task 3
// function Time(hours, minutes, seconds)
// {
//     this.hours = hours;
//     this.minutes = minutes;
//     this.seconds = seconds;
// }

// Time.prototype.print = function()
// {
//     let hours_string = this.get_time_string(this.hours) + this.hours;
//     let minutes_string = this.get_time_string(this.minutes) + this.minutes;
//     let seconds_string = this.get_time_string(this.seconds) + this.seconds;

//     console.log(hours_string + ":" + minutes_string + ":" + seconds_string);
// }

// Time.prototype.get_time_string = function(time_unit)
// {
//     let res = "";

//     if (time_unit < 10)
//     {
//         res += "0";
//     }

//     return res;
// }

// Time.prototype.change_by_hours = function(hours)
// {
//     let seconds_to_add = hours * 60 * 60;
//     let seconds = this.to_seconds(this.hours, this.minutes, this.seconds);
//     let res_seconds = seconds + seconds_to_add;
    
//     return this.to_time(res_seconds)
// }

// Time.prototype.change_by_minutes = function(minutes)
// {
//     let seconds_to_add = minutes * 60;
//     let seconds = this.to_seconds(this.hours, this.minutes, this.seconds);
//     let res_seconds = seconds + seconds_to_add;
    
//     return this.to_time(res_seconds)
// }

// Time.prototype.change_by_seconds = function(seconds_to_add)
// {
//     let seconds = this.to_seconds(this.hours, this.minutes, this.seconds);
//     let res_seconds = seconds + seconds_to_add;
    
//     return this.to_time(res_seconds)
// }

// Time.prototype.to_seconds = function(hours, minutes, seconds)
// {
//     return ((hours * 60) * 60) + (minutes * 60) + seconds;
// }

// Time.prototype.to_time = function(seconds)
// {
//     let new_seconds = seconds % 60;
//     minutes = ((seconds - new_seconds) / 60);
//     hours = ((minutes - (minutes % 60)) / 60);
//     minutes = (minutes % 60);

//     return new Time(hours, minutes, new_seconds);
// }

// let time = new Time(20, 30, 45);
// time.print();

// time = time.change_by_hours(-1);
// time.print();

// time = time.change_by_minutes(-45);
// time.print();

// time = time.change_by_seconds(10);
// time.print();