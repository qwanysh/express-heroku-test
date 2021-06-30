const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({status: 'ok'});
});

app.get('/db_url', (req, res) => {
  res.send(process.env.DATABASE_URL);
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

