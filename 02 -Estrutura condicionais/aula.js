/*   Faça um programa para calcular o valor gasto de uma viagem.
Você terá 5 variâvel.

Sendo elas:
-   1 Preço do etanol;
-   2 Preço da gasolina;
-   3 o Tipo de combustível que está no seu carro;
-   4 Gasto médio de combustível do carro por KM;
-   5 Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível  para realizar esta viagem. */

const precoEtanol= 4.00;
const precoGasolina = 4.88;
/* Sempre quando for coloca um tipo de informação textual que tenha ja uma 
variavel como um nome dela, colo '' uma aspa e o nome dela sem ser igual a variavel dela*/
const tipodecombustivel = 'Etanol';
const kmPorLitro = 15;
const distanciaPercorrida= 120;

const listroConsumidos = distanciaPercorrida / kmPorLitro;




if( tipodecombustivel === 'Gasolina'){

    /* Valor em gasto por Gasolina na viagem*/
const valorGasto= listroConsumidos*precoGasolina;
    
    console.log("Litros Consumidos",listroConsumidos.toFixed());
    console.log("",valorGasto.toFixed(2));

} else{  const valorGasto= listroConsumidos*precoEtanol;
    console.log("Litros Consumidos",listroConsumidos.toFixed());
    console.log("",valorGasto.toFixed(2))

}    