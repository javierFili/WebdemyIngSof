import React, { Component } from 'react';

import {
    BrowserRouter as Router,
   
    Link
  } from "react-router-dom";

export default class AppBar extends React.Component {

    constructor(props){
        super(props);
        this.refrescar = this.refrescar.bind(this);
    }
    refrescar(params) {
        window.location.href = window.location.href;    
    }

    render(){ 
        const Menu = props => (    
            <button className="Bt-Wdemy"  onClick={this.refrescar}>
                <Link className='linkInial' to='/' >
                    <h2 className='titulo'>Wdemy</h2> /*titulo que se ve en header*/
                </Link>
            </button>
        )
        return (
            <div className="appBar">
                <Menu />
            </div>
        )
    }          
}

