const { MongoClient, ObjectId } = require('mongodb')

const client = new MongoClient('mongodb+srv://elizabetelissandrasilva:admin@cluster0.umywj9z.mongodb.net/')
const cluster = client.db('cluster0').collection('times');

