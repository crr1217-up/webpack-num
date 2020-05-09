import isSu from "./isSu.js";

export default class CreateNum { 
    constructor(duration=500) { 
        this.duration = duration;
        this.num = 1;
        this.timer = null;
        this.callback = null;
    }
    start() { 
        if (this.timer) { 
            return;
        }
        this.timer = setInterval(() => { 
            // console.log(this.num);
            // console.log(this.callback);
            this.callback && this.callback(this.num, isSu(this.num));
            
            this.num++;    
        },this.duration)
    };
    stop() { 
        clearInterval(this.timer);
        this.timer = null;
    };
}