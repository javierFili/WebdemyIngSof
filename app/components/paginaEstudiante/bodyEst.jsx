import React, { Component } from 'react';

class VistaEst extends Component{
    render() {
        return(
            <div className="fondoEst">
                <div>
                    <input type="text" placeholder="Buscador de Cursos" className="inputPagEst"/>
                    <p> Ordenar cursos </p>
                </div>
                <p> Mis cursos: </p>
                <div className="contCursosEst">
                    <div>
                        <p> Curso1 </p>
                    </div>
                    <div>
                        <p> Curso2 </p>
                    </div>
                    <div>
                        <p> Curso3 </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default VistaEst