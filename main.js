const moment = require('moment');
const chalk = require('chalk');

// Day, date, and time
console.log(`Today is ${chalk.blue(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'))}.`);
// Day of the year
console.log(`It is the ${chalk.magenta(moment().dayOfYear() + 'th')} day of the year.`);
// Seconds into the day
let now = moment.duration("12:10:12: PM", "HH:mm:ss: A").asSeconds();
console.log(
  `It is ${chalk.cyan(now)} seconds into the day.`
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
