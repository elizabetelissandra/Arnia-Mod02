const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb+srv://elizabetelissandrasilva:admin@cluster0.umywj9z.mongodb.net/')
const bookCollection = client.db('cluster0').collection('books')

class Book{
    titulo
    descricao
    lancamento
    autor
    categoria
    criado

    constructor(){
        this.titulo = data.titulo
        this.descricao = data.descricao
        this.lancamento = data.lancamento
        this.autor = data.autor
        this.categoria = data.categoria
        this.criado = new Date()
    }
}


//repositorio -> tem a responsabilidade de manipular o banco de dados

class BookRepository{
    async create(data){
        const book = new Book(data)
        const user = await bookCollection.insertOne(book)
    }

    async list(){
        const  books = await bookCollection.find().toArray()
        return books
    }
}
