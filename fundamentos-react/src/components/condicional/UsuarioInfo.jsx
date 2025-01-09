import React from "react";
import If, { Else } from "./If";

export default function UsuarioInfo(props){

    const usuario = props.usuario || {}

    return (
        <div>
            {/* <If test={usuario && usuario.nome} >
                Seja bem vindo <strong> {props.usuario.nome} </strong>!
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong> sem nome </strong>!
            </If> */}

            <If test={usuario && usuario.nome} >
                Seja bem vindo <strong> {props.usuario.nome} </strong>!
                <Else>
                    Seja bem-vindo <strong>anônimo</strong>!
                </Else>
            </If>
        </div>
    )
}