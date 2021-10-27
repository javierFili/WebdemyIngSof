import React, {Component} from "react";
import { useParams } from "react-router-dom";

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
        this.imprimirEstado = this.imprimirEstado.bind(this);
    }


    componentDidMount() {
        this.fetchCourse();
        this.fetchModules();
        this.fetchTags();
    }

    fetchCourse(){
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

    imprimirEstado(){
        console.log(this.state);
    }

    render() {
        return(
            
            <div>
                <div id="presentacionCurso">
                    <h1> {this.state.objCurso.nombre} </h1>
                   <img id="imagenCurso" src={`${process.env.PUBLIC_URL}/assets/imagenes/${this.state.objCurso.imagen}`}></img>
                </div>
                <div className="container-flulid">

                </div>
                <h1> {this.state.curso} </h1>
                <h1> {this.state.objCurso.nombre} </h1>
                <h1> {this.state.objCurso.descripcion} </h1>
                <ul>
                    {
                        this.state.etiquetas.map((etiqueta) => {
                            return(
                                <h3> {etiqueta.nombre} </h3>                 
                            )
                            })
                    }
                </ul>
                <ul>
                    {
                        this.state.modulos.map((modulo) => {
                            return(
                                <h2> {modulo.nombre} </h2>                 
                            )
                            })
                    }
                </ul>
                <button onClick={this.imprimirEstado} >Click Me!</button>
            </div>
        )
    }
}

export default Inicio;


