export interface IFilme {
  private _id(_id: any, arg1: string): unknown;
  titulo: string;
  lancamento: number;
  genero: string;
  duracao: number;
  avaliacao: number;
  status: "disponível" | "indisponível";
}

export class Filme implements IFilme {
  titulo: string;
  lancamento: number;
  genero: string;
  duracao: number;
  avaliacao: number;
  status: "disponível" | "indisponível";

  constructor(filme: IFilme) {
    this.titulo = filme.titulo;
    this.lancamento = filme.lancamento;
    this.genero = filme.genero;
    this.duracao = filme.duracao;
    this.avaliacao = filme.avaliacao;
    this.status = filme.status;
  }
}
