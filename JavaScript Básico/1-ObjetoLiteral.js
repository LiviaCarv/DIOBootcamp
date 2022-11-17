// objeto literal

const pessoa = {
    nome: "Livia Carvalho",
    idade: 23,
    saudacao: function () {
        return "Olá, pessoal!"
    },
    descrever: function () {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
 };

pessoa.altura = 1.58;
pessoa["ocupacao"] = "Estagiária";

delete pessoa.nome;

console.log(pessoa);
console.log(pessoa["altura"]);
console.log(pessoa.saudacao());
console.log(pessoa.descrever())