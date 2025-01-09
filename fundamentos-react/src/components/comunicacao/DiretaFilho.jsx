import React from "react";

const DiretaFilho = props => {
    return (
        <div>
            <div>{props.nome}</div>
            <div>{props.idade}</div>
            <div>{props.nerd ? 'Verdadeiro' : 'False' }!</div>
        </div>
    )
}

export default DiretaFilho;