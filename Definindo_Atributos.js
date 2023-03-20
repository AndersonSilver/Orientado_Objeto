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

vingadores.titulo = "Vingadores 2";
vingadores.ano = "2014";
vingadores.genero = "Ação";

console.log(vingadores.titulo);
console.log(vingadores.ano);
console.log(vingadores.genero);


const hulk = new filme();

hulk.titulo = "Hunk o Retorno";
hulk.ano = "2009";
hulk.genero = "Ação";

console.log(hulk.titulo);
console.log(hulk.ano);
console.log(hulk.genero);