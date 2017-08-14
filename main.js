const moment = require('moment');
const chalk = require('chalk');

// Day, date, and time
console.log(`It is ${chalk.blue(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'))}.`);

// Day of the year
console.log(`It is the ${chalk.magenta(moment().format('DDDo'))} day of the year.`);

// Seconds into the day
let hS = moment().format('H') * 3600;
let mS = moment().format('m') * 60;
let sS = moment().format('s') * 1;

console.log(
  `It is ${chalk.cyan(hS + mS + sS)} seconds into the day.`
);

// Check for DST
if(moment().isDST()){
  console.log(`It ${chalk.green('is')} during Daylight Savings Time.`);
} else {
  console.log(`Is ${chalk.red('is not')} during Daylight Savings Time.`);
}

// Check for leap year
if(moment().isLeapYear()){
  console.log(`It ${chalk.green('is')} a leap year.`);
} else {
  console.log(`Is ${chalk.red('is not')} a leap year.`);
}
