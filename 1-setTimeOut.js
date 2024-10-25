// // 

// // console.log("tarefa iniciada!");
// // console.log("Executando....!");
// // console.log("Continuação...!");
// // console.log("tarefa terminada!");


// const temporizador = async (callback) => {
//         setTimeout(()=> {
//             callback (),
//                 console.timeEnd()

//         }, 5000);
    

// };

// console.time()
// let operacao = () =>console.log("Executando..."); //chama temporizador


// const main = async () => {

//     console.log("Tarefa Iniciada!");
//     await temporizador(operacao);
//     console.log("Tarefa Terminada!");
// }


// 

// console.log("tarefa iniciada!");
// console.log("Executando....!");
// console.log("Continuação...!");
// console.log("tarefa terminada!");


const temporizador = async (callback) => {
    setTimeout(()=> {
        callback (),
            console.timeEnd()

    }, 5000);


};

console.time()
let operacao = () =>console.log("Executando..."); //chama temporizador


const main = async () => {

console.log("Tarefa Iniciada!");
await temporizador(operacao);
console.log("Tarefa Terminada!");
};

main();