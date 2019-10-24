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

module.exports = {
  getSurveys
}
