import React from "react"
import Situacion from "./Situacion"
import Opciones from "./Opciones"
import Historial from "./Historial"
import data from '../data.json'

const opcionesA = data.filter(opcion => opcion.id.includes("a"));
const opcionesB = data.filter(opcion => opcion.id.includes("b"));

export default class Contenedor extends React.Component{
    constructor(){
        super();
        this.state = {
          situacionActual : data[0],
          situacion: 0,
          historial : [],
          seleccionPrevia: ""
        };

        this.handleOnClickA = this.handleOnClickA.bind(this);
        this.handleOnClickB = this.handleOnClickB.bind(this);
    }


omponentDidUpdate(    cprevProps, prevState){
        if(prevState.situacion !== this.state.situacion){
            let nuevoHistorial = this.state.historial;
            nuevoHistorial.push(this.state.seleccionPrevia)
            this.setState({
                historial : nuevoHistorial
            })
        }
    }

    handleOnClickA(){
        if(this.state.situacion<opcionesA.length){
            this.setState({
                seleccionPrevia : "A"
            })
        
            if(this.state.situacionActual !== data[0]){
                this.setState({
                    situacionActual : opcionesA[this.state.situacion],
                    situacion : this.state.situacion+1
                })
            }else{
                this.setState({
                    situacionActual : opcionesA[0],
                    situacion : 1
                })
            }
        }else{
            alert("Fin")
        }
    }
    
    handleOnClickB(){
        if(this.state.situacion<opcionesB.length){
            this.setState({
                seleccionPrevia : "B"
            })
        
            if(this.state.situacionActual !== data[0]){
                this.setState({
                    situacionActual : opcionesB[this.state.situacion],
                    situacion : this.state.situacion+1
                })
            }else{
                this.setState({
                    situacionActual : opcionesB[0],
                    situacion : 1
                })
            }
        
        }else{
            alert("Fin")
        }
      }

    render(){
        return(
            <div className="layout">
                <Situacion texto = {this.state.situacionActual.historia}/>
                <Opciones decisiones = {this.state.situacionActual.opciones} handleOnClickA = {this.handleOnClickA} handleOnClickB = {this.handleOnClickB}/>
                <Historial historial = {this.state.historial} seleccionPrevia = {this.state.seleccionPrevia} />
            </div>
        )
    }
}