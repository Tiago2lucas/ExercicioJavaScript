/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.

Utilize os código da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o cálculo 
adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%

Obs: para conseguir fazer o calculo  e recebe o desconto ou o juros observe  abaixo a Fórmula.

percentual é = valor da variavel da etiqueta *(o valor de desconto ou juros/100)

Agora para colocamos o desconto mas o valor original da etique veja abaixo:

    variavel da etiqueta - ou +(variavel da etiqueta * o valor de desconto ou juros/100)



*/
/* 
1- À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;  */
function aplicarDesconto(valor,Desconto){

 return  valor - (valor *Desconto /100);

}

/*  Acima de duas vezes, preço normal de etiqueta mais juros de 10% */
function aplicarJuros(valor,juros){

    return  valor + (valor * juros /100);
}

const precoDaEtiqueta = 150;

const formaDePagamento = 4;

/*  À vista Débito, recebe 10% de desconto */
if (formaDePagamento === 1) {
  
    console.log("Valor do Produto já com o desconto:R$", aplicarDesconto(precoDaEtiqueta, 10));

} /* À vista no Dinheiro ou PIX, recebe 15% de desconto*/
else if (formaDePagamento === 2) {

    console.log("Valor do Produto já com o desconto:R$", aplicarDesconto(precoDaEtiqueta, 15));

}/*Em duas vezes, preço normal de etiqueta sem juros */
 else if (formaDePagamento === 3) {

    console.log(" Valor normal do Produto", precoDaEtiqueta );
}
else if (formaDePagamento === 4) {


    console.log("Valor do Produto já com o Juros:R$", aplicarJuros(precoDaEtiqueta, 10));
}


