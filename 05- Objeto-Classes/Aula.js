
class Pessoa {
 nome;
 idade;
 sexo;
anoDeNascimento;
constructor(nome,idade,sexo){
this.nome=nome;
this.idade=idade;
this.sexo=sexo;
this.anoDeNascimento= 2022-idade;
}


    descrever(){
        console.log('Meu nome é ',this.nome,'minha idade é',this.idade,'e meu sexo é',this.sexo); 
    }
}



function compararPessoa(p1,p2){

    if(p1.idade> p2.idade){
        console.log(p1.nome, 'é mais velho(a) que',p2.nome);
    } else if (p2.idade> p1.idade){
    console.log(p2.nome,'é mais velho(a) que',p1.nome);
    } else 
    console.log (p1.nome,"e",p2.nome,"tem a mesma idade");
}

const lucas = new Pessoa('Tiago',40);
const Renan = new Pessoa('renam',40);

compararPessoa(lucas,Renan);