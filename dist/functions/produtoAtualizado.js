"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarProduto = void 0;
const produtos_1 = require("../database/produtos");
const teste = {};
function atualizarProduto(id, novosdados) {
    const { categoria, preco, genero, nome, quantidade } = novosdados;
    if (!categoria && !genero && !nome && !preco && !quantidade) {
        console.log("Os dados estão vazios.");
        return;
    }
    const indexProduto = produtos_1.listaProdutos.findIndex((item) => item.id === id);
    if (indexProduto === -1) {
        console.log("Produto não encontrado.");
        return;
    }
    const dadosAntigos = produtos_1.listaProdutos[indexProduto];
    produtos_1.listaProdutos[indexProduto].categoria = categoria !== null && categoria !== void 0 ? categoria : dadosAntigos.categoria;
    produtos_1.listaProdutos[indexProduto].preco = preco !== null && preco !== void 0 ? preco : dadosAntigos.preco;
    produtos_1.listaProdutos[indexProduto].genero = genero !== null && genero !== void 0 ? genero : dadosAntigos.genero;
    produtos_1.listaProdutos[indexProduto].nome = nome !== null && nome !== void 0 ? nome : dadosAntigos.nome;
    produtos_1.listaProdutos[indexProduto].quantidade = quantidade !== null && quantidade !== void 0 ? quantidade : dadosAntigos.quantidade;
}
exports.atualizarProduto = atualizarProduto;
