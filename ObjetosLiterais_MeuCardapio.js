




function Restaurante(nome, cardapio){
    this.nome = nome;
    this.cardapio = cardapio;
    this.entrada = function() {
        return "Seja bem vindo(a) ao" + " " + nome + "!!!" + "Nossos pratos hoje são:" + cardapio;
    }
    
}

let restaurante2=new Restaurante("JS Cuccina", ["Pene ao molho branco", "Lasanha aos 4 queijos", "Gnocchi da fortuna"]);

console.log(restaurante2.entrada());

