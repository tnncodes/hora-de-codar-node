const fs = require('fs');

fs.stat('pasta', (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('arquivo: ', stats.isFile());
  console.log('diretório: ', stats.isDirectory());
  console.log('link simbólico: ', stats.isSymbolicLink());
  console.log('data de criação: ', stats.ctime);
  console.log('tamanho do arquivo: ', stats.size);
});