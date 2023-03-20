class Leitor{
    Ler(caminho){
        return "Conteudo do arquivo!"
    }
}

class Escrever{
    Escrever(arquivo,conteudo){
        console.log("Conteudo Escrito!");
    }
}

class Criador{
    criar(nome){
        console.log("Arquivo criado!");
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Arquivo Deletado!");
    }
}

class ManipuladorDeArquivo{
    constructor(name){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escrever();
        this.criador = new Criador();
        this.Destruidor = new Destruidor();
    }
}

class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new Criador();
        this.escritor = new Escrever()
    }
    SalvarListaDeUsuarios(lista){
        this.criador.Criar("usuarios.txt")
        this.escritor.Escrever("Usuario.txt",lista)
    }
}

var manipulador = new ManipuladorDeArquivo("meuarquivo.txt")


manipulador.Leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.Destruidor.Deletar();

















