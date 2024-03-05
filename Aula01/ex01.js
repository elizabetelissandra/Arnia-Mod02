let repository = [];
let idCount = 1;
let dataAtual = new Date();

const createCar = (modelo, cor, ano) => {
    
    const carro = {
    id: idCount++, modelo, cor, ano, created: new Date()
};
    repository.push(carro)
    return carro
  };

createCar("Huyndai", "amarelo", 2015)
createCar("Huyndai", "amarelo", 2015)
createCar("Huyndai", "amarelo", 2015)
createCar("Huyndai", "amarelo", 2015)

console.log(repository);
