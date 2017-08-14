const moment = require('moment');
const chalk = require('chalk');

console.log(`Today is ${moment().format('LLLL')}`);



console.log('It is the ' +  chalk.blue(moment().dayOfYear() + 'th ') + 'day of the year.');
