// Crie um array de números pares, e utilizando a função .map() nesse array, 
// crie um novo array com apenas números ímpares.


let numPares = [0,2,4,6,8];

let numImpares = numPares.map(function(num){
    if (num%2===0){
        return num + 1;
    }
});

console.log(numImpares);


// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter()
// para obter apenas esses dois índices com o nome Maria.


let listaNomes = ["Leonardo", "Lilian", "Maria", "Nara", "Maria"]

let pesquisa = listaNomes.filter(resultado=nome=>nome==="Maria")

console.log(pesquisa);


// Crie um array de números e utilize a função .reduce() 
// para devolver uma string com os números formatados.


// Não consegui entender




// Crie um array de animais, após isso passe por cada índice utilizando 
// o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais = ["Leão", "Zebra", "Leopardo", "Crocodilo"];

let listaAnimais = animais.forEach(lista=animal=>console.log("O animal é:" + animal));


