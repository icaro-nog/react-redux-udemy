import React from "react";

export default function NumeroAleatorio(props) {

    // const min = props.min
    // const max = props.max 

    const { min, max } = props 
     
    const numeroAletorio = parseInt(Math.random() * (min - max) + min);

    return (
        <div>
            <p>
                O numero aleatório gerado entre <strong>{min}</strong> e <strong>{max}</strong>  é: <strong>{numeroAletorio}</strong>
            </p>
        </div>
    )
}