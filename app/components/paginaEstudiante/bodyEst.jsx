import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './bodyEst.css'

class VistaEst extends Component{
    constructor(props){
        super(props);
        this.state = {
            usuario: props.id_usuario,
            cursos: []
        }
        this.fetchCourse = this.fetchCourse.bind(this);
        this.cortar = this.cortar.bind(this);
        this.refrescarPagina = this.refrescarPagina.bind(this);
        this.listOrd = this.listOrd.bind(this);
        this.ordAlf = this.ordAlf.bind(this);
        this.ordFecha = this.ordFecha.bind(this);
    
        this.nombreAbuscar = "";
    }

    componentDidMount(){
        this.fetchCourse();
    }

    fetchCourse(){
        fetch('/api/cursos/cursos') //Se cargan los datos de todos los cursos, para pruebas
            .then(res => res.json())
            .then(data => {
                this.setState({cursos: data});
            });
    }

    cortar(obj){
        let text = JSON.stringify(obj);
        return text.slice(1,11);
    }

    sacar() {
    
        var filtracion0= this.state.cursos.filter(curso =>curso.nombreEtiqueta.includes(this.nombreAbuscar) ||
        this.nombreAbuscar === "" );
    
        let hash = {};
        var filtracion = filtracion0.filter(curso=>hash[curso.id_curso]? false : hash[curso.id_curso]=true);
        return filtracion;
    }

    refrescarPagina(){
        window.location.href = window.location.href;
    }

    listOrd(){
        console.log("Se muestra lista");
        var x = document.getElementById("listaOrden");
        if (x.className.indexOf("w3-show") == -1) { 
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    ordAlf(){
        this.fetchCourse();
    }
    ordFecha(){
        this.setState({cursos: []}); /* Ejemplo de funcionamiento */
    }

    render() {
        return(
            <div className="fondoEst">
                <div>
                    <div className="w3-cell-row">
                        <div className="w3-container w3-cell w3-cell-middle buscador">
                            <button className="btnIconos">
                                <i className="fa fa-search w3-xxlarge" ></i>
                            </button>
                            
                            <input type="text" placeholder="Buscador de Cursos" className="inputPagEst"/>
                        </div>
                        
                        <div className="w3-container w3-cell w3-cell-middle txtOrden" >
                            <p id="txtOrdCursos"> Ordenar cursos </p> 
                        </div>

                        <div className="w3-container w3-cell w3-cell-middle iconoOrd">
                            <button className="btnIconos w3-button" onClick={this.listOrd}>
                                <i className="fa fa-bars w3-xxlarge" ></i>
                            </button>
                            <div id="listaOrden" className="w3-dropdown-content w3-bar-block w3-border">
                                <button onClick={this.ordAlf} className="w3-bar-item w3-border opcionDropd">Alfabeticamente</button>
                                <button onClick={this.ordFecha} className="w3-bar-item w3-border opcionDropd">Por fecha creac.</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <p id="textMisCursos"> Mis cursos: </p>
                <div className="contCursosEst">
                    {
                        this.sacar().map(curso => {
                            return(
                            <div>
                                <button className="elementosLista" onClick={this.refrescarPagina}>
                                    <Link className='linkInial' to={`/Inicio/${curso.id_curso}`} > 
                                        <div key={curso.id_curso} className="linkCursoEst">
                                            <div className="w3-cell-row">
                                                <div className="w3-container w3-cell w3-cell-middle imagenCur">
                                                    <img id="imagenCursoRed" src={`${process.env.PUBLIC_URL}/assets/imagenes/${curso.imagen}`}></img>
                                                </div>
                                                <div className="w3-container w3-cell w3-cell-middle infoCur">
                                                    <p className="tituloCurs">{curso.nombreCurso}</p>                  
                                                    <div>
                                                        <div className="w3-cell-row">
                                                            <div className="w3-cell">
                                                                Actualizacion: {this.cortar(curso.created_at) }
                                                            </div>
                                                            <div className="w3-cell">
                                                                Tutor: {curso.nomT} {curso.apellT}
                                                            </div>
                                                        </div>
                                                        <p> Objetivo curso </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link> 
                                </button>
                            </div>                  
                            )
                            })
                    }
                </div>
            </div>
        )
    }
}
export default VistaEst