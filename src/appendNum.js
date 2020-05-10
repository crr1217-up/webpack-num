import * as $ from "jquery";
import ranColor from "./colRandom.js";
import { getRandom } from "./colRandom.js";

export default function (n,isSu) { 
    const span = $("<span/>").text(n);
    if (isSu) { 
        const color = ranColor();
        span.css("color", color);
        cenColor(n,color)
    }
    $("#divContainer").append(span);
    createCenter(n, isSu);
}

function createCenter(n,isSu) { 
    $("#divCenter").text(n);

}
function cenColor(n,color) { 
    const div = $("<div>").addClass("center").css("color",color).text(n);
    $("body").append(div);
    getComputedStyle(div[0]).left;
    div.css({
			transform: `translate(${getRandom(-200, 200)}px,${getRandom(-200,200)}px)`,
			opacity: 0,
		});   
}
// console.log(ran);