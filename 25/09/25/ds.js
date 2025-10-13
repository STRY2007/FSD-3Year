// console.log("hello world")
// let  a;
// console.log(a);
// a=12;
var a=40;
if(a>20)
{
    var a=90;
    console.log("a is inside if"+a);
}
else
{
    console.log("inside else");

}
console.log("a is outside="+a);

let a=40;
if(a>20)
{
 let a=90;
    console.log("a is inside if"+a);
}
else
{
    console.log("inside else");

}
console.log("a is outside="+a);//a is inside if90
                               //a is outside=40
function greetings()
{
    console.log("ds");
    
} 
greetings();
function greetings(msg)
{
    return "abes "+msg;
    console.log("ended");
}
const dt=greetings("amit");
console.log( dt);//abes amit
const data=function greetings(msg)
{
    return "hi ..welcome"+msg;
}
const msg=data(" Tiamo");
console.log(msg);//hi ..welcome Tiamo
const data=(myname)=>{
    console.log("hii "+myname+" welcome to fsd");
}
data ("Rahul");//hii Rahul welcome to fsd
const data =msg=>msg;
console.log(data("hii..."));//hii...
(function(){
    console.log("welcome to fsd")
})();//welcome to fsd
welcome to fsd
//hey...welcome to Abes
function msg()
{
    console.log("welcome to Abes");
}
setTimeout(()=>{
    console.log("heyy ..using fsd");
},1000);
//heyy ..using fsd
function msg()
{
    console.log("welcome to Abes");
}
setInterval(msg,1000);
//welcome to Abes (appear after some interval on an infinite loop )
function selectLanguage(lang) {
    let data;
    if (lang === "java") {
        function javaCompiler() {
            return "java";
        }
        data = javaCompiler;
    } else if (lang === "C") {
        function CCompiler() {
            return "C";
        }
        data = CCompiler;
    } else {
        return "no compiler";
    }
    return data;
}

// Example usage:
const compiler = selectLanguage("c");
if (typeof compiler === "function") {
    console.log(compiler()); // Output: java
} else {
    console.log(compiler); // Output: no compiler
}