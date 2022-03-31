import React from "react";

export default class Historial extends React.Component{


    renderizarElementos(){
        return this.props.historial.map((opcion, index) => {
              return (
                <li key={index}>
                  {opcion}
                </li>
              );
            });
        
    }

    render(){
        return(
            <div className="recordatorio">
                <h3>Seleccion previa: {this.props.seleccionPrevia}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>  
                    {this.renderizarElementos()}
                </ul>
            </div>
        )
    }
}