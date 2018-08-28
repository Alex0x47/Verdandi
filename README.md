# Verdandi
Library that helps you to control time. Easily convert timestamp to full date, with different format.

** TODO **
* Create a function to get minutes / hours ✔️ => Make the doc
* Make this a npm module
* Internationalization
* Write a better readme.md :wink:


## Usage
### checkTimestamp(timestamp)
Check if the given parameter is a valid timestamp.
If it is, return the timestamp, if not, return the current timestamp

### getFormattedDate(timestamp, options)
Get a date (ie. 01/07/2018) in french format (for the moment), using the given 'timestamp' parameter.
If 'timestamp' is invalid, use the current timestamp.

#### options
Option | type | description
------------ | ------------- | -------------
separator | string | the character used to separate date's elements. default : "/"
fullyear | boolean | if false, year format will be 18, if true 2018
format | string | desired format. Can be 'DM' (day + separator + month) or 'MY' (month + separator + year). default (day + sep + month + sep + year)


### getVerboseDate(timestamp, options)
Return the given date to something more litteral (ie. Vendredi 22 juin 2018) in french format (for the moment), using the given 'timestamp' parameter.
If 'timestamp' is invalid, use the current timestamp.
Without options, will return something like "01 Juillet".

#### options
Option | type | description
------------ | ------------- | -------------
isDay | boolean | display the day or not (lundi, mardi, ...)
isYear | boolean | display the month or not (janvier, février, ...)
case | string | can be "upper"(case), "lower"(case), or "camel"(case, default). 


### getVerboseWeekDay(timestamp, format)
Return the day of the week (lundi... dimanche) using the timestamp param (will user the current timestamp if undefined or not a timestamp).
'format' can be "lower", "upper", of "camel" (default). To return "lundi", "LUNDI" or "Lundi".


### getVerboseMonth(timestamp, format)
Return the month (janvier... décembre) using the timestamp param (will user the current timestamp if undefined or not a timestamp).
'format' can be "lower", "upper", of "camel" (default). To return "janvier", "JANVIER" or "Janvier".

```

```
