"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarTudo = void 0;
const produtos_1 = require("../database/produtos");
;
function listarTudo() {
    const estoque = produtos_1.listaProdutos.map((item) => {
        return {
            id: item.id,
            nome: item.nome,
            preco: item.preco,
            quantidade: item.quantidade,
        };
    });
    const soma = estoque.reduce((somaEstoqueR, item) => somaEstoqueR += (item.preco * item.quantidade), 0);
    console.log(estoque);
    console.log(`O valor total em estoque é de ${soma}`);
}
exports.listarTudo = listarTudo;
