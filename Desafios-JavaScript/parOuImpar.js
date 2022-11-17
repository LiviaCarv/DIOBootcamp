var arrVazio = []; 
var arr = [4,3,1,2];
// TODO: crie a condição necessária para que o array fique ordenado como o exercício pede
var arrImpar = []; 
for (let contador = arr.length-1; contador >= 0 ; contador--) {
  if (arr[contador] % 2 == 0) {
    arrVazio.push(arr[contador]);
  } else {
    arrImpar.push[arr[contador]];
  }
}
console.log(arrImpar)
console.log(arrVazio.concat(arrImpar));