import React from "react";   //tambien se podria import { component } from "react"


// recordar exporta la clase, puede ser al inicio o como linea de codigo al final en caso de tener mas funciones
// export default tendre que importar SIN llaves {}, si hay varios componenest todos se hacen entre llaves separados por una ,
export class ClassComponent extends React.Component {
    render(){                       
        return(
            <div>
                <h1>Componente de clase</h1>
            </div>
            )
    }
}

export class OtroComponente extends React.Component {
    render(){                       
        return(
            <div>
                <h1> OTRO Componente de clase</h1>
            </div>
            )
    }
}

// export {ClassComponent, OtroComponente}          es otra forma de exprtar al final