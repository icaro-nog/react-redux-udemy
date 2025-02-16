import Navegador from '../components/Navegador'

export default function Inicio(){
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                height: '100vh'
            }}
        >
            <Navegador
                texto="Estiloso"
                destino="/estiloso"
            >
            </Navegador>
            <Navegador
                texto="Exemplo"
                destino="/exemplo"
                cor="pink"
            >
            </Navegador>
            <Navegador
                texto="Jsx"
                destino="/jsx"
                cor="crimson"
            >
            </Navegador>
            <Navegador
                texto="Navegação #01"
                destino="/navegacao"
                cor="green"
            >
            </Navegador>
        </div>
    )
}