import createNum from "./number.js";


const num = new createNum();
num.callback = function(n,isSu){ 
    console.log(n, isSu);
    
}
num.start();
// console.log(num.num);
setTimeout(() => { 
    num.stop();
},5000)




