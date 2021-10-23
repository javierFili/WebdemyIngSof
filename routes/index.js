const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.get('/', async (req, res) => {
    const cursos = await pool.query('SELECT * FROM CURSO');
    console.log(cursos);
    res.redirect('index');
});
module.exports = conexion;
module.exports = router;