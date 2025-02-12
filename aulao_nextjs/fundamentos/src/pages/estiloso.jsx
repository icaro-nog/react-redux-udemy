import '../styles/Estiloso.modules.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso(){
    return (
        <Layout titulo="Exemplo de CSS modularizado">
            <div className='roxo'>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}