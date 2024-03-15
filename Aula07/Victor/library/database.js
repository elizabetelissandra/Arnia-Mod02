const { MongoClient} =  require('mongodb')

const client = new MongoClient('mongodb+srv://elizabetelissandrasilva:admin@cluster0.umywj9z.mongodb.net/')

const bookCollection = client.db("cluster0").collection("books")

module.exports = {bookCollection}