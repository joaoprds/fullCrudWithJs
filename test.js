const { deepEqual, ok } = require('assert');

const dataBase = require('./dataBase')
const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
};

describe("Suite de manipulação de Heróis", () => {
    it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;
        const [resultado] = await dataBase.listar(expected.id);

        deepEqual(resultado, expected);
    });
    // it('deve cadastrar um heroi, utilizando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR;

    //     ok(null, expected)
    // })
});