import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){

    const n = parseInt(num)

    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n -1) * n
}

function validaParImpar(valor){
    const n = parseInt(valor);

    return (n % 2 === 0);
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    const [parImpar, setParImpar] = useState(0);
    const [status, setStatus] = useState('Ímpar');

    useEffect(function(){
        setFatorial(calcFatorial(number))
        setStatus(validaParImpar(parImpar))
    }, [number, parImpar])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle
                title="Exercício #01"
            ></SectionTitle>
            <div className="center">
                <div>
                    <span
                        className='text'
                    >Fatorial:</span>
                    <span
                        className='text red'
                    >{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input 
                    type="number" 
                    className='input'
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle
                title="Exercício #02"
            ></SectionTitle>
            <div
                className='center'
            >
                <div>
                    <span
                        className='text'
                    >Status:</span>
                    <span
                        className='text red'
                    >{status ? 'Par' : 'Ímpar'}</span>
                </div>
                <input 
                    type="number" 
                    className='input'
                    value={parImpar}
                    onChange={e => setParImpar(e.target.value)}
                />

            </div>
        </div>

    )
}

export default UseEffect
