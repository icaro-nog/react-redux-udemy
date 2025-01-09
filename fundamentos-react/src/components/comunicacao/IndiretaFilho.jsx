import React from "react";

const IndiretaFilho = props => {
    return (
        <div>
            <div>Filho</div>
            <button
                onClick={ e => props.quandoClicar('João', 53, true) }
            >Fornecer informações</button>
        </div>
    )
}

export default IndiretaFilho;