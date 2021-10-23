const express = require('express');
const router = express.Router();
const path = require('path');
const conexion = require('../config/keys.js'); //la conexion es en keys

router.get('/', (req, res) => {
        console.log("ingresa");
    /* conexion.query('SELECT * FROM modulo', (error,results)=>{ //funca pero dice que no es una funcion
        console.log("funciona entra en la funcion");
        if(error){
            throw error;
            console.log(error);
        }else{
            console.log(results);
            res.send(results);
        }
    }); */
});
module.exports = conexion;
module.exports = router;