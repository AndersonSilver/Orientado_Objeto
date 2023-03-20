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
    Ficha(){
        console.log(this.titulo)
        console.log("Titulo: " + this.ano);
        console.log("Titulo: " + this.genero);
        console.log("Titulo: " + this.diretor);
        console.log("Titulo: " + this.duracao);
    }

}

// OBJETOS

const vingadores = new filme("Vingadores 3", "2010", "Ação", "Anderson Silveira", "2h30");

vingadores.Ficha();


const hulk = new filme("Hulk 7", "2010", "Ação", "Anderson Silveira", "2h30");

hulk.Ficha();
