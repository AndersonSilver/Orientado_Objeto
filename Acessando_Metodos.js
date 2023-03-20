class filme{

// ATRIBUTOS
    constructor(){
        this.titulo= "";
        this.ano = 0;
        this.genero = "";
        this.diretor = "";
        this.atores = [];
        this.duracao = 0;
    }

//CLASSES

    Reproduzir(){
        console.log("Reproduzir");
    }
    Pausar(){
        console.log("Pausar");
    }
    Avançar(){
        console.log("Avançar");
    }
    Fechar(){
        console.log("Fechar");
    }

}

// OBJETOS

const vingadores = new filme();

console.log("Titulo do Filme: " + vingadores.titulo);
console.log("Ano do Filme: " + vingadores.ano);

const hulk = new filme();

console.log("Titulo do Filme: " + hulk.titulo);
console.log("Ano do Filme: " + hulk.ano);

const starwars = new filme();

console.log("Titulo do Filme: " + starwars.titulo);
console.log("Ano do Filme: " + starwars.ano);