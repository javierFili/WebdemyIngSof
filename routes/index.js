const express = require('express');
const router = express.Router();
const path = require('path');
const conexion = require('../src/keys.js'); //la conexion es en keys
module.exports = conexion;
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM curso', (error,results)=>{ //funca pero dice que no es una funcion
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});

module.exports = router;