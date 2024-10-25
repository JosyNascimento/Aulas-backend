// const divisao = (dividendo, divisor) => {
//     return new Promise ((resolve, reject) => {
//    //setTimeout(()=> {
//             if (divisor ===0) {
//                 console.log("if")
//                 reject("Não é possível dividir por zero");
//             } else {
//                 console.log ("else")
//                 resolve(dividendo / divisor);
//             }   
//         //}, 3000 );
//     });
// };
// //console.log (divisao (4,2));
// // Chamando a função e manipulando a Promise

// divisao (4, 2)
// .then((result)=> console.log(result)) // Manipula o resultado da divisão
// .catch((error)=> console.log(error))// Manipula o erro, se houver

const divisao = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (divisor === 0) {
                reject("Não é possível dividir por zero");
            } else {
                resolve(dividendo / divisor);
            }
        }, 1000);
    });
};

const ehPar = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 === 0) { // Verifica se é par
                resolve(`${num} é Par`); // Corrigido para usar crases
            } else {
                reject(`${num} não é Par`); // Adiciona rejeição para números ímpares
            }
        }, 1000);
    });
};


//bem mais limpo usar assim 
const final = async () => {
    try {
        const valor1 = await divisao(4, 2);
        const valor2 = await ehPar(valor1);
        console.log('com await', valor2);

        // Aqui, tentamos dividir por zero, o que deve ser tratado
        const valor3 = await divisao(4, 0);
        const valor4 = await ehPar(valor3);
        console.log('com await', valor4);
    } catch (error) {
        console.log("Erro do  await:", error); // Captura e exibe erros
    }
};

final();
