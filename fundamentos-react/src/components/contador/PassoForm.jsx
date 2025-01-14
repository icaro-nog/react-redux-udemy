import React from "react";

const PassoForm = (props) => {
    return (
        <div>
            <div>
                <label htmlFor="passoInput">Passo: </label>
                <input 
                    type="number" 
                    name="passoInput" 
                    id="passoInput" 
                    value={props.passo}
                    // + para converter o valor recebido para um inteiro
                    onChange={e => props.setChangePasso(+e.target.value)}
                />
            </div>
        </div>
    )
}

export default PassoForm