import React from "react"

export default class Historia extends React.Component {
    //recibe la historia
    render(){
        return(
            <h1 className="historia">
                {this.props.texto}
            </h1>
        )
    }
}