import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import './inicioSesion.css'
class InicioDeSesion extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <title>Wdemy</title>
            </head>
            <body>
                 
                 <form id='form'  action="/action_page.php" className="w3-container w3-card-4 w3-light-white w3-text-Black w3-margin">
                    <div className="w3-row w3-section" className="w3-center">
                        
                        <h1 className="w3-center">Bienvenido a Wdemy</h1>
                        
                        
                        <input  id='prinPar'  class="w3-input w3-border" name="email" type="text" placeholder="correo electronico" />
                        <br />
                        <input id='prinPar'  class="w3-input w3-border" name="password" type="Password" placeholder="contraseña" />
                        <br />
                        <button  id='btnIni'  class="w3-button " >Iniciar Sesion</button>
                        <br />
                        
                        <div  className="enlaceComp" >
                        <p id="letra" >¿aun no tienes cuenta?</p>
                            <a id='enlace' href="/register">registrarse</a>
                        </div>
                    </div>
                        
                 </form>
                 
            </body>
            </html>
            
        );
    }
}


export default withRouter(InicioDeSesion);