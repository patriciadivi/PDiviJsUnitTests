const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function')
    // Teste se o retorno da função é um array.
    expect(Array.isArray([productDetails()])).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(productDetails()).length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const items = productDetails('Alcool gel', 'Máscara');
    expect(typeof Object.values(items)[0] && typeof Object.values(items)[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // expect(items[0] !== items[1]).toBeTruthy();
    expect(items[0]).not.toEqual(items[1])
    // Teste se os dois productIds terminam com 123.
    let productIdsString1 = items[0].details.productId
    let productIdsString2 = items[1].details.productId
    // expect(productIdsString1.substring(productIdsString1.length -3) && productIdsString2.substring(productIdsString2.length -3)).toBe('123');
    // expect(productIdsString1.substring(productIdsString1.length - 3) === productIdsString2.substring(productIdsString2.length - 3)).toBeTruthy();
    // expect(productIdsString1.substring(productIdsString1.length - 3)).toEqual(productIdsString2.substring(productIdsString2.length - 3));
    expect(productIdsString1.substring(productIdsString1.length -3) && productIdsString2.substring(productIdsString2.length -3)).toMatch('123');
  });
});