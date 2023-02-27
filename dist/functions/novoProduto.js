"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.novoProduto = void 0;
const produtos_1 = require("../database/produtos");
function novoProduto(produto) {
    let existe = produtos_1.listaProdutos.some((item) => item.nome === produto.nome);
    if (existe) {
        console.log('Esse produto já existe');
        return;
    }
    produtos_1.listaProdutos.push(produto);
}
exports.novoProduto = novoProduto;
