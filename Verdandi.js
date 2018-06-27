/**
 * Author : Alexandre Grisey
 * As this script has a viking's godess name
 * If you use it, you have to pray Thor at least one time
 * If you do not, something bad could happen
 * (I don't know what, the manual is not very clear)
 */
'use strict';

/**
 * TODO :
 * Add tests for params and return error log if issue
 * implement functions
 */

 /**
  * FYI, in Norse mythology, Verdandi is one of the norns. Her name means "happening" or "present", this is why I chose this name.
  * https: //en.wikipedia.org/wiki/verdandi
  */
export class Verdandi {

  constructor(lang = "fr", options = {} ) {
    this.DAYS = [];
    this.MONTHS = [];
    this.DEFAULT_DATE_SEPARATOR = options.dateSeparator != null ? options.dateSeparator : "/";
    this.DEFAULT_HOUR_SEPARATOR = options.hourSeparator != null ? options.hourSeparator : ":";
    this.getDaysLabelsFromLang(lang);
    this.getMonthsLabelsFromLang(lang);
   }

  /**
   * Return the current timestamp
   * Easy but useful when you're not used to JS date methods
   */
   getCurrentTimestamp(){
    return new Date().getTime();
   }

   /**
    * get days labels from language
    * To implement
    * @param {*} lang 
    */
   getDaysLabelsFromLang(lang){
    this.DAYS = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
   }

   /**
    * get days labels from language
    * To implement
    * @param {*} lang 
    */
   getMonthsLabelsFromLang(lang) {
     this.MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
   }


  /**
   * Check if the given param is in timestamp format
   * If not, return the current timestamp
   * @param {*} timestamp 
   */
  checkTimestamp(timestamp){
    if ((new Date(timestamp)).getTime() > 0){
      return timestamp;
    }
    else{
      console.error("Timestamp format not valid. Using current timestamp instead");
      return this.getCurrentTimestamp();
    }
  }

  /**
   * Transform day number to a string wih '0' before if day's number < 10
   * @param {*} date 
   */
  adjustDay(date){
    var adjustedDay = Number(date);
    if(date <= 9){
      adjustedDay = "0" + date.toString();
    }
    return adjustedDay;
  }

  /**
   * Transform month number to a string wih '0' before if month's number < 10
   * @param {*} date 
   */
  adjustMonth(month){
    var adjustedMonth = Number(month);
    adjustedMonth ++;
    if(adjustedMonth <= 9){
      adjustedMonth = "0" + adjustedMonth.toString();
    }
    else{
      adjustedMonth = adjustedMonth.toString();
    }
    return adjustedMonth;
  }

   /**
    * 
    * @param {*} timestamp timestamp to transform
    * @param {*} options :
    * separator : custom date separator (/ \ .), default : /
    * fullyear : 2018 if true, else 18
    * format : desired format. Can be 'DM' (day + separator + month) or 'MY' (month + separator + year). default (day + sep + month + sep + year)
    * examples : 22/06/18, 22.06, ...
    */
   getFormattedDate(timestamp, options = {}){
    timestamp = this.checkTimestamp(timestamp);
   	var myDate = new Date(timestamp);
   	var finaleSeparator = options.separator != null ? options.separator : this.DEFAULT_DATE_SEPARATOR;
   	var year = myDate.getFullYear();
   	if(options.fullyear === false){
   		year = year.toString().substr(2,2);
   	}
   	var day = this.adjustDay(myDate.getDate());
   	var month = this.adjustMonth(myDate.getMonth());

   	var dateToReturn = "";

   	if(options.format != null){
   		switch(options.format){
   			case "DM":
   				dateToReturn = day + finaleSeparator + month;
   				break;
   			case "MY":
   				dateToReturn = month + finaleSeparator + year;
   				break;
   			default:
   				dateToReturn = day + finaleSeparator + month + finaleSeparator + year;
   				break;
   		}
   	}
   	else{
   		dateToReturn = day + finaleSeparator + month + finaleSeparator + year;
      }
   	return dateToReturn;
   }

   /**
    * To implement
    * @param {*} timestamp 
    * @param {*} options 
    */
   getHourMinutes(timestamp, options = {}){

   }

   
  /**
   * Return the given date to something more litteral
   * example : Vendredi 22 juin 2018
   * @param {*} timestamp timestamp to transform
   * @param {*} options options :
   * isDay : boolean, display the day (monday, tuesday, ...)
   * isYear: boolean, display the month
   * case : string, upper | lower | camel
   * default format : 22 Juin
   */
   getVerboseDate(timestamp, options = {}){
    timestamp = this.checkTimestamp(timestamp);
    var month = this.getVerboseMonth(timestamp, options.case);
    var dateFormatted = new Date(timestamp);
    var day = this.adjustDay(dateFormatted.getDate());
    var year = dateFormatted.getFullYear();
        
    var base = day + " " +  month;
    if(options.isDay){
      var verboseDay = this.getVerboseWeekDay(timestamp, options.case);
      base = verboseDay + " " + base;
    }
    if(options.isYear){
      base = base + " " + year;
    }
    return base;
   }


   /**
    * Get the name of a day
    * @param {*} timestamp timestamp to convert
    * @param {*} format camel (default) | upper | lower
    */
   getVerboseWeekDay(timestamp, format = "camel"){
    timestamp = this.checkTimestamp(timestamp);
    var myDate = new Date(timestamp);
    var day = myDate.getDay();
    var stringDate = this.DAYS[day];
    if(format == "upper"){
      stringDate = stringDate.toUpperCase();
    }
    else if(format == "lower"){
      stringDate = stringDate.toLowerCase();
    }
    return stringDate;
   }

    /**
     * Get the name of a month
     * @param {*} timestamp timestamp to convert
     * @param {*} format camel (default) | upper | lower
     */
   getVerboseMonth(timestamp, format = "camel"){
    timestamp = this.checkTimestamp(timestamp);
    var myDate = new Date(timestamp);
    var month = myDate.getMonth();
    var stringMonth = this.MONTHS[month];
    if (format == "upper") {
      stringMonth = stringMonth.toUpperCase();
    } else if (format == "lower") {
      stringMonth = stringMonth.toLowerCase();
    }
    return stringMonth;
   }
}