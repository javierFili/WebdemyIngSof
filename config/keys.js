const mysql = require('mysql');
const conexion = mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'practicadb'
    

});
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("se hiso la conexion");
    }
});