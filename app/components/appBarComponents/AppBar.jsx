import React, { Component } from 'react';
import 'w3-css/w3.css';
import {
    BrowserRouter as Router,
    withRouter,
    Link
  } from "react-router-dom";

function openPagRegister(){

}

function openPagLogin(){
    
}


const RegisterButton = () =>{
 
    return (
        <div>
            <button class="w3-button w3-black" onClick={openPagRegister()}>
                Registrarse
            </button>
        </div>
    );
}


const LoginButton = () =>{
    return (
        <div>
            <button class="w3-button w3-black" onClick={openPagLogin()}>
                iniciar sesion
            </button>
        </div>
    );
    
}

class AppBar extends Component {

    constructor(props){
        super(props);
        this.refrescar = this.refrescar.bind(this);
    }
    refrescar(params) {
        this.props.history.push("/");
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
                    <RegisterButton />

                    <LoginButton />
                    </div>
                    
                </div>
               
            </div>
        )
    }          
}

export default withRouter(AppBar);