let input = document.querySelector("input");
let numbers = document.querySelectorAll(".number");
let actions = document.querySelectorAll(".action");

for (let i = 0; i < numbers.length; i++)
{
    numbers[i].addEventListener("click", function()
    {
        let num1 = parseInt(input.value.split(' ')[0]);
        let operation = input.value.split(' ')[1];
        let num2 = parseInt(input.value.split(' ')[2]);

        if (
        num1 == 0 && !isNaN(operation) && isNaN(num2) ||
        num1 == 0 && isNaN(num2) ||
        num2 == 0)
        {
            if (input.value[input.value.length - 1] != " ")
            {
                input.value = input.value.substring(0, input.value.length - 1);
            }
            
            input.value += numbers[i].innerText;
        }
        else
        {
            input.value += numbers[i].innerText;
        }
    });
}

for (let i = 0; i < actions.length; i++)
{
    actions[i].addEventListener("click", function()
    {
        if (this.id != "clear" && this.id != "remove" && this.id != "equal")
        {
            if (
            !input.value.includes("+") &&
            !input.value.includes("-") &&
            !input.value.includes("*") &&
            !input.value.includes("/"))
            {
                input.value += ` ${actions[i].innerText} `;
            }
            else if (input.value.includes("+") || input.value.includes("-") || input.value.includes("*") || input.value.includes("/"))
            {
                input.value = `${makeOperation()} ${actions[i].innerText} `;
            }
        }
        else if (this.id == "clear")
        {
            input.value = "0";
        }
        else if (this.id == "remove")
        {
            if (input.value.length >= 3)
            {
                if (input.value[input.value.length - 1] != " ")
                {
                    input.value = input.value.substring(0, input.value.length - 1);
                }
                else
                {
                    input.value = input.value.substring(0, input.value.length - 3);
                }
            }
            else
            {
                input.value = "0";
            }
        }
        else if (this.id == "equal")
        {
            input.value = makeOperation();
        }
    });
}

function makeOperation()
{
    let items = input.value.split(' ');
    let operation = items[1];
    let num1 = parseInt(items[0]);
    let num2 = parseInt(items[2]);
    let result = 0;

    if (!isNaN(num1))
    {
        if (operation == "+" || operation == "-")
        {
            if (isNaN(num2))
            {
                num2 = 0;
            }
        }
        else
        {
            if (isNaN(num2))
            {
                num2 = 1;
            }
        }

        if (operation == "+")
        {
            result = num1 + num2;
        }
        else if (operation == "-")
        {
            result = num1 - num2;
        }
        else if (operation == "*")
        {
            result = num1 * num2;
        }
        else if (operation == "/")
        {
            result = num1 / num2;
        }
    }
    else if (operation = "-" && !isNaN(num2))
    {
        result = `-${num2}`;
    }

    return result;
}