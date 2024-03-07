class Funcionario {
    id
    nome
    salario
    cargo
    horasDeTrabalho
    constructor(nome, salario, cargo, horasDeTrabalho){
        this.id = new Date().getTime()
        this.nome = nome 
        this.salario = salario
        this.cargo = cargo
        this.horasDeTrabalho = horasDeTrabalho
    }

    apresentar(){
        return `${this.nome}, cargo ${this.cargo} que recebe R$ ${this.salario}`
    }

    aumentarSalario(porcentagem) {
        this.salario = this.salario * (1 + (porcentagem/100))
    }
}

const vinicius = new  Funcionario('Vinícius',  3000, 'Desenvolvedor', 4)
console.log(vinicius.apresentar()) 
vinicius.aumentarSalario(5) 
console.log(vinicius.apresentar()) 