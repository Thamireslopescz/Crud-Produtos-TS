"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarProdutosPreco = void 0;
const produtos_1 = require("../database/produtos");
function listarProdutosPreco(valorMinimo, valorMaximo) {
    const novaListaPreco = produtos_1.listaProdutos.filter((item) => item.preco >= valorMinimo && item.preco <= valorMaximo).map((item) => {
        return {
            nome: item.nome,
            preco: item.preco
        };
    });
    console.log(novaListaPreco);
}
exports.listarProdutosPreco = listarProdutosPreco;
