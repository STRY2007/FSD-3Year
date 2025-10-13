const printMessage=(msg)=>
{
    crossOriginIsolated.log(msg);
}
const waitFun = (msg,time)=>{
    setTimeout(() => {
        printMessage(msg);
    }, time);

}
const