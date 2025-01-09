import React from "react";
import DiretaFilho  from "./DiretaFilho";

const DiretaPai = props => {
    return (
        <div>
            <DiretaFilho
                nome='Gabriel'
                idade={20}
                nerd={true}
            ></DiretaFilho>

            <DiretaFilho
                nome='Vanessa'
                idade={22}
                nerd={false}
            ></DiretaFilho>
        </div>
    )
}

export default DiretaPai;