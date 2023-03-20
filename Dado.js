class dado{
    constructor(faces){
        this.faces = faces;
    }
    Rolar(){
        console.log("Resultado gerado: "+ this.getRandomInt(1,this.faces))
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

var d12 = new dado(50)
var d120 = new dado(120)
var d240 = new dado(2140)

d12.Rolar();
d120.Rolar();
d240.Rolar();