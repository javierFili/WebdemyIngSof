import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import './Registro.css'
class Registro extends Component{
    constructor(props){
        super(props);
        
        /**MESAJES DE ERROR QUE ESTARAN DEBAJO DE ALGUN CAMPO DONDE SE HALLA COMETIDO EL ERROR */

        /** */


    }
    
    render(){
        return(
            <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <title>Document</title>
            </head>
            <body>
                <form id='form' action="/action_page.php" className="w3-container w3-card-4 w3-light-grey w3-text-blue">
                <h2 id='TituloPrin' className="w3-center">Registrate en Wdemy</h2>
                <div className="w3-row w3-section">
                    
                    <div id='campNomApe' className="w3-rest">
                        <i id='logNomApe' class="w3-xxlarge fa fa-envelope-o"></i>

                        <input id='campNombre' className="w3-input w3-border" name="first" type="text" placeholder="Nombre(s)"/>

                        <input id='campApelli' class="w3-input w3-border" name="fisrt" type="text" placeholder="Apellidos" />
                    
                    </div> 
                
                    <div id='campCorr' class="w3-row w3-section">

                        <i id='logoCorreo' class="w3-xxlarge fa fa-envelope-o"></i>

                        <div class="w3-rest">

                        <input id='campoCorreo'  class="w3-input w3-border" name="email" type="text" placeholder="@gmail.com" />

                        </div>
                    </div>

                    <div id='campContrasenias' >
                        <i id='logoContras' class="w3-xxlarge fa fa-envelope-o"></i>  

                        <input id='campContras'  class="w3-input w3-border" name="password" type="password" placeholder="contraseña" />

                        <input id='campConfContr'  class="w3-input w3-border" name="password" type="password" placeholder="confirmar contraseña" />

                    </div>
                    
                </div>
                <div>
                    <button id='botonRegis' class="w3-button " >Registrase</button>
                </div>

                <div class='enlaceLogin'>
                    <p>
                        ya tienes cuenta
                    </p>
                    <a href="/login">iniciar sesion</a>

                </div>

                </form>
                </body>
            </html>
            
        );
    }
}


export default withRouter(Registro);
