const express = require('express');
const { sql, poolPromise } = require('./db');
const app = express();
const port = 3000;
const questions = require('../preguntas'); // Importa las preguntas desde preguntas.js

app.use(express.json());

// Ruta para obtener todas las preguntas desde el arreglo predefinido
app.get('/api/questions', (req, res) => {
  res.json(questions);
});

// Ruta para verificar la conexión a la base de datos
app.get('/api/test-connection', async (req, res) => {
  try {
    const pool = await poolPromise;
    res.send('Conexión a la base de datos exitosa.');
  } catch (err) {
    res.status(500).send('Error al conectar a la base de datos.');
  }
});

// Opcional: Ruta para obtener todas las preguntas desde la base de datos
app.get('/api/db-questions', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Questions');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error al obtener preguntas: ', err);
    res.status(500).send('Error al obtener preguntas');
  }
});

// Opcional: Ruta para agregar una nueva pregunta a la base de datos
app.post('/api/db-questions', async (req, res) => {
  try {
    const { question, answer, options } = req.body;
    const pool = await poolPromise;
    await pool.request()
      .input('question', sql.NVarChar, question)
      .input('answer', sql.NVarChar, answer)
      .input('options', sql.NVarChar, JSON.stringify(options))
      .query('INSERT INTO Questions (question, answer, options) VALUES (@question, @answer, @options)');
    res.status(201).send('Pregunta agregada');
  } catch (err) {
    console.error('Error al agregar la pregunta: ', err);
    res.status(500).send('Error al agregar la pregunta');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
