const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numerosDobrados = numeros.map(function(numero ){
//     return numero * 2; //callback usando função
// });
const numerosDobrados = numeros.map ((numero)=> numero *2); //callback usando arrowfunction
console.log(numerosDobrados)


const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir =(a, b) => a /b;


const calculadora = (num1, num2, operacao) => {
console.log('Estamos executando a operação  ${operacao}');

return operacao(num1, num2)
};

console.log(calculadora(1, 2, subtrair));
