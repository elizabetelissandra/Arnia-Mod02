// # Sistema Blog
// OBS: Crie o sistema utilizando as camadas Entities/Repositories

// ## Entidade

// User {
//   id: string
//   nickname: string
//   email: string
//   password: string
//   posts: array
//   createdAt: string
// }

// Post {
//   id: string
//   content: string
//   createdAt: string
// }

// ## Casos de uso

class Post {
  constructor(conteudo) {
    this.id = new Date().getTime();
    this.createdAt = new Date();
    this.conteudo = conteudo;
  }
}
class Usuario {
  constructor(data) {
    this.id = new Date().getTime()
    this.nome = data.nome;
    this.email = data.email;
    this.senha = data.senha;
    this.posts = []
    this.criado = new Date().toLocaleDateString("pt-br");
  }
}

class Repositorio {
  repository = [];

  salvarUsuario(data) {
    const usuario = new Usuario(data);
    this.repository.push(usuario);
    return usuario;
  }

  atualizarUsuario(id, dados){
    const usuario = this.repository.find(usuario => usuario.id == id);
    console.log("Antes da alteração", usuario);
    if (usuario) {
      usuario.nome = dados.nome
      usuario.email = dados.email
      usuario.senha = dados.senha
    }
    return usuario
  }
  
  listarUsuarios(){
    return this.repository
  }

  usuarioPorId(id){
    const usuario = this.repository.find((usuario)=> usuario.id === id)
    if (usuario){
      return usuario
    }
  }

  usuarioPorEmail(email){
    const usuario = this.repository.find((usuario)=> usuario.email === email)
    if (usuario){
    return usuario
    }
  }
  salvarPost(id, conteudo){
    const usuario = this.repository.find(usuario => usuario.id == id);
    if (usuario) {
      const post = new Post({ ...post, conteudo });
      usuario.posts.push(post);
      return post;
    }
  }
}


// //Criando um novo usuário e salvando no repositório
const maria = new Repositorio
maria.salvarUsuario({nome: "Maria", email: "maria@gmail.com", senha:"89645" });
// console.log(maria);


// maria.atualizarUsuario(maria.listarUsuarios()[0].id, {nome: "MariaNicole", email: "maria@gmail.com", senha:"89645" });

// console.log(maria.listarUsuarios())

maria.usuarioPorId(maria.listarUsuarios()[0].id)

maria.usuarioPorEmail(maria.listarUsuarios()[0].email)

// //Listando todos os usuários do repositório
// console.log(repositorio.listarUsuarios());


// //Adicionando um post ao usuário de ID 1
// const resposta = repositorio.salvarPost(1, 'Respondendo o que vocês estão pensando');


// //Buscando usuário pelo email
// const usuarioPorEmail = repositorio.usuarioPorEmail('maria@gmail.com')
