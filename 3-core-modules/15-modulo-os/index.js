const os = require('os');

console.log('CPU:', os.cpus());
console.log('Memória livre:', os.freemem());
console.log('Diretório principal:', os.homedir());
console.log('Sistema:', os.type());