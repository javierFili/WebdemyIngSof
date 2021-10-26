import React, { Component } from 'react';
//import React, { useState } from 'react';
import curso from '../../../data/Pruebas';
import {
  Link
} from "react-router-dom";


class Filtro extends Component{
  constructor(props){
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nombreAbuscar="";
    this.sacar=this.sacar.bind(this);
    this.numActual=0;
    this.numSig   =4;
    this.flechaIqzClickada = this.flechaIqzClickada.bind(this);
    this.flechaDereClickada= this.flechaDereClickada.bind(this);

    this.estadoBotDere = false;
    this.estadoBotIzq  = false;

    this.refrescarPagina = this.refrescarPagina.bind(this);

  }

  handleChange(event) {
    if(event.key === 'enter'){
      this.handleSubmit();
    }else{
      this.setState({value: event.target.value});
    }
    
    event.preventDefault()
  }

  handleSubmit(event) { 
    this.nombreAbuscar = this.state.value;
    this.numActual = 0;
    this.numSig = 4;
    event.preventDefault();
    
  }
  sacar(event) {
    var filtracion= curso.filter(curso =>curso.palsClavs.includes(this.nombreAbuscar) ||
    this.nombreAbuscar === "" );
    
    if(filtracion.length > this.numSig){
      filtracion = filtracion.splice(this.numActual,this.numSig);
    }else{
      
    }
    console.log('en el modo sacar '+this.numActual + ' hasta ' + this.numSig);
    return filtracion;
  }
  
  flechaDereClickada(){
    var limiteCompo = this.sacar.length;
    if(this.numSig+4 < limiteCompo){
      
      this.numActual = this.numSig;
      this.numSig = limiteCompo; 
    
    }else{
        
      this.numActual = this.numSig;
      this.numSig = this.numSig+4;

   }
   console.log("en el metodo fechaDereClickada "+this.numActual+" hasta "+this.numSig);
   
  }

  flechaIqzClickada(){
  }
  

 refrescarPagina(){
  window.location.href = window.location.href;
 }
  render() {
    return (
      <div>     
          <form onSubmit={this.handleSubmit} >
            <label>
              filtro de cursos:
              <input type="text"  value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Submit"/>
            </label>
            
          </form>

        <div class="carruPrincial" >
          <div class="carruIzq">
            <button class="flechaIzq" onClick={this.flechaIqzClickada}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz3
            4AAAAAXNSR0IArs4c6QAAAalJREFUSEuNVe11wzAIPCZoNqg3cDpBvUGzSb1BskmyQTNKNlIfMp
            aQADn6Yz99cdwdiHA4CECSXc6/mZKJ/CHwpwy9N0/qvXrCHDInm7NOAOeACcDoEoM8I+Euy18lW
            ZWzQ5KB7u4hpFsiXNWlDSM7CS6/GV1My4SEPwDn7XDJmNR/WWnnRJwqrCzXpNYEXAGcHP1yBvWK
            XWTHCTWDcg1fyKiXRvxWrhpA8CvOimgZfBfzksBC0skstuoEFPme5FlGzQ659BF7txjTKJ+0Nq0
            ELnL5ZCwUFxcza7D0wjNqFnENUcdlkgP0hPQBXgDN2kWRW4MCUri8VkF4IWGuIKOia3uOABoXml
            iTKboR8Ltn63QJaWS5VfQl01I0aHBLAh4APisVYmWnwvzWQ6CDDsrZPAj48Rq24+6u0DZ541Fp5
            kLjbD4OBK+F1tSBq5d5DzibJ4DvENHGoFMHQ1jGRSubgLPxn5lO9eOnRfeosnsC6ElIc+M0obwv
            9Hc0CFpPzoSrfh9BHeg34MBWTsb86LABeMgDNIjYKGT8HlX1gAQN/p2eY/YPfQ78A6S4rx5p6Ig
            UAAAAAElFTkSuQmCC"/>
            </button>
            </div>
            
            <div className="carruMedio">
            <ul>
            {
            this.sacar().map(curso => {
               return(
                <div id="esta" > 
                     <button class="elementos-carrusel" onClick={this.refrescarPagina}>
                    <Link to={`/Inicio/${curso.id}`}>
                      <li key={curso.id}>
                          <h3>{curso.titulo}</h3>
                          <br />                    
                          {curso.imagen}
                          <br />
                          {curso.actualizacion}
                          <br />
                          {curso.tutor} 
                          <br />
                          {this.nombreAbuscar}
                        </li>
                    </Link>
                    </button> 
                </div>                  
                )
               })
            }
            </ul>
          </div>

          <div class="carruDere">

            <button class="flechaDer" onClick={this.flechaDereClickada}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz
                      34AAAAAXNSR0IArs4c6QAAAbNJREFUSEudleF1wjAMhD9t1I7CBnSDjhA2gBG6Ad
                      2AbpBuQDeACdTnxImlWKJ95FeCsaQ7nU5C+Aig60n7qm/+OA4x/SqUv/7xPBNUa3l
                      LgilG+VgOGCuEN5jec5z17oQ4QCYJ2pmf+fIAenAZuku1uCDZTFF/QSc0DdmosAO5
                      2t6YImb0AZtJAtPhlv8GDMAppMLIYgukorfpRVNO4aLCDuVm1WURNDojFc23mkajc
                      qGgeRM4m2YFQnAJXCNMglxDgpYERWklYaw0G9a89wkssT7UtaABLr3SnqfI0rwI64
                      hwWHuzKtCk/TeCHM0I8rq1mWWgrP8skq5+0jRuaWh5VgV+o7zY2cq8yKmoWYifpE3
                      /TgrvfmqF2Sp6v1iGuKHNaBF+UNmDXrIBDGzZT7IfHDckH0xVW5k600ztOpmDFeod
                      2APnx7bhKHL8PhrQT4R9kWNilN2yylXkeb+DDIIeoyl8JISwB9bIQL8qJWVq48Xi6
                      jZd2wRaTmyRZdkMdfn0YYId4OYgWE5Ft2OFXBo5dn7lnD0pvWYxg+bDmP0cLLztdv
                      HzbfuRJAhpzhy52UnQoF9BntojuCNehAAAAABJRU5ErkJggg=="/>          
            </button>

          </div>
        </div>

        
        
      </div>
    )
  }

}

//export default class Carrusel extends Component {
function Carrusel(params) {
  return (
        <main role="main">
          <Filtro 
          />
         
        </main>
        
    );
  
}
export default Carrusel;


/* if(filtracion.length > this.numActual + 4 && this.numActual > 4){
      //ambos botones estan activos y prendidos 
      //ojo solo debemos mostrar 4 elementos en la pantalla
    }else{
      if(this.numActual==0 && filtracion.length > 4){
        //se muestra solo el boton de la derecha 
      }else{
        if(filtracion.length < 4){
          //ningun boton esta activo
          //esta de poner condiciones de reduccion de componentes
          ('carruIzq')
        }else{  
          if(this.numActual>=4 ){
            //este esta de cosiderar,revisar funcionalidad.
            //es boton izquierda encendio
            //esta de poner condiciones de reduccion de componentes
          }else{

          }
        }
      }
    } */

    //revisar algoritmos de corte ojo...para ambos casos
    //cuando esta a extremo derecha y solo hay menos de 4
    // y el otro cuando esta en el princiopio con menor igual a 4.
