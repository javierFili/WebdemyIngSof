import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import './inicioSesion.css'
class InicioDeSesion extends Component{
    constructor(props){
        super(props);
        this.state={
            email   :"",
            password :"",
            errorContraseña :false,
            errorCorreo :false
        }
        this.mailChange          = this.mailChange.bind(this);
        this.contraChange          = this.contraChange.bind(this);
    }
    mailChanche(event){
        this.setState({campoCorreo: event.target.value});
    }
    contraChange(event){
        this.setState({campoContra: event.target.value});
    }

    validarIniciSecion(event){
        var todoBienTodoCorrecto = this.validarAllCampos();
        //se hace la consulta en aqui
        
        if(todoBienTodoCorrecto){
            // se comprueba la base de datos
        }else{
            
        }

    }
    validarAllCampos(){
        var res = false;
        this.devolverValoresState();
        this.validarCorreo();
        this.validarContra();
    }

    validarCorreo(){
        var res = true;
        var estadoCor = this.state.campoCorreo;
        if(estadoCor==""){
            res =false;
        }else{}
        return res;
    }
    validarContra(){
        var res = true;
        var estadoCont = this.state.campoContra;
        if(estadoCont==""){
            res =false;
        }else{}
        return res;
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
                 
                 <form id='form'  action="/action_page.php" className="w3-container w3-card-4 w3-light-grey w3-text-Black w3-margin">
                    <div className="w3-row w3-section" className="w3-center">
                        
                        <h1 className="w3-center">Bienvenido a Wdemy</h1>
                        
                        <div>
                            <input  id='prinPar'  class="w3-input w3-border" name="email" type="text" placeholder="correo electronico" 
                            value={this.state.campoCorreo} onChange={this.mailChanche}
                            />
                            {this.state.errorCorreo?    <p>correo electronico incorrecto</p>                  : null }
                        </div>
                        
                        <br />
                        <div>
                            <input id='prinPar'  class="w3-input w3-border" name="password" type="Password" placeholder="contraseña" 
                            value={this.state.campoContra} onChange={this.contraChanche}
                            />
                            {this.state.errorContraseña?       <p>la contraseña es incorrecta</p>                  : null }
                        </div>
                        
                        <br />
                        <button  id='btnIni'  class="w3-button " onClick={this.validarRegistro}>Iniciar Sesion</button>
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