
class Carro {
    constructor (marca, cor, combustivelPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = combustivelPorKM;
    }

    gastoPorPercurso (kilometrosPercurso, precoCombustivel ) {
        let gasto = (this.gastoMedioPorKM*kilometrosPercurso)*precoCombustivel;
        return `O gasto da viagem é de R$ ${gasto}.`
    }
}


let civic = new Carro("Honda", "Branco", 1);
console.log(civic);
console.log(civic.gastoPorPercurso(70, 5));