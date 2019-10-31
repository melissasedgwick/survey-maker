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
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PATCH");
  next();
});

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/surveys', db.getSurveys);
app.post('/surveys', db.createSurvey);
app.get('/surveys/:id', db.getSurveyById);
app.patch('/surveys/:id', db.updateSurvey);
app.delete('/surveys/:id', db.deleteSurvey);

app.post('/users', db.createUser);
app.post('/users/signin', db.signinUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
