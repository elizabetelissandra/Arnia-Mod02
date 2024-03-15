// importar a biblioteca (lib) do mongoDb
const { MongoClient, ObjectId } = require("mongodb");
//Conectar com o mongodb: client
const client = new MongoClient(
  "mongodb+srv://elizabetelissandrasilva:admin@cluster0.umywj9z.mongodb.net/"
);
//dizer qual o banco de dados(cluster/datava) que eu quero manipular qual a collection que eu quero manipular
const cluster = client.db("cluster0").collection("students");

//creat

async function createStudent(nome, cpf, turma) {
  const aluno = await cluster.insertOne({nome, cpf, turma});
  console.log(aluno);
  client.close()
}

//read

async function listStudents() {
  const students =  await cluster.find().toArray();
  console.log(students);
  client.close()
}

async function listStudentsByClassName(turma) {
  const students = await cluster.find({ turma }).toArray();
  console.log(students)
  client.close()
}

async function getStudentByDocumentNumber(cpf) {
  const student = await cluster.findOne({ cpf });
  console.log(student)
  client.close()
}

//update

async function  updateStudentData(id, novosDados){
    const result = await cluster.findOneAndUpdate(
      { _id: new ObjectId(id)  },
      {$set : novosDados},
      
    );
   console.log(result);
   client.close()
}
//delete

async function removeStudent(id){
    await cluster.findOneAndDelete({_id: new ObjectId(id)});
    console.log('removeu')
    client.close()
}

/**
 * Collections
 * Documents
 */


// createStudent('Ana Maria', 999, 'turma d')
// listStudents()
// getStudentByDocumentNumber(465)
    
// listStudentsByClassName('turma e')
// updateStudentData('65f1017919302b268681e585',{"nome": "Joana", "cpf" : 158})
// removeStudent('65f102108615f314ae14af9b')
// listStudents();


