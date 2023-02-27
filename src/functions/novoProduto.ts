import { Tag, Produto, Categoria, Genero } from "../types";
import { listaProdutos } from "../database/produtos";

function novoProduto(produto: Produto) {
    
    let existe = listaProdutos.some((item) => item.nome === produto.nome)

    if (existe) {
        console.log('Esse produto já existe')
        return
    }

    listaProdutos.push(produto)
}

export {novoProduto};