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
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export function App(props) {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>
            Olá josnelllllll
            <br></br>

            <div className='Cards'>

                <Card
                    titulo='#13 - Desafio mega-sena'
                    color='#ffcdd2'
                >
                    <Mega></Mega>
                </Card>

                <Card
                    titulo='#12 - Contador'
                    color='#ff5733'
                >
                    <Contador
                        numeroInicial={10}
                    ></Contador>
                </Card>

                <Card
                    titulo='#11 - Input'
                    color='#311b92'
                >
                    <Input></Input>
                </Card>

                <Card
                    titulo='#10 - Comunicação indireta'
                    color='#f50057'
                >
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card
                    titulo='#09 - Comunicação direta'
                    color='#ffcdd2'
                >
                    <DiretaPai></DiretaPai>
                </Card>

                <Card
                    titulo='#08 - Renderização Condicional'
                    color='#ff5733'
                >
                    <ParOuImpar
                        numero={21}
                    ></ParOuImpar>
                    <UsuarioInfo
                        usuario={{ nome: 'Ícaro' }}
                    ></UsuarioInfo>
                </Card>

                <Card
                    titulo='#07 - Tabela produtos'
                    color='#311b92'
                >
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card
                    titulo='#06 - Repetição'
                    color='#f50057'
                >
                    <ListaAlunos></ListaAlunos>
                </Card>

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