import { Carro } from "./Carro";
import { CarRepository } from "./CarroRepository";


const carRepository = new CarRepository();

const novoCarro: Carro = {
    modelo: 'Fusca',
    marca: 'VW',
    lancado: 1970,
    preco: 500.00,
    status: 'disponivel'
}

const novoCarro1:Carro = {
    modelo: 'Gol',
    marca: 'Volkswagen',
    lancado: 2001,
    preco: 3000.00,
    status: 'alugado'
}

const novoCarro2:Carro = {
    modelo: 'Civic',
    marca: 'Honda',
    lancado: 2000,
    preco: 1500.00,
    status: 'alugado'
}

const novoCarro3:Carro = {
    modelo: 'Toro',
    marca: 'Toyota',
    lancado: 2018,
    preco: 4000.00,
    status: 'disponivel'
}

//- Deve ser possível cadastrar um carro, passando as informações: modelo, ano, marca, preço

carRepository.carrosDisponiveis('alugado')
