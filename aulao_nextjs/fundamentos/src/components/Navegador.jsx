import Link from "next/link"
import '../styles/Navegador.modules.css'

export default function Navegador(props){
    return (
        <Link
            href={props.destino}
        >
            <div
                className="navegador"
                style={{
                    backgroundColor: props.cor ?? 'dodgerblue'
                }}
            >
                {props.texto}
            </div>
        </Link>
    )
}