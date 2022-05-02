// node ./index.js name=theanderson city=riodejaneiro
console.log(process.argv);
// 0 executavel do node
// 1 o arquivo que está sendo executado
// 2 o argumento 

const args = process.argv.slice(2);
console.log(args);

const name = args[0].split('=')[1];
console.log(name);

const city = args[1].split('=')[1];
console.log(city);

console.log(`O nome dele é ${name} e ele mora no ${city}`);