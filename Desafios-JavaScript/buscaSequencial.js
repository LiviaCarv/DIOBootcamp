function buscaSequencial (numero) {
    let array = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 
    for (let i = 0; i< array.length; i++) {
      if (numero == array[i]) {
        return `Achei ${numero} na posicao ${i}`
      } 
    }
    return `Numero ${numero} nao encontrado!`
  }