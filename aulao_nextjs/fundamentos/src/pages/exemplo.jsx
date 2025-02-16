import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo(){
    return (
        <Layout titulo="Usando componentes">
            <Cabecalho titulo="cabecalho 1" ></Cabecalho>
            <Cabecalho titulo="cabecalho 2" ></Cabecalho>
        </Layout>
    )
}