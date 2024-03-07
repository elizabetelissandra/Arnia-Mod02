class Animal {
    nome 
    especie
    constructor(nome, especie){
        this.nome = nome
        this.especie = especie
    }

    seAlimentar() {
        return  `${this.nome} está se alimentando. `
    }    
}

class Cachorro extends Animal{
    raca
    constructor(nome, especie, raca){
        super(nome, especie)
        this.raca = raca
    }

    seAlimentar(){
        return 'Comeu ração'
    }


}

const  myDog = new Cachorro("Rex", "Cão", "Pastor Alemão")
console.log(myDog.seAlimentar()) 