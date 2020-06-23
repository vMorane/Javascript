// armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma funcão arrow em uma variável
const soma = (a, b) => { // => substitui o nome 'function' acima
    return a + b
}

console.log(soma (2, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imrpimir2 = a => console.log(a)
imrpimir2('Legal!!!')