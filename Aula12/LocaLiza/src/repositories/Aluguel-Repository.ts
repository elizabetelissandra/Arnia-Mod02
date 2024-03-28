import { ObjectId } from "mongodb";
import { aluguelCarros } from "../database/database";
import { Aluguel, IAluguel } from "../entities/Aluguel";


export class AluguelRepository{ 

    //Deve ser possível criar um carro no sistema, passando as informacoes: marca, modelo, placa, cor, é usado, ano

    async cadastrarCarro(carro: IAluguel){
        const novoCarro = new Aluguel(carro)
        const response = await aluguelCarros.insertOne(novoCarro)
        return response
    }

    //Deve ser possível atualizar um carro no sistema, atualizando para vendido

    async atualizarVenda(id: ObjectId, vendido: boolean){
        const  dadosAtualizados = await aluguelCarros.updateOne({_id : id},{$set:{vendido}})
        return dadosAtualizados
    }
    
    //Deve ser possível buscar um carro pela placa

    async buscarPorPlaca(placa: string){
        const resultado = await aluguelCarros.find({placa}).toArray()
        return resultado
    }
    //Deve ser possível buscar todos os carros

    async buscarTodosCarros(){
        const resultado = await aluguelCarros.find().toArray()
        return resultado
    }

    //Deve ser possível buscar os carros já vendidos/nao vendidos

    async buscarVendidos(vendido: boolean){
        const resultado = await aluguelCarros.find({vendido})
        return resultado
    }
}