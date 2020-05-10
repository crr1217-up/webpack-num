import createNum from "./number.js";
import app from "./appendNum.js";

let lock = false;
const num = new createNum();
num.callback = function (n, isSu) {
	// console.log(n, isSu);
	app(n, isSu);
};
num.start();
window.onclick = () => { 
    if (lock) {
        num.start();
        lock = false;
    } else { 
        num.stop();
        lock = true;
    }
}