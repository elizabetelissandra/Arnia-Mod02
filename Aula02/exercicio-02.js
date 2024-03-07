// crie uma função factory que gera um Student
// Parametros: name, class, status, document
// Retorno {
//   code: 1,
//   name: ''Victor,
//   class: '401B',
//   status: 'matriculado' || 'pendente,
//   document: '123.123.123-00',
//   createdAt: '2015-04-12' tipo Date
// }
let codigo = 1
let studentCount = 0
const repository = []
let alunos = {}
function makeStudent(nome, turma, situacao, cpf) {
  alunos ={
    code: codigo++,
    name: nome,
    class: turma,
    status: situacao,
    document: cpf,
    criado:  new Date()
  }
  repository.push(alunos)
  return alunos
}

// Crie as funçao para manipular a constante repository
// Deve ser possível:
// - Criar;
// - Editar por código;
// - Buscar por código;
// - Buscar por Turma;
// - Deletar





function createStudentRepository(nome, turma, situacao, cpf) {
  return makeStudent(nome, turma, situacao, cpf)
   
}

// function updateStudentRepository(code, nome, turma, situacao, cpf) {
//   const aluno1 = repository.find((aluno) => aluno.code === code)

//   if (aluno1) {
//     // Atualiza os atributos do carro com os novos valores
//     aluno1.modelo = modelo;
//     aluno1.cor = cor;
//     aluno1.ano = ano;

//     // Retorna o objeto do carro atualizado
//     return aluno1;
//   } else {
//     return null;
//   }
// }

// function findStudentByCodeRepository(code) {
// }

// function findStudentByClassRepository(className) {
// }

// function deleteStudentByCode(code) {
// }

createStudentRepository({
  name: 'Jubileu',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})


createStudentRepository({
  name: 'Ciclano',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})


const resultado = createStudentRepository()
console.log('---------------Funcao--------------')
console.log(resultado)
console.log('---------------Repositorio--------------')
console.log(repository)


const resultado2 = updateStudentRepository(2, {
  name: 'Fulano',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})


// console.log('---------------Funcao--------------')
// console.log(resultado2)
// console.log('---------------Repositorio--------------')
// console.log(repository)