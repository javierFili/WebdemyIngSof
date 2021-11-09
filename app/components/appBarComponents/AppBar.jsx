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

                        <button class="w3-button w3-black" onClick={this.openPagRegister}>
                            Registrarse
                        </button>

                        <button class="w3-button w3-black" onClick={this.openPagLogin}>
                             iniciar sesion
                        </button>
                    </div>
                    
                </div>
               
            </div>
        )
    }          
}

export default withRouter(AppBar);