let repository = [];
let idCount = 1;
let dataAtual = new Date();

const createCar = (modelo, cor, ano) => {
  const carro = {
    id: idCount++,
    modelo,
    cor,
    ano,
    created: new Date()
  };
  repository.push(carro);
  return carro;
};

const carro1 = createCar('stepway', 'cinza', 2019)
const carro2 = createCar("Uno", "preta", 2018)


console.log(repository);
