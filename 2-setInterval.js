// console.log("tarefa iniciada!");
// console.log("Executando....!");
// console.log("Continuação...!");


// for (let index = 0; index <= 5; index ++) {
//     console.log(index);
// }

// console.log("tarefa terminada!");
// const contador =()=> {
//     let counter =1 ;
//     console.log ("executando....");
//     let timer = setInterval (()=> {
//         console.log(counter++);
//         if (counter >5) {
//             clearInterval(timer);   
//         }
//     })
// }

// let x = 5
// console.log(x);

x = 10
console.log(x);
const contador =()=> {
    let counter =1 ;
    console.log ("executando....");
    let timer = setInterval (()=> {
        console.log(counter++);
        if (counter >5) {
            clearInterval(timer);   
        }
    },2000);
};
let operação = () =>  console.log ("executando....");
console.log ("Executando...");

console.log("Tarefa iniciada!");
contador();
console.log("Tarefa terminada!");


let x;
x = 5
console.log(x);

x = 10 
console.log(x);