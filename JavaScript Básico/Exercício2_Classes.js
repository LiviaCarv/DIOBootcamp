
class Pessoa {
    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC () {
        return (this.peso/(Math.pow(this.altura, 2))).toFixed(2);
    }

    classificarIMC() {
        let imc = this.calculaIMC();
        if (imc < 18.5) {
            return ('Abaixo do peso.')
        } else if (imc < 25) {
            return ("Peso normal.")
        } else if (imc < 30) {
            return ("Acima do peso.")
        } else if (imc < 40) {
            return ("Obeso.")
        } else {
            return ("Obesidade grave.")
        }
    }
}

let jose = new Pessoa("Jose", 70, 1.68);
console.log(jose.calculaIMC());
console.log(jose.classificarIMC());