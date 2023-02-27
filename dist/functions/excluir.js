"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluir = void 0;
const produtos_1 = require("../database/produtos");
function excluir(id) {
    const indexProduto = produtos_1.listaProdutos.findIndex((item) => item.id === id);
    if (indexProduto === -1) {
        console.log('Produto não encontrado!');
        return;
    }
    const [produtoDeletado] = produtos_1.listaProdutos.splice(indexProduto, 1);
    console.log("Item excluido com sucesso");
    console.log(produtoDeletado);
}
exports.excluir = excluir;
