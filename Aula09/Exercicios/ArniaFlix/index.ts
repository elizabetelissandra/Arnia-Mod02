import { ObjectId } from "mongodb";
import { Filme, IFilme } from "./Filme";
import { FilmeRepository } from "./FilmeRepository";


const filmeRepository = new FilmeRepository();

const novoFilme: IFilme = {
    titulo: 'Duna',
    lancamento: 2019,
    genero: 'fantasia',
    duracao: 7200,
    avaliacao: 4.8,
    status: "disponível"
}

const novoFilme2: IFilme = {
    titulo: 'Avengers Endgame',
    lancamento: 2019,
    genero: 'super-herói',
    duracao: 360,
    avaliacao: 5.0,
    status:  "indisponível"
}

const novoFilme3: IFilme = {
    titulo: 'SuperMan',
    lancamento:2012,
    genero: 'science fiction',
    duracao: 3600,
    avaliacao: 3.6,
    status: "disponível"
}

// filmeRepository.create(novoFilme3)
// filmeRepository.searchByTitle('Avengers')
// filmeRepository.searchByAvaliationGreaterThan(4.5)
// filmeRepository.searchByYearGreaterthan(2015)
// filmeRepository.updateStatus(new ObjectId('65f5b316d960249e0dd09d0a'), "indisponível")
// filmeRepository.deleteById(new ObjectId('65f5b2887f223f8b471bc982'))
// filmeRepository.listAll()