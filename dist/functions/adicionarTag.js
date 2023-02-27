"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarTag = void 0;
const produtos_1 = require("../database/produtos");
function adicionarTag(id, tags) {
    const index = produtos_1.listaProdutos.findIndex((item) => item.id === id);
    if (index === -1) {
        console.log('Produto não encontrado!');
        return;
    }
    const { categoria } = produtos_1.listaProdutos[index];
    tags.forEach((item) => {
        if (categoria.tag.includes(item)) {
            console.log(`Tag ${item} já cadastrada`);
        }
        else {
            categoria.tag.push(item);
        }
    });
}
exports.adicionarTag = adicionarTag;
