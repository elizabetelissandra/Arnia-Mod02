import { ObjectId } from "mongodb";
import { Filme, IFilme } from "./Filme";
import { filmeCollection, client } from "./database";

export class FilmeRepository{

    // Deve ser possível cadastrar um filme, passando as informações: título, lançamento, gênero, duração e avaliação.

   async create(filme:IFilme) {
        const novoFilme = new Filme(filme);
        const response = await filmeCollection.insertOne(novoFilme)
        console.log(response)
        client.close()
}
//Deve ser possível buscar um filme pelo título (LIKE QUERY).
    async searchByTitle(titulo: string){
        const response = await filmeCollection.find({titulo: {$regex: titulo, $options: 'i'}}).toArray(); 
        console.log(response)
        client.close()
    }
//Deve ser possível buscar os filmes com lançamento maior ou igual ao recebido pelo parâmetro (Greater than or equal QUERY).
    async searchByYearGreaterthan(lancamento: number){
        const response = await filmeCollection.find({lancamento: {$gte : lancamento}}).toArray()
        console.log(response)
        client.close()
    }
//Deve ser possível buscar os filmes com avaliação maior ou igual a um determinado valor (Greater than or equal QUERY).
    async searchByAvaliationGreaterThan(avaliacao: number){
        const response = await filmeCollection.find({avaliacao: {$gte: avaliacao}}).toArray()
        console.log(response)
        client.close()
    }
//Deve ser possível atualizar o status do filme passando o seu ID.
    async updateStatus(id:ObjectId, status:string){
       const resultado = await filmeCollection.updateOne({_id: id},{$set:{status}})
       console.log(resultado)
       client.close()
    }
//Deve ser possível deletar um filme pelo ID.

    async deleteById(id: ObjectId){
        const resultado = await filmeCollection.deleteOne( { _id : id })
        console.log(resultado)
        client.close()
    }

    async listAll(){
        const findResult = await filmeCollection.find({}).toArray();
        console.log('Found documents =>', findResult);
        client.close()
    }
}