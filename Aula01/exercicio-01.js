// Crie uma funçao que adiciona um carro(Object) ao repository e retorna o objeto salvado
// Parametros: modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)

let repository = [];
let idCount = 1;

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

const carro1 = createCar("stepway", "cinza", 2019);
const carro2 = createCar("Uno", "preta", 2018);

// console.log(repository);

// Crie uma funçao que recebe um id por parametro e retorna o objeto referente
// Parametros: id(string)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function findCarById(id) {
  // Procura pelo carro no repositório com o ID fornecido
  return repository.find(carro => carro.id === id);
}

// Exemplo de uso
// const carro4 = createCar("stepway", "cinza", 2019);
// const carro5 = createCar("Uno", "preta", 2018);
// const carro6 = createCar("Ka", "vermelho", 2020);

// const resultFindId1 = findCarById("1");
// console.log(resultFindId1);

// Crie uma funçao que retorna todos os carros
// Returno(Array): (id(string), modelo(string), cor(string), ano(number), createdAt(Date))[]
function findAllCars() {
  return repository.forEach(carros => console.log(carros));
}

// Exemplo de uso
const carro7 = createCar("stepway", "cinza", 2019);
const carro8 = createCar("Uno", "preta", 2018);
const carro9 = createCar("Ka", "vermelho", 2020);

// console.log(resultFindId1);
// let resultFindAllCars = findAllCars();

// Crie uma funçao que atualiza um carro(Object) no repository e retorna o objeto atualizado
// Parametros: id(string), modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function updateCarById(id, modelo, cor, ano) {
  // Encontra o carro com o ID fornecido
  const carro = repository.find(carro => carro.id === id);

  // Verifica se o carro foi encontrado
  if (carro) {
    // Atualiza os atributos do carro com os novos valores
    carro.modelo = modelo;
    carro.cor = cor;
    carro.ano = ano;

    // Retorna o objeto do carro atualizado
    return carro;
  } else {
    return null;
  }
  // Ou, se preferir, retorne null
  // return null;
}

// Exemplo de uso
// const carro10 = createCar("stepway", "cinza", 2019);
// const carro11 = createCar("Uno", "preta", 2018);
// const carro12 = createCar("Ka", "vermelho", 2020);

// const resultUpdate = updateCarById(2, "Sandero", "Preto", 2015);
// console.log(resultUpdate);
// console.log(repository);

// Crie uma funçao que remove um carro do repositorio
// Parametros: id(string)
function deleteCarById(id) {

  const index = repository.findIndex(carro => carro.id == id);
  if (index < 0){
  return "Carro não encontrado"
  }
  repository.splice(index, 1);
}
const  resultDelete = deleteCarById(1);
console.log(repository);

