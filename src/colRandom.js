
const colors = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];
function getRandom(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}
export default function () { 
    return colors[getRandom(0, 5)];
}