import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import './Registro.css'
class Registro extends Component{
    constructor(props){
        super(props);
        this.state  ={
            errorVacioNombre        : false,
            errorCaraEspeciNombre   : false,
            maximoCaraNombre        : false,
            minimoCaraNombre        : false,
            cadVaciasNombre         : false,

            errorVacioApellido      : false,
            errorCaraEspeciApellido : false,
            maximoCaraApellido      : false,
            minimoCaraApellido      : false,
            cadVaciasApellido       : false,

            maximoCaraCorreo        : false,
            dominioFalCorreo        : false,
            correoExistente         : false,
            puntosContinuosCorreo   : false,
            maximoCaraCorreo        : false,
            dominioFalCorreo        : false,
            correoExistente         : false,
            puntosContinuosCorreo   : false,
            minimoCaraCorreo        : false,
            cadVacioCorreo          : false,
            cadVaciasCorreo         : false,

            minimoCaraContrase      : false,
            cadVacioContrase        : false,
            cadContraseIdenticas    : false,
            almenosDosNumContrase   : false,
            confirmarContrase       : false,
        
        }
              
      
    }
    nose (){
                           
        }
        
    validarNombre(){
        this.setState({
            errorCaraEspeciNombre:true,

        })
            
    }

    render(){
        return(
            <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
                <title>Document</title>
            </head>
            <body>
                <form id='form' action="/action_page.php" className="w3-container w3-card-4 w3-light-grey">
                <h2 id='TituloPrin' className="w3-center">Registrate en Wdemy</h2>
                <div className="w3-row w3-section">
                    
                    <div id='campNomApe' className="w3-rest">
                        <i id='logNomApe' class="fa fa-male"></i>
                        <div>
                            <input id='campNombre' className="w3-input w3-border" name="first" type="text" placeholder="Nombre(s)"/>
                            

                            <input id='campApelli' class="w3-input w3-border" name="last" type="text" placeholder="Apellidos" />
                        </div>
                        
                        <div className='alertsIzq'>
                            {this.state.errorVacioNombre?       <p>El campo nombre(s) no debe  estar vacio</p>                  : null}
                            {this.state.errorVacioApellido?     <p>No debe  contener caracteres especiales</p>                  : null}
                            {this.state.maximoCaraNombre?       <p>El nombre debe tener máximo 25 caracteres</p>                : null}
                            {this.state.minimoCaraNombre?       <p>El nombre debe tener mínimamente 2 caracteres</p>            : null}
                            {this.state.cadVaciasNombre?        <p>El nombre no debe contener cadenas de caracteres vacias</p>  : null}
                            

                        </div>
                        <div className='alertsDere'>
                            {this.cadVaciasApellido?        <p>El campo apellidos no debe estar vacio</p>                       : null}
                            {this.errorCaraEspeciApellido?  <p>No debe  contener caracteres especiales</p>                      : null}
                            {this.maximoCaraApellido?       <p>El apellido debe tener máximo 25 caracteres</p>                  : null}
                            {this.minimoCaraApellido?       <p>Los apellidos deben tener mínimamente 6 caracteres</p>           : null}
                            {this.cadVaciasApellido ?       <p>Los apellidos no debe contener cadenas de caracteres vacias</p>  : null}

                

                        </div>
                    
                    </div> 
                
                    <div id='campCorr' class="w3-row w3-section">

                        <i id='logoCorreo' class="w3-xxlarge fa fa-envelope-o"></i>

                        <div class="w3-rest">

                        <input id='campoCorreo'  class="w3-input w3-border" name="email" type="text" placeholder="correo" />

                        </div>

                        <div className='alersCorreo'>
                            <p>El correo debe contener como maximo 50 caracteres.</p>
                            <p>El correo debe contener un dominio</p>
                            <p>El correo que ingresó ya está registrado</p>
                            <p>El correo que ingresó tiene más de dos puntos continuos</p>
                            <p>El correo que ingrese debe contener más de 5 caracteres</p>
                            <p>El correo que ingresó debe contener como maximo 50 caracteres</p>
                            <p>El campo correo no debe estar vacio</p>
                            <p>El correo no debe contener cadenas de caracteres vacias</p>
                        </div>

                    </div>

                    <div id='campContrasenias' >
                        <i id='logoContras' class="w3-xxlarge fa fa-envelope-o"></i>  

                        <input id='campContras'  class="w3-input w3-border" name="password" type="password" placeholder="contraseña" />

                        <input id='campConfContr'  class="w3-input w3-border" name="password" type="password" placeholder="confirmar contraseña" />

                        <div className='alertsIzq'>
                            <p>Debe tener por lo menos 8 caracteres</p>
                            <p>El campo contraseña no debe estar vacio</p>
                            <p>Las contraseñas deben de ser idénticas</p>
                            <p>Debes introducir al menos 2 numeros en tu contraseña</p>
                            <p>Debe confirmar su contraseña</p>
                        </div>

                        <div className='alertsDere'>
                        <p>Las contraseñas deben de ser idénticas</p>
                        </div>


                    </div>
                    
                </div>
                <div>

                    <button id='botonRegis' Click={this.validarNombre}>Registrase</button>
                </div>

                <div class='enlaceLogin'>
                    <p id='letra'>
                        ya tienes cuenta
                    </p>
                    <a id='enlace' href="/login">iniciar sesion</a>

                </div>

                </form>
                </body>
            </html>
            
        );
    }
}


export default withRouter(Registro);
