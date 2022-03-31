import React from "react";

export default class Opciones extends React.Component{

    //recibe el objeto de opciones
    render(){
        return(
            //tiene que renderizar dos botones con una opcion cada uno
            <div className="opciones">
                <div className="opcion">
                    <button className="botones" id="A" onClick={()=>this.props.handleOnClickA()}>A</button>
                    <h2>{this.props.decisiones.a}</h2>
                </div>
                <div className="opcion">
                    <button className="botones" id="B" onClick={()=>this.props.handleOnClickB()}>B</button>
                    <h2>{this.props.decisiones.b}</h2>
                </div>
            </div>
        )
    }
}