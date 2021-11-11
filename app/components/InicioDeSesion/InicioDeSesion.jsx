import React, {Component} from "react";
import { withRouter } from "react-router-dom";

class InicioDeSesion extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Pasa !!</h1>
            </div>
        );
    }
}


export default withRouter(InicioDeSesion);