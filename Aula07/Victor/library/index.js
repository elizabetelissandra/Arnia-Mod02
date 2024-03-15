const {BookRepository, BookRepository} = require('./BookRepository')

const bookRepository = new BookRepository()

bookRepository.create({
    titulo: 'Vilão',
    descricao: 'laskasdasd',
    categoria: 'Fantasia',
    autor: 'Joao',
    lancamento: 2018
})


