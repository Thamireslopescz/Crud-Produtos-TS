"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarTodosProdutos = void 0;
const produtos_1 = require("../database/produtos");
;
function listarTodosProdutos(categoriaNome) {
    const novaLista = produtos_1.listaProdutos.filter((item) => item.categoria.nome.toUpperCase() === categoriaNome.toUpperCase());
    const mostarNovaLista = novaLista.map(({ nome, quantidade }) => {
        return {
            nome,
            quantidade
        };
    });
    console.log(mostarNovaLista);
}
exports.listarTodosProdutos = listarTodosProdutos;
