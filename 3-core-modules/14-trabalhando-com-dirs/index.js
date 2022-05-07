const fs = require('fs');

if (!fs.existsSync('./minha-pasta')) {
  console.log('Não existe!');
  fs.mkdirSync('minha-pasta');
} else if (fs.existsSync('./minha-pasta')) {
  console.log('Existe!');
}