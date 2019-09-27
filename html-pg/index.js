const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { pool } = require('./config');
const locals = require('../locals.config.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getLocals = (request, response) => {
  pool.query('SELECT * FROM locals ORDER BY id limit 1', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows[0].info)
  })
}

/*
const addBook = (request, response) => {
  const { author, title } = request.body

  pool.query('INSERT INTO books (author, title) VALUES ($1, $2)', [author, title], error => {
    if (error) {
      throw error
    }
    response.status(201).json({ status: 'success', message: 'Book added.' })
  })
}
*/

(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS locals (
      id SERIAL NOT NULL PRIMARY KEY,
      info JSON NOT NULL
    );
  `);

  const { rows } = await pool.query('SELECT * FROM locals ORDER BY id LIMIT 1');

  if (!rows.length || JSON.stringify(rows[0].info) !== JSON.stringify(locals)) {
    const escapedString = JSON.stringify(locals).replace(/'/g, "''");
    await pool.query(`INSERT INTO locals (info) VALUES ('${escapedString}');`);
  }

  app
  .route('/locals')
  // GET endpoint
  .get(getLocals)
  // POST endpoint
  //.post(addBook)

  // Start server
  app.listen(process.env.PORT || 3002, () => {
    console.log(`Server listening`);
  });

})();
