import { Verdandi } from '../Verdandi.js';

class Test{
    constructor(){
        var verdandi = new Verdandi();
        let verboseDate = verdandi.getVerboseDate(verdandi.getCurrentTimestamp(), {isDay: true, isYear: true});
        console.log("verboseDate", verboseDate);
    }
}

var test = new Test();