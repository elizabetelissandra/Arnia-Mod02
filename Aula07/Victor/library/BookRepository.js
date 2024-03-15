const { Book } = require('./book')
const {bookCollection} = require('./database')

//repositorio -> responsabilidade de  manipular o banco de dados 

class BookRepository {
    async create(book){
        const book = new Book(data)
        const response = await bookCollection.insertOne(book)
        console.log(response)

    }

    async list(){
        const  books = await bookCollection.find().toArray()
        return books
    }
}

module.exports = {BookRepository}  