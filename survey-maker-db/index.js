const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const db = require('./queries')

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/surveys', db.getSurveys);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
