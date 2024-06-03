// Task 1
// function compare(a, b)
// {
//     let res = 0;

//     if (num1 < num2)
//     {
//         res = -1;
//     }
//     else if (num1 > num2)
//     {
//         res = 1;
//     }

//     return res;
// }

// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");
// let res = compare(num1, num2);

// alert(res);

// Task 2
// function factorial(a)
// {
//     let res = a;

//     if (a > 1)
//     {
//         res *= factorial(a - 1);
//     }

//     return res;
// }

// let num = +prompt("Enter number:");
// let res = factorial(num);

// alert(res);

// Task 3
// function combiner(a, b, c)
// {
//     return (a * 100) + (b * 10) + c;
// }

// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");
// let num3 = +prompt("Enter third number:");

// let res = combiner(num1, num2, num3);

// alert(res);

// Task 4
// function area(a, b = 0)
// {
//     let res;

//     if (b > 0)
//     {
//         res = a * b;
//     }
//     else
//     {
//         res = 4 * a;
//     }

//     return res;
// }

// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");
// let res;

// if (num2 != null)
// {
//     res = area(num1, num2);
// }
// else
// {
//     res = area(num1);
// }

// alert(res);

// Task 5
// function is_perfect(a)
// {
//     let res = false;
//     let div_sum = get_dividers_sum(a);

//     if (a == div_sum)
//     {
//         res = true;
//     }

//     return res;
// }

// function get_dividers_sum(a)
// {
//     let res = 0;

//     for (let i = 1; i < a; i++)
//     {
//         if (a % i == 0)
//         {
//             res += i;
//         }
//     }

//     return res;
// }

// let num = +prompt("Enter number:");

// let res = is_perfect(num);

// alert(res);

// Task 6
// function print_perfect_range(start, end)
// {
//     for (let i = start; i < end + 1; i++)
//     {
//         print_perfect_num(i);
//     }
// }

// function print_perfect_num(num)
// {
//     let isperfect = is_perfect(num);

//     if (isperfect)
//     {
//         alert(num);
//     }
// }

// function is_perfect(a)
// {
//     let res = false;
//     let div_sum = get_dividers_sum(a);

//     if (a == div_sum)
//     {
//         res = true;
//     }

//     return res;
// }

// function get_dividers_sum(a)
// {
//     let res = 0;

//     for (let i = 1; i < a; i++)
//     {
//         if (a % i == 0)
//         {
//             res += i;
//         }
//     }

//     return res;
// }

// let num1 = +prompt("Enter range start:");
// let num2 = +prompt("Enter range end:");

// print_perfect_range(num1, num2);

//Task 7
// function print_time(hours, minutes = 0, seconds = 0)
// {
//     let hoursString = get_time_string(hours) + hours;
//     let minutesString = get_time_string(minutes) + minutes;
//     let secondsString = get_time_string(seconds) + seconds;

//     alert(hoursString + ":" + minutesString + ":" + secondsString);
// }

// function get_time_string(time_unit)
// {
//     let res = "";

//     if (time_unit < 10 || time_unit == 0)
//     {
//         res += "0";
//     }

//     return res;
// }

// print_time(20, 4, 20);
// print_time(0, 0, 5);

// Task 8
// function to_seconds(hours, minutes, seconds)
// {
//     return ((hours * 60) * 60) + (minutes * 60) + seconds;
// }

// let hours = +prompt("Enter hours:");
// let minutes = +prompt("Enter minutes:");
// let seconds = +prompt("Enter seconds:");
// let res = to_seconds(hours, minutes, seconds);

// alert(res);

// Task 9
// function to_time(seconds)
// {
//     let new_seconds = seconds % 60;
//     minutes = ((seconds - new_seconds) / 60);
//     hours = ((minutes - (minutes % 60)) / 60);
//     minutes = (minutes % 60);

//     hours_string = get_time_string(hours) + hours;
//     minutes_string = get_time_string(minutes) + minutes;
//     seconds_string = get_time_string(new_seconds) + new_seconds;

//     return hours_string + ":" + minutes_string + ":" + seconds_string
// }

// function get_time_string(time_unit)
// {
//     let res = "";

//     if (time_unit < 10)
//     {
//         res += "0";
//     }

//     return res;
// }

// let seconds = +prompt("Enter seconds:");
// let res = to_time(seconds);

// alert(res);

// Task 10
// function get_difference(hours1, minutes1, seconds1, hours2, minutes2, seconds2)
// {
//     let new_seconds1 = to_seconds(hours1, minutes1, seconds1);
//     let new_seconds2 = to_seconds(hours2, minutes2, seconds2);

//     let seconds_diff = new_seconds1 - new_seconds2;

//     if (seconds_diff < 0)
//     {
//         seconds_diff = seconds_diff * -1;
//     }
    
//     return to_time(seconds_diff);
// }

// function to_seconds(hours, minutes, seconds)
// {
//     return ((hours * 60) * 60) + (minutes * 60) + seconds;
// }

// function to_time(seconds)
// {
//     let new_seconds = seconds % 60;
//     minutes = ((seconds - new_seconds) / 60);
//     hours = ((minutes - (minutes % 60)) / 60);
//     minutes = (minutes % 60);

//     hours_string = get_time_string(hours) + hours;
//     minutes_string = get_time_string(minutes) + minutes;
//     seconds_string = get_time_string(new_seconds) + new_seconds;

//     return hours_string + ":" + minutes_string + ":" + seconds_string
// }

// function get_time_string(time_unit)
// {
//     let res = "";

//     if (time_unit < 10)
//     {
//         res += "0";
//     }

//     return res;
// }

// let hours1 = +prompt("Hours 1:");
// let minutes1 = +prompt("Minutes 1:");
// let seconds1 = +prompt("Seconds 1:");

// let hours2 = +prompt("Hours 2:");
// let minutes2 = +prompt("Minutes 2:");
// let seconds2 = +prompt("Seconds 2:");

// let res = get_difference(hours1, minutes1, seconds1, hours2, minutes2, seconds2);

// alert(res);