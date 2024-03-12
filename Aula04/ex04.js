// Livro {
//     titulo string
//     descricao string
//     ano de lancamento date
//     autor string
//     categoria string
//   }

// ## Casos de uso

// - Deve ser possível cadastrar um livro, passando as informacoes: titulo, descricao,
// ano de lancamento, autor e categoria;
// - Deve ser possível buscar um livro pelo titulo
// - Deve ser possível buscar todos os livros de um determinado autor
// - Deve ser possível atualizar as informacoes de um livro passando o seu id
// - Deve ser possível deletar cada livro pelo id

class Livro{
    constructor(data){
        this.id = new Date().getTime();
        this.titulo = data.titulo,
        this.descricao = data.descricao,
        this.anoLancamento = data.anoLancamento,
        this.autor = data.autor,
        this.categoria = data.categoria
    }
}

class Repositorio{
    repositorio = []

    cadastrarLivro(data){
        const livro = new Livro(data);
        this.repositorio.push(livro)
        return livro

    }
    buscarLivro(titulo){
        const livro = this.repositorio.find((livro)=>  livro.titulo == titulo ) 
        if (livro){
            return livro
        }
    }
    buscarAutor(autor){
       return this.repositorio.filter((livro)=> livro.autor === autor)
    }

    listarTodosLivros(){
        return this.repositorio
    }
    atualizarLivro(id, novosDados){
        const indiceDoLivro = this.repositorio.indexOf(this.buscarLivro(id))
        console.log(`O id do livro é ${id}`)
        if(indiceDoLivro >-1){
           return this.repositorio[indiceDoLivro] = {...this.repositorio[indiceDoLivro], ...novosDados} 
        }
        else{
            throw new Error('Livro não encontrado')
        }
    }
    removerLivro(id){
        const indiceDoLivro = this.repositorio.indexOf(this.buscarLivro(id))
        if(indiceDoLivro > -1){
             return this.repositorio.splice(indiceDoLivro ,  1)
        }else{
            throw new Error ('Não foi possível realizar a exclusão. O livro não foi encontrado')
        }
    }
}

const  livros = new Repositorio()
livros.cadastrarLivro({titulo: "Noiva", descricao: "Livro novo ALi Hazelwood",anoLancamento: "2024", autor: "Ali Hazelwood",categoria: "fantasia"})
livros.cadastrarLivro({titulo: "O Alquimista", autor: "Paulo Coelho"})

console.log('---------BUSCAR LIVRO---------')
console.log(livros.buscarLivro('Noiva'))
console.log('---------BUSCAR AUTOR---------')
console.log(livros.buscarAutor( 'Paulo Coelho'))
// console.log('---------ATUALIZAR---------')
// console.log(livros.atualizarLivro(livros.listarTodosLivros()[0].id), {descricao: "Livro do Paulo Coelho mais famoso", anoLancamento: 1988, categoria: "romance"})
console.log(livros.listarTodosLivros())
console.log('----------REMOVER--------')
livros.removerLivro('Noiva')
console.log(livros.listarTodosLivros())