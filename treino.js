// Definindo o array de objetos com informações sobre produtos
const produtos = [
    { nome: "Marca A", pares: 3, carne: 1, frango: 5, peixe: 4 },
    { nome: "Marca B", marcas: 1, cafes: 1, ovos: 7, feijões: 2 },
    { nome: "Marca C", pares: 2, carne: 4, frango: 3, peixe: 1 },
];

// Inicializa a variável total vendido
let totalVendido = 0;

// Percorre cada objeto no array
for (const produto of produtos) {
    // Obtém os valores do objeto atual
    const valores = Object.values(produto);
    
    // Soma todos os valores ao total vendido
    for (let i = 1; i < valores.length; i++) { // Começa de 1 para ignorar o nome do produto
        totalVendido += valores[i]; // Adiciona o valor ao total
    }
}

// Imprime o total vendido
console.log(`Total vendido: ${totalVendido}`);
