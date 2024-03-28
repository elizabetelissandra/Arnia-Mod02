import { ObjectId } from "mongodb";
import { financasCollection, client } from "./database";
import { Financas, iFinancas } from "./Financas";

export class FinancasRepository {
  //Deve ser capaz de fazer uma transacao, passando: value, description and kind.

  async fazerTransacao(financa: iFinancas) {
    const novaTransacao = new Financas(financa);
    const response = await financasCollection.insertOne(novaTransacao);
    return response;
    
  }
  //Deve ser possivel buscar todas as transacoes
  async listarTodasTransacoes(id: ObjectId) {
    const resultado = await financasCollection.find({}).toArray();
    return resultado;
    
  }
  //Deve ser possivel buscar apenas as transacoes do tipo "withdraw"
  async buscasSaques(tipo: "saque" | "deposito") {
    const resultado = await financasCollection.find({ tipo }).toArray();
    return resultado;
    
  }
  //Deve ser possivel buscar apenas as transacoes do tipo "deposit"
  async buscarDepositos(tipo: "deposito") {
    const resultado = await financasCollection.find({ tipo }).toArray();
    return resultado;
    
  }
  //Deve ser possivel buscar uma transacao pelo id

  async buscarPeloId(id: ObjectId) {
    const resultado = await financasCollection.find( {_id: id} ).toArray();
    return resultado;
    
  }

  //Deve ser possivel cancelar uma transacao buscando pelo id e atualizando o canceledAt

  async cancelaTransacao(id: ObjectId, canceladoEm: Date) {
    const resultado = await financasCollection.findOneAndUpdate(
      { _id: id },
      { $set: {canceladoEm: canceladoEm }}
    );
    return resultado;
   
  }
}
