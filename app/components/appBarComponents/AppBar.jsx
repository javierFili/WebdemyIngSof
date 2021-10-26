import React, { Component } from 'react';
import {
    BrowserRouter as Router,
   
    Link
  } from "react-router-dom";

class AppBar extends React.Component {

    constructor(props){
        super(props);
        this.refrescar = this.refrescar.bind(this);
    }
    refrescar(params) {
        window.location.href = window.location.href;    
    }

        render() {
            
            const Menu = props => (
                <div id="appBar">                    
                    <div>
                    <button class="Bt-Wdemy" onClick={this.refrescar}>
                    <Link to='/'>
                        <h1>Wdemy</h1>
                    </Link>
                    </button>
                    </div>                  
                </div>
            )
            return (
                <div>
                    <div id="menu">
                        <Menu />
                    </div>
                </div>
            );
        }
    
}

export default AppBar;