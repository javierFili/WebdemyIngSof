import React, { Component } from 'react';


import {
  Link
} from "react-router-dom";

var cursos = [];

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

  componentDidMount() {
    this.fetchCourse();
  }

  fetchCourse(){
    fetch('/api/cursos/cursos')
        .then(res => res.json())
        .then(data => {
            cursos = data;
        });
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
    var filtracion0= cursos.filter(curso =>curso.nombreEtiqueta.includes(this.nombreAbuscar) ||
    this.nombreAbuscar === "" );

    let hash = {};
    var filtracion = filtracion0.filter(curso=>hash[curso.id_curso]? false : hash[curso.id_curso]=true);

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
      <div>
        <form className='filtro' onSubmit={this.handleSubmit} >
            <label>
              Filtro de cursos:
              <input type="text"  value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Filtrar"/>
            </label>
            
          </form>

        <div className="carruPrincial" >
          <div className="carruIzq">
            {this.estadoBotIzq ? <button className="Bt-Flecha1" onClick={this.flechaIqzClickada}>
            
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
                      <Link className='linkInial' to={`/Inicio/${curso.id_curso}`}>
                        <div key={curso.id_curso}>
                            <h3>{curso.nombreCurso}</h3>
                            <br />                    
                            <img id="imagenCursoRed" src={`${process.env.PUBLIC_URL}/assets/imagenes/${curso.imagen}`}></img>
                            <br />
                            {curso.fechaCreacion}
                            <br />
                            Inscritos: {curso.inscritos}
                            <br />
                            Tutor de curso 
                        </div>
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
            </button> : null}
            
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
