import ColecaoCliente from "@/backend/db/ColecaoCliente"
import ClienteRepositorio from "@/core/ClienteRepositorio"
import { useEffect, useState } from "react"
import useTabelaOuForm from "./useTabelaOuForm"
import Cliente from "@/core/Client";

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm()
    
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente>([])

    useEffect(obterTodos, [])

    function obterTodos(){
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente){
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente(){
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    return {
        cliente,
        clientes,
        salvarCliente,
        novoCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}