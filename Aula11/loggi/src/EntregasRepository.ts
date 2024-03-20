import { ObjectId } from "mongodb";
import { client, entregaCollectionn } from "./database";
import { Entrega, IEntrega } from "./Entregas";


class EntregaRepository{

   //Deve ser capaz de criar um pedido, passando as informações: nome do produto, endereço do comprador, nome do comprador.

    async create(entrega:IEntrega){
        const newEntrega = new Entrega(entrega);
        const response = await entregaCollectionn.insertOne(newEntrega);
        console.log(response)
        client.close();
    };

    async buscarNaoEntregues(pedidoEntregue: boolean){
        const response = await  entregaCollectionn.find({ pedidoEntregue} ).toArray() ; 
        console.log(response)
        client.close()
    }

    async atualizarPedido( id: ObjectId, pedidoEntregue: boolean){
        const response = await  entregaCollectionn.updateOne( {_id : id}, {$set:{pedidoEntregue}} )  
        console.log(response)
        client.close()
    }

    async listAll(){
        const findResult = await entregaCollectionn.find({}).toArray();
        console.log('Found documents =>', findResult);
        client.close()
    }
}