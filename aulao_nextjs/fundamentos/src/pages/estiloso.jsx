import '../styles/Estiloso.modules.css'
import Link from 'next/link'

export default function Estiloso(){
    return (
        <div className='roxo'>
            <Link
                href="/"
            >Index</Link>
            <h1>Estilo usando CSS Módulos</h1>
        </div>
    )
}