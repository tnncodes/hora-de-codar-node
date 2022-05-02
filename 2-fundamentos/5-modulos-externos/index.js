// node ./index.js --name=theanderson --city=riodejaneiro

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
console.log(args);

const name = args['name'];
const city = args['city'];
console.log(`O nome dele é ${name} e ele mora no ${city}`);