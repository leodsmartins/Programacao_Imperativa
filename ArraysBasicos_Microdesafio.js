let listaCompras = ["arroz", "feijão", "proteínas", "pão"];

listaCompras.push("verduras");
console.log("O método PUSH() adiciona um novo elemento/dado no final do array")
console.log(listaCompras);


listaCompras.pop();
console.log("O método POP() retira o último elemento do array e retorna os dados");
console.log(listaCompras);

listaCompras.unshift("frutas");
console.log("O método UNSHIFT() adiciona um elemento no início do array");
console.log(listaCompras);

listaCompras.shift();
console.log("O método SHIFT retira um elemento do início do array")
console.log(listaCompras);


console.log(listaCompras.join());
console.log("O método JOIN() une todos os elementos do array e os exibe uma string separados por vírgula (padrão). É possível adicionar outros caracteres como separadores.")
