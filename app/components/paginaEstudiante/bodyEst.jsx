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

    render() {
        return(
            <div className="fondoEst">
                <div>
                    <button className="btnIconos">
                        <i className="fa fa-search" ></i>
                    </button>
                    <input type="text" placeholder="Buscador de Cursos" className="inputPagEst"/>
                    <p> Ordenar cursos </p>
                </div>
                <p> Mis cursos: </p>
                <div className="contCursosEst">
                    {
                        this.sacar().map(curso => {
                            return(
                            <div>
                                <button className="elementos-carrusel" onClick={this.refrescarPagina}>
                                    <Link className='linkInial' to={`/Inicio/${curso.id_curso}`} > 
                                        <div key={curso.id_curso} className="linkCursoEst">
                                            <div>
                                                <img id="imagenCursoRed" src={`${process.env.PUBLIC_URL}/assets/imagenes/${curso.imagen}`}></img>
                                            </div>
                                            <div>
                                                <h3>{curso.nombreCurso}</h3>                  
                                                <div className="curseDescription">
                                                    Actualizacion: {this.cortar(curso.created_at) }
                                                    <br />
                                                    Inscritos: { curso.inscritos }
                                                    <br />
                                                    Tutor: {curso.nomT} {curso.apellT}
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