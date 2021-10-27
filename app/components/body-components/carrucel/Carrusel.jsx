import React, { Component } from 'react';
import curso from '../../../data/Pruebas';
import {
  Link
} from "react-router-dom";


class Filtro extends Component{
  constructor(props){
    super(props);
    this.state = {value: "" ,noHayElement:false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nombreAbuscar="";
    this.sacar=this.sacar.bind(this);
    this.numActual= 0;
    this.numSig   = 4;
    this.flechaIqzClickada = this.flechaIqzClickada.bind(this);
    this.flechaDereClickada= this.flechaDereClickada.bind(this);
 
    this.estadoBotDere = false;
    this.estadoBotIzq  = false;
    this.elemtVacio = false;    

    this.refrescarPagina = this.refrescarPagina.bind(this);
    this.numFiltrado=0;
    this.numFiltrado2=0;

  }

  handleChange(event) {
    this.setState({value: event.target.value});  
    event.preventDefault()
  }

  handleSubmit(event) { 
    this.nombreAbuscar = this.state.value;
    this.numActual = 0;
    this.numSig = 4;
    this.forceUpdate();
    event.preventDefault();
  }

  sacar() {
    var filtracion= curso.filter(curso =>curso.palsClavs.includes(this.nombreAbuscar) ||
    this.nombreAbuscar === "" );
    this.numFiltrado = filtracion.length;
    if(filtracion.length > this.numSig){
      var aRecor = filtracion.slice();
      var filtracion2 = aRecor.slice(this.numActual,this.numSig);
      
    }else{
      console.log('entra');
      var aRecor = filtracion.slice();
      var filtracion2 = aRecor.slice(this.numActual,filtracion.length);
      
    }
    
    if(this.numActual == 0 && filtracion2.length >= 4){
      //se muestra solo el boton de la derecha 
      this.estadoBotDere = true;
      this.estadoBotIzq = false;  
      //this.setState({dere:true,izq:false});
      console.log('el boton dere habilitado, izq bloqueado');
      console.log(this.estadoBotDere+"  "+this.estadoBotIzq);
      //funca
    }else{
      if(filtracion.length < 4){
        //ningun boton esta activo
        this.estadoBotDere = false;
        this.estadoBotIzq = false; 
        //this.setState({dere:false,izq:false});
        console.log('ambos botones estan bloqueados');
        console.log(this.estadoBotDere+"  "+this.estadoBotIzq);
      }else{  

      }
    }
    /* if(this.numFiltrado===0){
      this.setState({noHayElement:true});
    }else{
      this.setState({noHayElement:false});
    }  */

    this.numFiltrado2 = filtracion2.length;
    return filtracion2;
  }
  
  flechaIqzClickada(){
    
    if(this.numActual > 0 ){
      this.numSig = this.numActual;
      this.numActual = this.numActual-4;
    }else{
      this.setState({izq:false});
    }
    if(this.numFiltrado > this.numSig && this.numActual >= 4){
      //ambos botones estan activos y prendidos 
      //ojo solo debemos mostrar 4 elementos en la pantalla
      this.estadoBotDere = true;
      this.estadoBotIzq = true;
      //this.setState({dere:true,izq:true});
      console.log("ambos estan predidos");
      console.log(this.estadoBotDere+"  "+this.estadoBotIzq);
    }else{
      if(this.numActual == 0 && this.numFiltrado2 >= 4){
        //se muestra solo el boton de la derecha 
        this.estadoBotDere = true;
        this.estadoBotIzq = false;  
        //this.setState({dere:true,izq:false});
        console.log('el boton dere habilitado, izq bloqueado');
        console.log(this.estadoBotDere+"  "+this.estadoBotIzq);
        //funca
      }else{

      }

    }
    this.forceUpdate();
  }

  flechaDereClickada(){
    if(this.numSig === this.numFiltrado){
      //this.setState({dere:false});
      this.forceUpdate();
    }else{
      if(this.numSig+4 < this.numFiltrado){       
        this.numActual = this.numSig;
        this.numSig +=4; 
      }else{
        this.numActual = this.numSig;
        this.numSig =  this.numFiltrado;
    }
  }

  if(this.numFiltrado > this.numSig && this.numActual >= 4){
    //ambos botones estan activos y prendidos 
    //ojo solo debemos mostrar 4 elementos en la pantalla
    this.estadoBotDere = true;
    this.estadoBotIzq = true;
    //this.setState({dere:true,izq:true});
    console.log("ambos estan predidos");
    console.log(this.estadoBotDere+"  "+this.estadoBotIzq);
  }else{
    if(this.numSig >=4 || this.numSig === this.numFiltrado  ){
      //este esta de cosiderar,revisar funcionalidad.
      //es boton izquierda encendio
      this.estadoBotIzq =true;
      this.estadoBotDere = false;
      //this.setState({dere:false,izq:true});
      console.log('el boton izq esta habilitado, la dere esta bloqueada');
      console.log(this.estadoBotDere+"  "+this.estadoBotIzq);
    }
  }


   this.forceUpdate();
  }

 refrescarPagina(){
  window.location.href = window.location.href;
 }
  render() {
    return (
      <>     
          <form className='filtro' onSubmit={this.handleSubmit} >
            <label>
              Filtro de cursos:
              <input type="text"  value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Filtrar"/>
            </label>
            
          </form>

        <div className="carruPrincial" >
          <div className="carruIzq">
            {this.estadoBotIzq ? <button class="Bt-Flecha" onClick={this.flechaIqzClickada}>
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
            </button> :null}
            
            </div>
            
            <div className="carruMedio">
              <ul>
              {this.numFiltrado === 0 ? 
                  <h1>Lo sentimos no hay cursos con ese nombre</h1> : null
              }
              {
              this.sacar().map(curso => {
                return(
                  <div id="elementosDelCarrusel" > 
                      <button className="elementos-carrusel" onClick={this.refrescarPagina}>
                      <Link className='linkInial' to={`/Inicio/${curso.id}`}>
                        <ul key={curso.id}>
                            <h3>{curso.titulo}</h3>
                            <br />                    
                            {curso.imagen}
                            <br />
                            {curso.actualizacion}
                            <br />
                            {curso.tutor} 
                            
                          </ul>
                      </Link>
                      </button> 
                  </div>                  
                  )
                })
              }
              </ul>
           </div>

          <div className="carruDere">
            {this.estadoBotDere ?  <button class="Bt-Flecha" onClick={this.flechaDereClickada}>
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
            </button> : null}
            
          </div>
        </div>

        
        
      </>
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
