import Layout from "@/components/Layout"
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Client";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 35, '2'),
    new Cliente('Carlos', 40, '3'),
    new Cliente('Pedro', 64, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  return (
    <>
      <div
        className={`
            flex justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white
          `}
      >
        <Layout titulo="Cadastro Simples">
          <Tabela clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
          ></Tabela>
        </Layout>
      </div>
    </>
  );
}
