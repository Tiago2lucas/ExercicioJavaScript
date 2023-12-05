
/*   Faça um programa para calcular o valor gasto de uma viagem.
Você terá 3 variâvel.

Sendo elas:
-   1 Preço do combustível;
-   2 Gasto médio de combustível do carro por KM;
-   3 Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível  para realizar esta viagem. */


/* 1  Preço do combustível*/
const precoCombus= 5.79;

/* Quantidade que ele anda com combustível*/

let kmPorLitros = 12;

/* Distância em KM da viagem */
let distanciEmKm=1580; 

 /* Calculando a media de gastos */
 /* */
const listroConsumidos = distanciEmKm / kmPorLitros;

const gastoDeViagem= listroConsumidos*precoCombus;

console.log( "valor gasto de uma viagem:",gastoDeViagem.toFixed(2));






