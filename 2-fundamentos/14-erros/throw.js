const x =  '10';
const y =  10;

// checar se x é um número
if (!Number.isInteger(y)) {
  throw new Error('O valor de x não é um número interiro!');
}

console.log('Continuando o código...');