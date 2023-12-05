/* O IMC  - Indice de Massa Corporal é um criterio da Organização Mundial de Saúde para dar
uma indicação  sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore  um algoritimo que dado o peso e a altura de adulto mostre sua condição de acordo com a 
tabela abaixo.

IMC em  adultos Condição:

- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
 
 Se cuide !!!!

 */
 function calcularImc(peso,altura){
    return peso / Math.pow(altura, 2);

 }

    function classificaçãoImc(imc){

    if (imc < 18.5) {
        return 'Abaixo do peso';
    
    } else if (imc >=18.5 && imc <25 ){
        return 'Peso normal';
    } else if ( imc >= 25 && imc <30){
        return 'Acima do peso';
    } else if ( imc >= 30 && imc < 40){
        return 'Obeso';

    }
}
(
function (){
const peso = 75;
const altura = 1.75;

const imc = calcularImc(peso,altura);

console.log(classificaçãoImc(imc));
})();




