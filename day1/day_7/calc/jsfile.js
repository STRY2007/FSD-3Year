const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const output = document.getElementById('num3');
const error = document.getElementById('error');

let result = 0;

const add = () => {
    if (num1.value === "" || num2.value === "") {
        error.textContent = "Please enter both numbers.";
        output.value = "";
        return;
    }
    result = parseInt(num1.value) + parseInt(num2.value);
    output.value = result;
    error.textContent = "";
};

const subtract = () => {
    if (num1.value === "" || num2.value === "") {
        error.textContent = "Please enter both numbers.";
        output.value = "";
        return;
    }
    result = parseInt(num1.value) - parseInt(num2.value);
    output.value = result;
    error.textContent = "";
};

const multiply = () => {
    if (num1.value === "" || num2.value === "") {
        error.textContent = "Please enter both numbers.";
        output.value = "";
        return;
    }
    result = parseInt(num1.value) * parseInt(num2.value);
    output.value = result;
    error.textContent = "";
};

const divide = () => {
    if (num1.value === "" || num2.value === "") {
        error.textContent = "Please enter both numbers.";
        output.value = "";
        return;
    }
    if (parseInt(num2.value) === 0) {
        error.textContent = "Cannot divide by zero.";
        output.value = "";
        return;
    }
    result = parseInt(num1.value) / parseInt(num2.value);
    output.value = result;
    error.textContent = "";
};

document.getElementById('add').onclick = add;
document.getElementById('subtract').onclick = subtract;
document.getElementById('multiply').onclick = multiply;
document.getElementById('divide').onclick = divide;