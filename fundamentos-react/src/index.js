import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


const div = ReactDOM.createRoot(document.getElementById('root'))
div.render(
    <div>
        Olá josnelllllll
        <br></br>
        <Primeiro></Primeiro>
        <ComParametro
            situacao='situacao do aluno'
            aluno='Pedro'
            nota={9.3}
        ></ComParametro>
        <Fragmento></Fragmento>
    </div>
)