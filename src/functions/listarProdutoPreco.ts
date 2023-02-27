import { listaProdutos } from "../database/produtos";

function listarProdutosPreco(valorMinimo: number, valorMaximo: number) {
    const novaListaPreco = listaProdutos.filter((item) => item.preco >= valorMinimo && item.preco <= valorMaximo).map((item) => {
        return {
            nome: item.nome,
            preco: item.preco
        }
    })
    console.log(novaListaPreco);

}

export {listarProdutosPreco};