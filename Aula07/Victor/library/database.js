const { MongoClient} =  require('mongodb')
const url = require('./mongoURL')

const client = new MongoClient(url)

const bookCollection = client.db("cluster0").collection("books")

module.exports = {bookCollection}