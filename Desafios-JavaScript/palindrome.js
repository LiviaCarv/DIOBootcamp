function checaPalindromo(string) {
    let reverso = string.split("").reverse().join("");
    console.log(reverso == string ? 'TRUE' : 'FALSE');

}

