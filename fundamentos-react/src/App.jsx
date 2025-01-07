import React from 'react';
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from './components/basicos/NumeroAleatorio';
import Card from './components/layout/Card';
import './App.css'
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';

export function App(props) {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>
            Olá josnelllllll
            <br></br>

            <div className='Cards'>

                <Card 
                    titulo='#05 - Componente com Filhos'
                    color='#ffcdd2'
                >
                    <Familia 
                        sobrenome='Ferreira'
                    >
                        <FamiliaMembro 
                            nome='Pedro'
                        ></FamiliaMembro>
                        <FamiliaMembro
                            nome='Ana'
                        ></FamiliaMembro>
                        <FamiliaMembro
                            nome='Juca'
                        ></FamiliaMembro>
                    </Familia>
                </Card>

                <Card 
                    titulo='#04 - Desafio aleatório'
                    color='#ff5733'
                >
                    <NumeroAleatorio
                        min={10}
                        max={20}
                    ></NumeroAleatorio>
                </Card>

                <Card 
                    titulo='#03 - Fragmento'
                    color='#311b92'
                >
                    <Fragmento></Fragmento>
                </Card>

                <Card 
                    titulo='#02 - Parametro'
                    color='#f50057'
                >
                    <ComParametro
                        situacao='situacao do aluno'
                        aluno='Pedro'
                        nota={9.3}
                    ></ComParametro>
                </Card>

                <Card 
                    titulo='#01 - Primeiro componente'
                    color='#ffcdd2'
                >
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}