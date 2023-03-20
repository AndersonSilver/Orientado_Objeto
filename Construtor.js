class filme{

// ATRIBUTOS
    constructor(titulo, ano, genero, diretor,duracao){
        this.titulo= titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];
        
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

const vingadores = new filme("Vingadores 3", "2010", "Ação", "Anderson Silveira", "2h30");


console.log(vingadores.titulo);
console.log(vingadores.ano);
console.log(vingadores.genero);


const hulk = new filme("Hulk 7", "2010", "Ação", "Anderson Silveira", "2h30");


console.log(hulk.titulo);
console.log(hulk.ano);
console.log(hulk.genero);