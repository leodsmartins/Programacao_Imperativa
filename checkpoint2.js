// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:
// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 
//     1 - Pipoca – 10 segundos (padrão);
//     2 - Macarrão – 8 segundos (padrão);
//     3 - Carne – 15 segundos (padrão);
//     4 - Feijão – 12 segundos (padrão);
//     5 - Brigadeiro – 8 segundos (padrão); 
// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

let comida= (menu, tempoSelecionado) => {

    let preparo;

    switch (menu) {
        case 'pipoca':
            preparo = 10;
            cozinhar(preparo, tempoSelecionado)
            break;

        case 'macarrão':
            preparo = 8;
            cozinhar(preparo, tempoSelecionado)
            break;

        case 'carne':
            preparo = 15;
            cozinhar(preparo, tempoSelecionado)
            break;

        case 'feijão':
            preparo = 12;
            cozinhar(preparo, tempoSelecionado)
            break;

        case 'brigadeiro':
            preparo = 8;
            cozinhar(preparo, tempoSelecionado)
            break;

        default:
            console.log("Prato inexistente")
    }

//Função tempo de preparo
function cozinhar(preparo, tempoSelecionado) {
    if(tempoSelecionado < preparo){
        console.log("Tempo insuficiente")
    } else if(tempoSelecionado >=3 * preparo){
        console.log("Kabumm!!")
    } else if(tempoSelecionado >=2 * preparo){
        console.log("A comida queimou!")
    } else {
        console.log("Prato pronto, bom apetite!!")
    }
}
}

