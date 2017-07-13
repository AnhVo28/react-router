var express = require('express');
var app = express();
var jsonParser = require('body-parser').json();
var session = require('express-session');

app.use(session({
  secret: 'jahfdkjsdhfk9213',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000*60*60*24}
}))
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));

// app.get('/try', (req, res)=>{
//   res.send('Hello Axios');
// })
//
app.post('/axios', jsonParser, (req, res)=>{
  var text = req.body.username +' dep trai'
  res.send(text);
})

app.post('/signIn', jsonParser, (req, res)=>{
  var {password, username} = req.body;
  if (password === '123' && username === 'hoanganh') {
    req.session.username = username;
    return res.send('success');
  }
  res.send('fail')
})

app.get('/getInfo', (req, res)=>{
  if (req.session.username) {
    return res.send(req.session.username)
  }
  res.send('not login')
})
