import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import './Registro.css'
class Registro extends Component{
    constructor(props){
        super(props);
        this.state  ={
            campoNombre             : "", 
            campoApellido           : "", 
            campoCorreo             : "", 
            campoContraseña         : "", 
            campoConfirContraseña   : "", 

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
            minimoCaraCorreo        : false,
            cadVacioCorreo          : false,
            cadVaciasCorreo         : false,

            minimoCaraContrase      : false,
            cadVacioContrase        : false,
            cadContraseIdenticas    : false,
            almenosDosNumContrase   : false,
            confirmarContrase       : false,
        
        }
    
        this.nameChange         = this.nameChange.bind(this);
        this.validarNombre      = this.validarNombre.bind(this);
      
    }
    nameChange(event){
        this.setState({campoNombre: event.target.campoNombre});  
        console.log('entra a modificar el nombre');
        event.preventDefault();
    }
        

    validarNombre(event){
        this.setState({
            minimoCaraApellido : true,
            minimoCaraNombre   : true,
            confirmarContrase  : true,
            minimoCaraContrase : true,
            puntosContinuosCorreo   : true,
            minimoCaraCorreo        : true,
            cadContraseIdenticas    : true,
            almenosDosNumContrase   : true,


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
                <h1 id='TituloPrin' className="w3-center">Registrate en Wdemy</h1>
                <div className="w3-row w3-section">
                    
                    <div id='campNomApe' className="w3-rest">
                        <i id='logNomApe' class="w3-xxlarge fa fa-user"></i>

                        <div className="contenierNomApe ">                            
                            <div className='alertsIzq'>
                                <input id='campNombre' className="w3-input w3-border" name="first" type="text" placeholder="Nombre(s)"
                                    campoNombre={this.state.campoNombre} onChange={this.nameChange}
                                />
                                {this.state.errorVacioNombre?       <p>El campo nombre(s) no debe  estar vacio</p>                  : null }
                                {this.state.errorVacioNombre?       <p>No debe  contener caracteres especiales</p>                  : null }
                                {this.state.maximoCaraNombre?       <p>El nombre debe tener máximo 25 caracteres</p>                : null }
                                {this.state.minimoCaraNombre?       <p>El nombre debe tener mínimamente 2 caracteres</p>            : null }
                                {this.state.cadVaciasNombre?        <p>El nombre no debe contener cadenas de caracteres vacias</p>  : null }
                                
                            </div>
                          
                            <div className='alertsDere'>
                                <input id='campApelli' class="w3-input w3-border" name="last" type="text" placeholder="Apellidos" 
                            
                                />
                                {this.state.cadVaciasApellido?        <p>El campo apellidos no debe estar vacio</p>                       : null }
                                {this.state.errorCaraEspeciApellido?  <p>No debe  contener caracteres especiales</p>                      : null }
                                {this.state.maximoCaraApellido?       <p>El apellido debe tener máximo 25 caracteres</p>                  : null }
                                {this.state.minimoCaraApellido?       <p>Los apellidos deben tener mínimamente 6 caracteres</p>           : null }
                                {this.state.cadVaciasApellido ?       <p>Los apellidos no debe contener cadenas de caracteres vacias</p>  : null }
                
                            </div>
                        </div>
                    
                    </div> 
                

                    <div id='campCorr' class="w3-row w3-section">

                        <i id='logoCorreo' class="w3-xxlarge fa fa-envelope-o"></i>

                        <div class="w3-rest">

                        <input id='campoCorreo'  class="w3-input w3-border" name="email" type="text" placeholder="correo" />

                        </div>

                        <div className='alersCorreo'>
                            {this.state.maximoCaraCorreo?     <p>El correo debe contener como maximo 50 caracteres.</p>       : null }
                            {this.state.dominioFalCorreo?     <p>El correo debe contener un dominio</p>                       : null }
                            {this.state.correoExistente?      <p>El correo que ingresó ya está registrado</p>                 : null }
                            {this.state.puntosContinuosCorreo?<p>El correo que ingresó tiene más de dos puntos continuos</p>  : null }
                            {this.state.minimoCaraCorreo?     <p>El correo que ingrese debe contener más de 5 caracteres</p>  : null }                            
                            {this.state.cadVacioCorreo?       <p>El campo correo no debe estar vacio</p>                      : null }
                            {this.state.cadVaciasCorreo?      <p>El correo no debe contener cadenas de caracteres vacias</p>  : null }

                            

                        </div>

                    </div>

                    <div id='campContrasenias' >
                        <i id='logoContras' class="w3-xxlarge fa fa-envelope-o"></i>  
                        <div className="contenierNomApe" > 
                            <div className='alertsIzq'>                            
                                <input id='campNombre'  class="w3-input w3-border" name="password" type="password" placeholder="contraseña"                             
                                />
                                {this.state.minimoCaraContrase?       <p>Debe tener por lo menos 8 caracteres</p>                 : null }
                                {this.state.cadVacioContrase?         <p>El campo contraseña no debe estar vacio</p>              : null }
                                {this.state.cadContraseIdenticas?     <p>Las contraseñas deben de ser idénticas</p>               : null }
                                {this.state.almenosDosNumContrase?    <p>Debes introducir al menos 2 numeros en tu contraseña</p> : null }
                                {this.state.confirmarContrase?        <p>Debe confirmar su contraseña</p>                         : null }
                            </div>
                            <div className='alertsDere'>
                                <input id='campApelli'  class="w3-input w3-border" name="password" type="password" placeholder="confirmar contraseña"
                                />                            
                                {this.state.confirmarContrase?            <p>Las contraseñas deben de ser idénticas</p>               : null }
                            </div> 
                        </div>
   
                    </div>
                    
                </div>
                <div>

                    <button className="w3-btn " id='botonRegis' onSubmit={this.validarNombre}>
                         Registrarse
                    </button>
                    
                </div>

               
                <div className='enlacePre' >
                    <p >¿ya tienes cuenta?</p>
                    <a id='enlace' href="/login">iniciar sesion</a>
                    
                </div>

                </form>
                <button className="w3-btn " onClick={this.validarNombre}>nose1</button>
                </body>
            </html>
            
        );
    }
}


export default withRouter(Registro);
