const express = require('express');
const app = express();
const logger = require('morgan');
app.use(logger('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('/home')

  const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`wbe host on port ${port}`))