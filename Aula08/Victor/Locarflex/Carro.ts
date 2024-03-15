interface ICar{
    modelo: string
    marca: string
    lancado: number
    preco: number
    status: 'alugado' | 'disponivel'
}

export class Carro{
    modelo: string
    marca: string
    lancado: number
    preco: number
    status: 'alugado' | 'disponivel'
    
    constructor(car:ICar){
        this.modelo = car.modelo;
        this.lancado = car.lancado;
        this.marca = car.marca;
        this.preco = car.preco;
        this.status = car.status;
    }
}