import React from "react";

export default function FamiliaMembro(props){

    return (
        <div>
            <span>
                {props.nome} 
                <strong>
                    {props.sobrenome}
                </strong>
            </span>
        </div>
    )
    
}