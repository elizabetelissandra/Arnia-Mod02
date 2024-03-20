export interface IEntrega{
    nomeProduto:string;
    endereco: string,
    nomeComprador: string,
    dataPedido: string
    pedidoEntregue: boolean
}

export class Entrega implements IEntrega{
    nomeProduto:string;
    endereco: string;
    nomeComprador: string;
    dataPedido: string
    pedidoEntregue: boolean

    constructor(entrega: IEntrega){
        this.nomeProduto=entrega.nomeProduto;
        this.endereco= entrega.endereco,
        this.nomeComprador= entrega.nomeComprador,
        this.dataPedido= entrega.dataPedido,
        this.pedidoEntregue= entrega.pedidoEntregue
    }
}