function inverterString(s) {
    let caracteres = s.split('');
    let tamanho = caracteres.length;
    let i = 0, j = tamanho - 1;

    while (i < j) {
        [caracteres[i], caracteres[j]] = [caracteres[j], caracteres[i]];
        i++;
        j--;
    }

    return caracteres.join('');
}

let minhaString = "Hello, World!";
let stringInvertida = inverterString(minhaString);

console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);
