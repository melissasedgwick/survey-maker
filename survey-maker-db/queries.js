const { Pool } = require('pg');

const pool = new Pool({
  user: 'melissasedgwick',
  host: 'localhost',
  database: 'survey_maker',
  port: 5432,
})

const getSurveys = (request, response) => {
  pool.query('SELECT * FROM surveys ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createSurvey = (request, response) => {
  const { name } = request.body;
  
  pool.query('INSERT INTO surveys (name) VALUES ($1) returning *', [name], (error, result) => {
    if (error) {
      throw error
    }
    response.status(201).send(result.rows[0])
  })
}

module.exports = {
  getSurveys,
  createSurvey
}
