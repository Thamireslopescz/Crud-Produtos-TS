import { listaProdutos } from '../database/produtos';
import { Produto } from '../types';

const teste: Partial<Omit<Produto, 'id' | 'nome'>> = {

}

function atualizarProduto(id: string, novosdados: Partial<Omit<Produto, 'id'>>) {
    const { categoria, preco, genero, nome, quantidade } = novosdados


    if (!categoria && !genero && !nome && !preco && !quantidade) {
        console.log("Os dados estão vazios.");
        return

    }

    const indexProduto = listaProdutos.findIndex((item) => item.id === id)

    if (indexProduto === -1) {
        console.log("Produto não encontrado.");
        return
    }

    const dadosAntigos = listaProdutos[indexProduto]

    listaProdutos[indexProduto].categoria = categoria ?? dadosAntigos.categoria
    listaProdutos[indexProduto].preco = preco ?? dadosAntigos.preco
    listaProdutos[indexProduto].genero = genero ?? dadosAntigos.genero
    listaProdutos[indexProduto].nome = nome ?? dadosAntigos.nome
    listaProdutos[indexProduto].quantidade = quantidade ?? dadosAntigos.quantidade

}


export {atualizarProduto};