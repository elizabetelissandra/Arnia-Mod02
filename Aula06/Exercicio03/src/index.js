const { MongoClient, ObjectId } = require('mongodb')

const client = new MongoClient('mongodb+srv://elizabetelissandrasilva:admin@cluster0.umywj9z.mongodb.net/')
const cluster = client.db('cluster0').collection('times');



// Cadastrando

 const cadastrarTime = async(nome, pontos, categoria, qntIntegrantes) => {
    const time = await cluster.insertOne({nome, pontos, categoria, qntIntegrantes})
    console.log("Dados Cadastrados => ", time);
    client.close()
}

// cadastrarTime("palmeiras", 70, "A", 45)
// cadastrarTime("São Paulo", 53, "A", 68)
// cadastrarTime("Bahia", 22, "C", 10)


// - Deve ser possível buscar um time pelo nome(LIKE QUERY)

const buscarTime =  async (nomeDoTime) =>{
   const time = await cluster.findOne({nome: nomeDoTime})  
   console.log('Resultado encontrado', time)
   client.close()
}

// buscarTime("Bahia")

//Deve ser possível buscar os times com pontuacao acima de 10(Greater than QUERY)

const buscaTimesAcimaDe30 = async (pontos)=>{
    
    const time = cluster.find({ pontos:  {$gt: pontos}}).toArray()
    console.log(`Times acima de ${pontos} Pontos, ${time}`)
    client.close()
}

buscaTimesAcimaDe30(30)