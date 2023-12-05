
// crie um programa que  seja capaz de percorre uma lista de números e imprima cada números par e impares
// encontrados

const numeros= [1,2,3,4,5,6,7,8,9,];
for (let i = 0; i < numeros.length; i++) {

    const lista= numeros[i];

    if(lista %2==0)
    {
        console.log('numeros pares:',lista);
    } else 
    console.log("numeros impares:",lista);
    
}