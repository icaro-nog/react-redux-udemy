import React, { useState } from "react";
import QtdInput from "./QtdInput";

const Mega = (props) => {

    
    const randomNumbers = [];
    
    const [qtd, setQtd] = useState(1);
    const [numerosMega, setNumerosMega] = useState([]);

    function quandoMudar(novoValor){
        setQtd(novoValor)
    }

    function gerarNumerosAleatorios(qtdInput){
        while(randomNumbers.length < parseInt(qtdInput)){
            let r = Math.floor(Math.random() * 100) + 1;
            if(randomNumbers.indexOf(r) === -1){
                randomNumbers.push(r)
            }

        }

        let concatRandomNumbers = randomNumbers
                                        .sort((n1, n2) => n1 - n2)
                                        .join(', ') 

        setNumerosMega(concatRandomNumbers)

        console.log(randomNumbers)
    }

    return (
        <div>
            
            <QtdInput
                setarInputNum={quandoMudar}
                qtd={qtd}
            ></QtdInput>

            <button 
                onClick={() => gerarNumerosAleatorios(qtd)}
            >Gerar surpresinha</button>
            <div >
                Numeros gerados: {numerosMega}
            </div>
        </div>
    )
}

export default Mega;