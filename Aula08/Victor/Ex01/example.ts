//tipagem estática
//forçar a tipagem


//tipagem estática de variáveis/constantes
const nome: unknown = ''
const pessoa: string | null | number | Date | Array<any> = [{}, []]

//any|unknown|never - usado para definir uma variável que pode ser do tipo qualquer coisa

//Tipos Primitivos: string, number, boolean, null, undefined, symbol
//Estrutura de dados: Objeto, Array, Map, Set

//tipar parametros e retornos de funcoes/metodos

function createUser(name: string, bio: string, birthdate: string | Date): Promise <any> { }

class User{
    constructor(name: string, age: number){

    }


}

 //interface -> definir a tipagem de um objeto

interface Pessoa{
    nome: string
    dataNascimento: Date
}

const pessoa1: Pessoa = {nome: '', dataNascimento: new Date()}
