const repository = [];
let idCount = 0;

// Função que adiciona um carro ao repositório e retorna o objeto salvo
function createCar(modelo, cor, ano) {
  // Incrementa o contador de ID para gerar um novo ID único
  idCount++;

  // Cria um novo objeto carro com os parâmetros fornecidos e outras informações
  const carro = {
    id: idCount++, // ID único para o carro
    modelo: modelo,
    cor: cor,
    ano: ano,
    createdAt: new Date() // Data e hora atual
  };

  // Adiciona o carro ao repositório
  repository.push(carro);

  // Retorna o objeto do carro salvo
  return carro;
}

// Função que encontra um carro no repositório pelo ID
// function findCarById(id) {
//   // Procura pelo carro no repositório com o ID fornecido
//   return repository.find(carro => carro.id === id);
// }

// function findAllCars() {
//   return repository.forEach(carros => carros);
// }

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
    }
    repository.push(carro)
    }
  
  // Exemplo de uso
  
  


// Exemplo de uso
const carro1 = createCar("stepway", "cinza", 2019);
const carro2 = createCar("Uno", "preta", 2018);
const carro3 = createCar("Ka", "vermelho", 2020);

// const resultFindId1 = findCarById("1");
// console.log(resultFindId1);
// let resultFindAllCars = findAllCars();
const resultUpdate = updateCarById('2', 'Sandero', 'Preto', 2015);
  console.log(resultUpdate);
  console.log(repository)


// Crie uma funçao que atualiza um carro(Object) no repository e retorna o objeto atualizado
// Parametros: id(string), modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)


