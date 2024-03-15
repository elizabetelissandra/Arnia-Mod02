const mongodb = require('mongodb')
const url = require('./mongoURL')

const client = mongodb.MongoClient(url)
//cluster -> grupo de collections
const cluster0 = client.db('cluster0');
//collections -> array 
const carCollections = cluster0.collection('cars');

//Com a classe MongoClient, você vai se conectar a internet pela url.
//Despois de conectar, temos que escolher qual cluster vamos manipular e qual coleção do banco de dados escolhido, eu quero manipular.
//Depois disso teremos como realizar o CRUD  (Create, Read, Update e Delete)