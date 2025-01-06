import React from 'react';
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export function App(props) {
    return (
        <div id='app'>
            <h1>Fundamentos React</h1>
            Olá josnelllllll
            <br></br>
            <Fragmento></Fragmento>
            <ComParametro
                situacao='situacao do aluno'
                aluno='Pedro'
                nota={9.3}
            ></ComParametro>
            <Primeiro></Primeiro>
        </div>
    )
}