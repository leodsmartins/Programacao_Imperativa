//Módulo 02 - Funções Avançadas

//Exercício: Micro desafios Callbacks

// Crie uma função acaoCarro(), que receberá uma callback como parâmetro. 
//Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando
// – e parar() – deve exibir uma mensagem dizendo que o carro parou.
// Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.


const andar=()=>console.log("O carro está andando");

const parar=()=>console.log("O carro parou");

const acaoCarro=(callback1, callback2)=>{
    callback1();
    callback2();
}

acaoCarro(andar, parar);




