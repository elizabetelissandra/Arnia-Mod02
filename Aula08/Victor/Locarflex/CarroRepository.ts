import { ObjectId } from "mongodb";
import { Carro } from "./Carro";
import { carCollection, client } from "./database";

export class CarRepository {
  //- Deve ser possível cadastrar um carro, passando as informações: modelo, ano, marca, preço
  async create(car: Carro) {
    const carro = new Carro(car);
    const response = await carCollection.insertOne(carro);
    console.log(response);
    client.close();
  }
  //- Deve ser possível atualizar o statude de um carro para alugado ou disponível
  async update(id: string, status: "alugado" | "disponivel") {
    const objectId = new ObjectId(id);
    const response = await carCollection.updateOne(
      { _id: objectId },
      { $set: { status } }
    );
    console.log(response);
    client.close();
  }
  //- Deve ser possível listar os carros disponíveis
  async carrosDisponiveis(status: "alugado"|"disponivel") {
    const response = await carCollection
      .find({ status: status }).toArray();
    console.log(response);
    client.close();
  }
}


