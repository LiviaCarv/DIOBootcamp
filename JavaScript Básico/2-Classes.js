
class Pessoa {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever () {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

function compararPessoas (pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}.`)
    } else if (pessoa1.idade < pessoa2.idade){
        console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa1.nome}.`)
    } else {
        console.log(`${pessoa2.nome} e ${pessoa1.nome} tem a mesma idade.`)
    }
}

let livia = new Pessoa("Livia", 23);

let luis = new Pessoa();
luis.nome = "Luis";
luis.idade = 52;

console.log(livia);
console.log(luis);
console.log(luis.descrever());

compararPessoas(livia, luis);