import { Verdandi } from '../Verdandi.js';

class Test{
    constructor(){
        var verdandi = new Verdandi();
        var currentTimestamp = this.getCurrentTimestamp();
        console.log(currentTimestamp);
        var formattedDate = this.getFormattedDate(1528319641000, {separator: ".", fullyear: true, format: "MY"});
        console.log(formattedDate);
        var verboseDate = this.getVerboseDate(1528319641000, {isDay: true, isYear: true, case: "fgre"});
        console.log(verboseDate);
    }
}

var test = new Test();