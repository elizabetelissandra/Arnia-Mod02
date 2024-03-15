//entidade -> template do objeto
class Book{
    titulo
    descricao
    dataLancamento
    categoria
    autor
    criado

    constructor(data){
        this.titulo = data.titulo
        this.descricao = data.descricao
        this.lancamento = data.lancamento
        this.autor = data.autor
        this.categoria = data.categoria
        this.criado = new Date()

    }
}

module.exports = Book