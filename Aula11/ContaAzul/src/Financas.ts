export interface iFinancas{

  valor:number,
  descricao:string,
  tipo: 'saque' | 'deposito'
  feitoEm: Date
  canceladoEm: Date

}

export class Financas implements iFinancas{
  valor:number;
  descricao:string;
  tipo: 'saque' | 'deposito';
  feitoEm: Date;
  canceladoEm: Date;

  constructor(financa:iFinancas){
    this.valor = financa.valor,
    this.descricao = financa.descricao,
    this.tipo = financa.tipo,
    this.feitoEm = financa.feitoEm,
    this.canceladoEm = financa.canceladoEm;
  }
}