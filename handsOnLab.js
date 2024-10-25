const soma = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) {
            return reject("operação desnecessária");
        }

        const result = num1 + num2;
        if (result < 0) {
            reject("A calculadora só deve retornar resultados positivos");
        } else {
            resolve(result);
        }
    });
};

const subtracao = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) {
            return reject("operação inválida");
        }

        const result = num1 - num2;
        if (result < 0) {
            reject("A calculadora só deve retornar resultados positivos");
        } else {
            resolve(result);
        }
    });
};

const multiplicacao = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 < 0 || num2 < 0) {
            return reject("operação inválida");
        }

        const result = num1 * num2;
        if (result < 0) {
            reject("A calculadora só deve retornar resultados positivos");
        } else {
            resolve(result);
        }
    });
};

const divisao = (num1, num2) => {
    return new  Promise((resolve, reject) => {
        if (num1 < 0 || num2 < 0) {
            return reject("operação inválida"); 
        }

        if (num2 === 0) {
            return reject("Divisão por zero é inválida");
        }

        const result = num1 / num2;
        if (result < 0) {
            reject("A calculadora só deve retornar resultados positivos");
        } else {
            resolve(result);
        }
    });
};

const calculos = async () => {
    try {
        const somatorio = await soma(10, 20);
        console.log('soma:', somatorio);

        const subtraindo = await subtracao(10, 20);
        console.log('subtracao:', subtraindo);

        const multiplicando = await multiplicacao(10, 20);
        console.log('multiplicacao:', multiplicando);

        const divisaoResult = await divisao(20, 10);
        console.log('divisao:', divisaoResult);
        
    } catch (error) {
        console.log(error);
    }
};

calculos();
