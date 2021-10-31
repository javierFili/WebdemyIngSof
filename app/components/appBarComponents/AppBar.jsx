import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    withRouter,
    Link
  } from "react-router-dom";

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
                    <h2 className='titulo'>Wdemy</h2>
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

export default withRouter(AppBar);