const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
  const items = ['Item A', 'Item B', 'Item C'];
  res.render('dashboard', { items });
});

app.get('/', (req, res) => {
  const user = {
    name: 'Jhon',
    surname: 'Doe'
  };
  const auth = true;
  
  res.render('home', { user: user, auth });
});

app.listen(3000, () => {
  console.log('App funcionando!');
});