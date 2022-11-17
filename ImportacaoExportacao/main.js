
import { print, maiorValor} from "./FuncoesAuxiliares.js";

const entradas = [5, 50, 10, 98, 23];

print(maiorValor(entradas));

function TODO (a, N) {
    let soma = 0;
    for (let multiplo = a; multiplo <= N; multiplo+= a) {
      soma += multiplo;
    }
    return soma;
  }
  
console.log(TODO(5, 20));