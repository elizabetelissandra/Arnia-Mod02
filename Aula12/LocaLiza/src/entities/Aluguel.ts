export interface IAluguel{
    marca: string
    modelo: string
    placa: string
    cor: string
    usado: "sim" | "não"
    ano: number
    vendido: boolean
}

export class  Aluguel implements IAluguel {
    marca: string
    modelo: string
    placa: string
    cor: string
    usado: "sim" | "não"
    ano: number
    vendido: boolean
    constructor(aluguel: IAluguel){
        this.marca = aluguel.marca
        this.modelo = aluguel.modelo
        this.placa = aluguel.placa
        this.cor = aluguel.cor
        this.usado = aluguel.usado
        this.ano = aluguel.ano
        this.vendido = aluguel.vendido ? true : false
    }
}    