const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const hbs = exphbs.create({
  partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/dashboard', (req, res) => {
  const items = ['Item A', 'Item B', 'Item C'];
  res.render('dashboard', { items });
});

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.js',
    comments: 4
  };

  res.render('blogpost', { post });
});

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprender Node.js',
      category: 'Backend',
      body: 'Este artigo vai te ajudar a aprender Node.js',
      comments: 4
    },
    {
      title: 'Aprender PHP',
      category: 'Backend',
      body: 'Este artigo vai te ajudar a aprender PHP',
      comments: 3
    },    
    {
      title: 'Aprender React',
      category: 'Frontend',
      body: 'Este artigo vai te ajudar a aprender React',
      comments: 6
    },
  ];

  res.render('blog', { posts });
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