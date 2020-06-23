// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8) 
// vai chamar os dois primeiros números (a + b) e ignorar o resto
imprimirSoma() // NaN

// Função sem retorno
function soma(a, b = 0) { //se b for == 1, vai retornar o valor 3
    return a + b
}

console.log(soma (2, 3))
console.log(soma(2))