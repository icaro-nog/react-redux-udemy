import React from "react";

const QtdInput = (props) => {
    return (
        <div>
            <label htmlFor="qtdInput">Quantidade: </label>
            <input 
                type="number" 
                name="qtdInput" 
                id="qtdInput" 
                value={props.qtd}
                onChange={(e) => props.setarInputNum(e.target.value)}
            />
        </div>
    )
}

export default QtdInput;