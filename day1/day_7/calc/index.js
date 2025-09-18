const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
console.log("num1:",num1.value);
console.log("num2:", num2.value);
let result=0;
const add=()=>{
    if(num1.value===""||num2.value==="")
    {
        error.innerText="Please enter both numbers";
        error.style.color="red";
    }
    result= parseInt(num1.value) + parseInt(num2.value);

}
const subtract=()=>{
    result= parseInt(num1.value) - parseInt(num2.value);

}
const divide=()=>{
    result= parseInt(num1.value) / parseInt(num2.value);

}
const multiply=()=>{
    result= parseInt(num1.value) * parseInt(num2.value);

}