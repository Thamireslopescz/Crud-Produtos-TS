import { listaProdutos } from "../database/produtos";;

function listarTodosProdutos(categoriaNome: string) {
    const novaLista = listaProdutos.filter((item) => item.categoria.nome.toUpperCase() === categoriaNome.toUpperCase())

    const mostarNovaLista = novaLista.map(({ nome, quantidade }) => {
        return {
            nome,
            quantidade
        }
    })

    console.log(mostarNovaLista);


}
export { listarTodosProdutos };