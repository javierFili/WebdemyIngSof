import React from "react";
import { useParams } from "react-router-dom";

const Inicio = ()=>{
    let {entrada} = useParams();

   return(
       <div>

           {entrada}

       </div>
   )
}

export default Inicio;


