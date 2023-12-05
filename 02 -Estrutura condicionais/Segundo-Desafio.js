/*   Faça um programa para calcular o valor gasto de uma viagem.
Você terá 5 variâvel.

Sendo elas:
-   1 Preço do etanol;
-   2 Preço da gasolina;
-   3 o Tipo de combustível que está no seu carro;
-   4 Gasto médio de combustível do carro por KM;
-   5 Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível  para realizar esta viagem. */


const precoEtanol = 4.00;

const precoGasolina =4.88;

/* Como e tipo aqui usamos uma fomato de texto, uma string para definir qual tipo de combustivel usamos.*/
const tipodecombustivel = 'Etanol';

const kmPorLitro = 10;

const distanciaPercorrida= 100;
const listroConsumidos = distanciaPercorrida / kmPorLitro;


if (tipodecombustivel === 'Etanol'){
    const valorGasto= listroConsumidos*precoEtanol;
console.log("Valor gasto em viagem com Etanol :",valorGasto.toFixed(2));
} /* Gasto feito por gasolina */
else {
        const valorGasto= listroConsumidos*precoGasolina;
        console.log("Valor gasto em viagem com Gasolina:",valorGasto.toFixed(2));
    }









