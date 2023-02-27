import { listaProdutos } from "../database/produtos";;

function listarTudo() {

    const estoque = listaProdutos.map((item) => {
        return {
            id: item.id,
            nome: item.nome,
            preco: item.preco,
            quantidade: item.quantidade,

        }

    })

    const soma = estoque.reduce((somaEstoqueR, item) => somaEstoqueR += (item.preco * item.quantidade), 0)


    console.log(estoque);
    console.log(`O valor total em estoque é de ${soma}`);

}

export {listarTudo};