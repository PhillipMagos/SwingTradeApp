const express = require('express');
const app = express();
const logger = require('morgan');
app.use(logger('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('/home')

app.get('/', (req, res) => {
  res.redirect('/home');
})
app.get('/about', (req, res) => {
  res.redirect('/about');
})
app.get('/contact', (req, res) => {
  res.redirect('/contact');
})



  const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`wbe host on port ${port}`))