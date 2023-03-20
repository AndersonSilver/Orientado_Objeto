class Animal{

    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    checarEstoque(){
        return 10;
    }

    MetodoQualquer(){
        console.log("Esse metodo faz parte da classe mae")
    }
}

class cachorro extends Animal{

    constructor(nome, idade, preco, reca,peso){
        super(nome,idade,preco);
        this.raca = raca;
        this.peso = peso;
    }

    Latir(){
        console.log("RALF, RALF")
    }
    checarEstoque(){
        confirm.log("Na loja tem 50 ROLF")
    }
    MetodoQualquer(){
        console.log("Aqui e uma classe de dogs")
        super.MetodoQualquer();
        console.log("Aqui vem Funcionalidades")
    }
}

class Gato extends Animal{}

let dog = new cachorro("Théodoro", 15, 152);
let cat = new cachorro("Princesa", 3, 142);

console.log(dog.checarEstoque());

console.log(cat.checarEstoque());