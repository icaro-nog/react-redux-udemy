import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props){
    return (
        <div>
            <FamiliaMembro 
                nome='Pedro'
                sobrenome={props.sobrenome}
            ></FamiliaMembro>
            <FamiliaMembro
                nome='Ana'
                {...props}
            ></FamiliaMembro>
            <FamiliaMembro
                nome='Juca'
                sobrenome='Lemos'
            ></FamiliaMembro>
        </div>
    )
}