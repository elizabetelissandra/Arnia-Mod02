import { Request, Response } from "express";
import { AluguelRepository } from "../repositories/Aluguel-Repository";
import { ObjectId } from "mongodb";

const repository = new AluguelRepository();

//Injeção de dependencia

export class AluguelController {
  async cadastrar(req: Request, res: Response) {
    const { body } = req;
    await repository.cadastrarCarro(body);
    return res.status(201).json();
  }

  async atualizar(req: Request, res: Response, id:ObjectId, vendido: boolean) {
    await repository.atualizarVenda(id, vendido);
    return res.status(204).json();
  }
  async buscarTodos(req: Request, res: Response) {
    const aluguels = await repository.buscarTodosCarros();
    return res.status(200).json({ aluguels });
  }
  async buscarPorPlaca(req: Request, res: Response) {
    const placa = await  repository.buscarPorPlaca(req.params.placa);
    return res.status(200).json({ placa });
  }
  async buscarVendidos(req:Request,res:Response){
    const vendidos = await repository.buscarVendidos()
    return res.status(200).json({vendidos})
}
}
