const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('AWS exercise 의 nodejs');
});

app.listen(80, () => {
  console.log('Example app listening on port 80!');
});

app.get('/health', (req, res) => {
  res.status(200).send();
});