import React, {Component} from "react";
import { Link } from "react-router-dom";

class Inicio extends Component{
    constructor(props){
        super(props);
        this.state = {
            curso: props.id_curso,
            objCurso: {},
            modulos: [],
            etiquetas: [],
            ruta: ''
        }
        this.refrescar = this.refrescar.bind(this);
    }


    componentDidMount() {
        this.fetchCourse();
        this.fetchModules();
        this.fetchTags();
    }

    fetchCourse(){   /**/ 
        fetch(`/api/cursos/${this.state.curso}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                  objCurso: data,
                  ruta: `../../imagenes/${data.imagen}`
                });
            });
    }

    fetchModules(){
        fetch(`/api/cursos/${this.state.curso}/modulos`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                  modulos: data
                });
            });
    }

    fetchTags(){
        fetch(`/api/cursos/${this.state.curso}/etiquetas`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                  etiquetas: data
                });
            });
    }

    refrescar(params) {
        window.location.href = window.location.href;    
    }

    render() {
        return(
            <div>
                <div className="deDebajoDeBody">
                    <img id="imagenCurso" src={`${process.env.PUBLIC_URL}/assets/imagenes/${this.state.objCurso.imagen}`}></img>
                    <div className="contenedor">
                        <div>
                            <div id="nombreCurso"> {this.state.objCurso.nombre} </div>
                        </div>
                        <div>
                            <button id="btnVolver" onClick={this.refrescar}>
                                <Link className='linkInial' to='/' >
                                     Volver 
                                </Link>   
                            </button> 
                        </div>
                    </div>   
                </div>

                <div className="container-flulid">
                    <div className="contenedor">
                        <div>
                            <p className="tituloCursos">Descripcion del curso</p>
                            <div className='contenidoCaja'>
                                    {this.state.objCurso.descripcion}
                            </div>

                            <p className="tituloCursos">Requisitos</p>
                            <div className='contenidoCaja'>
                                    {this.state.objCurso.requisitos}
                            </div>

                            <p className="tituloCursos">Tutor del curso</p>
                            <div className='contenidoCaja'>
                                Informacion Tutor
                            </div>
                            <p className="infoCursos"> Duracion del curso: {this.state.objCurso.duracion} dias</p>
                            <p className="infoCursos"> Actualizacion: {this.state.objCurso.fechaCreacion} </p>
                            <div className="tituloCursos">Palabras Clave</div>
                            <ul>
                                {
                                    this.state.etiquetas.map((etiqueta) => {
                                        return(
                                            <div className="etiqueta"> {etiqueta.nombre} </div>                 
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <p className="tituloCursos">Contenido del curso: </p>
                            <div className='contenidoCurso' >
                                <ul>
                                    {
                                        this.state.modulos.map((modulo) => {
                                            return(
                                                <div className="modulo"> {modulo.nombre} </div>                 
                                            )
                                            })
                                    }
                                </ul>
                            </div>
                        </div >
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Inicio;


