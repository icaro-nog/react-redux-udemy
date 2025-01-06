import React from 'react';
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from './components/basicos/NumeroAleatorio';
import Card from './components/layout/Card';

export function App(props) {
    return (
        <div id='app'>
            <h1>Fundamentos React</h1>
            Olá josnelllllll
            <br></br>

            <Card 
                titulo='#04 - Desafio aleatório'
            >
                <NumeroAleatorio
                    min={10}
                    max={20}
                ></NumeroAleatorio>
            </Card>

            <Card 
                titulo='#03 - Fragmento'
            >
                <Fragmento></Fragmento>
            </Card>

            <Card 
                titulo='#02 - Parametro'
            >
                <ComParametro
                    situacao='situacao do aluno'
                    aluno='Pedro'
                    nota={9.3}
                ></ComParametro>
            </Card>

            <Card 
                titulo='#01 - Primeiro componente'
            >
                <Primeiro></Primeiro>
            </Card>

        </div>
    )
}