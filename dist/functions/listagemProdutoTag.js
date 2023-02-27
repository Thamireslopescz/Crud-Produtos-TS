"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listagemProdutosTag = void 0;
const produtos_1 = require("../database/produtos");
function listagemProdutosTag(tagNome) {
    const novaLista = produtos_1.listaProdutos.filter((item) => {
        const existe = item.categoria.tag.some((tag) => tag === tagNome);
        return existe;
    });
    const somaTotal = novaLista.reduce((memo, item, index, array) => memo += (item.preco * item.quantidade), 0);
    console.log(novaLista.map(({ nome, quantidade }) => ({ nome, quantidade })));
    console.log(somaTotal);
}
exports.listagemProdutosTag = listagemProdutosTag;
