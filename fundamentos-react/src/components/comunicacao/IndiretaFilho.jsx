import React from "react";

const IndiretaFilho = props => {

    const min = 50
    const max = 70

    const gerarIdade = () => parseInt(Math.random() * (max)) + min
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button
                onClick={ e => props.quandoClicar('João', gerarIdade(), gerarNerd()) }
            >Fornecer informações</button>
        </div>
    )
}

export default IndiretaFilho;