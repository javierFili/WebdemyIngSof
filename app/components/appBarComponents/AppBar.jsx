import React, { Component } from 'react';
import 'w3-css/w3.css';
import {
    BrowserRouter as Router,
    withRouter,
    Link
  } from "react-router-dom";


class AppBar extends Component {
    
    
    constructor(props){
        super(props);
        //pueden reusar eso para que esos botones desaparezcan
        this.showButtonRegister = this.props.showButtRegis;
        this.showButtonLogin    = this.props.showButtLogin;
        //desaparecen o persisten los botones, esta en App.jsx lo llama y manda como parametro que lo
        //inabilite.
        this.refrescar = this.refrescar.bind(this);
        this.openPagLogin=this.openPagLogin.bind(this);
        this.openPagRegister=this.openPagRegister.bind(this);   
    }


    refrescar(params) {
        this.props.history.push("/");
        window.location.href = window.location.href;
    }

    openPagRegister(){
        this.props.history.push("/register");
        window.location.href = window.location.href;           
    }
   
    openPagLogin(){
        this.props.history.push("/login");
        window.location.href = window.location.href;
    } 

    
    render(){ 
        const Menu = props => (    
            <button className="Bt-Wdemy" >
                <Link className='linkInial' to='/' onClick={this.refrescar}>
                    <h2 className='titulo' >Wdemy</h2>
                </Link>
            </button>
            
        )
        return (
            <div>
                <div className="appBar">

                    <div className="appBarIzq">
                        <Menu />
                    </div>

                    <div className="appBarDere">

                       { this.showButtonRegister? null :
                        <button id="ButtonRegister" className="w3-button" onClick={this.openPagRegister}>
                            Registrarse
                        </button>                        
                        }
                        {this.showButtonLogin? null:
                        <button id="ButtonLogin" className="w3-button " onClick={this.openPagLogin}>
                             iniciar sesion
                        </button> 
                        
                        }

                    </div>
                    
                </div>
               
            </div>
        )
    }          
}

export default withRouter(AppBar);