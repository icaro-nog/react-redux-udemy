import Link from 'next/link'
import '../styles/Layout.modules.css'

export default function Layout(props){
    return (
        <div className='layout'>
            <div className='cabecalho'>
                <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
                <Link
                    href="/"
                >Voltar</Link>
            </div>
            <div className='conteudo'>
                {props.children}
            </div>
        </div>
    )
}