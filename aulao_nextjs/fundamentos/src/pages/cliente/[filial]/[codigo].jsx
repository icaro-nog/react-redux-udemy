import Layout from "@/src/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
 
export default function ClienteProCodigo(){

    const router = useRouter()

    useEffect(() => {
        console.log(router.query.codigo)
    })

    return (
        <Layout titulo="Navegação dinâmica">
            <div>
                Código = {router.query.codigo}
            </div>
            <div>
                Filial = {router.query.filial}
            </div>
        </Layout>
    )
}