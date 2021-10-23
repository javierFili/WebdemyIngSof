const conexion = require('./config/keys.js');
exports.save = (req,res)=>{
    const user = req.body.user; //esta haciendo referencia a algo del 
    const rol = req.body.rol;
    console.log(user +"-");
}
