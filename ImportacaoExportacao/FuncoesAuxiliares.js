

function maiorValor(array) {
    let maiorNumero = array[1];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }
    return maiorNumero;
}

function print(input) {
    return console.log(input);
}

export {maiorValor, print};
