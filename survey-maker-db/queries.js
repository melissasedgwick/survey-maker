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

  pool.query('INSERT INTO surveys (name) VALUES ($1) returning *', [name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(results.rows[0])
  })
}

const getSurveyById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM surveys WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows[0])
  })
}

const updateSurvey = (request, response) => {
  const id = parseInt(request.params.id)
  const { name } = request.body

  pool.query(
    'UPDATE surveys SET name = $1 WHERE id = $2 RETURNING *', [name, id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results.rows[0])
    }
  )
}

const deleteSurvey = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(
    'DELETE FROM surveys WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send()
    }
  )
}

const createUser = (request, response) => {
  const { username, password } = request.body

  pool.query('INSERT INTO users (username, password) VALUES ($1, $2) returning *', [username, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(results.rows[0])
  })
}

const signinUser = (request, response) => {
  const { username, password } = request.body

  pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows[0])
  })
}

module.exports = {
  getSurveys,
  createSurvey,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
  createUser,
  signinUser
}
