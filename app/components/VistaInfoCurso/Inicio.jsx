import React from "react";
import { useParams } from "react-router-dom";

const Inicio = ()=>{
    let {entrada} = useParams();

   return(
       <div>

           {this.entrada}

       </div>
   )
}

export default Inicio;


