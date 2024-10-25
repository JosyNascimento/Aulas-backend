const divisao = (dividendo, divisor) => {
    return new Promise ((resolve, reject) => {
   //setTimeout(()=> {
            if (divisor ===0) {
                console.log("if")
                reject("Não é possível dividir por zero");
            } else {
                console.log ("else")
                resolve(dividendo / divisor);
            }   
        //}, 3000 );
    });
};
//console.log (divisao (4,2));
// Chamando a função e manipulando a Promise

divisao (4, 2)
.then((result)=> console.log(result)) // Manipula o resultado da divisão
.catch((error)=> console.log(error))// Manipula o erro, se houver

const ehPar = (num) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        if (num %2 === 0) { // Verifica se é par
            resolve ('${num} não é Par');
        
        } else {
            reject(`${num} não é Par`);// Adiciona rejeição para números ímpares
        }
    }, 1000);
    });
    };

divisao(3, 2)
.then((result)=> {
    console.log(".then da sivisao:", result);
return ehPar(result);// Adiciona um return para encadear promessas
    })

.then((result) => {
    console.log(".then do ehPar:", result);
    return divisao(result / 2)
        
 })
   
 .then((result) => {
    console.log("Resultado da divisao final:", result);
})

.catch((error) => {
    console.log(".catch do eh par:", error); // Consolidado o catch no final
});

