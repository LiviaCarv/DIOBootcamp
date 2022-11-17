
// Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".
function somaMultiplos (a, N) {
  let soma = 0;
  for (let multiplo = a; multiplo <= N; multiplo+= a) {
    soma += multiplo;
  }
  return soma;
}


export {somaMultiplos};