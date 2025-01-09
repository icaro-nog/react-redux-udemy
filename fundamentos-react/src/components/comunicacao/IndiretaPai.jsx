import React from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = props => {

    let nome = '?'
    let idade = 0
    let nerd = false

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam

        console.log(nomeParam, idadeParam, nerdParam)
    }

    return (
        <div>
            <div>
                <span>{nome}</span>
                <span>{idade}</span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho
                quandoClicar={fornecerInformacoes}
            ></IndiretaFilho>
        </div>
    )
}

export default IndiretaPai;