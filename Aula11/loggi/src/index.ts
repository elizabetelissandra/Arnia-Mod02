import express from "express"
import { EntregaRepository } from "./EntregasRepository"
import { Entrega, IEntrega } from "./Entregas"
import { ObjectId } from "mongodb"
import "./database"





//instanciar servidor
const app = express()
app.use(express.json())
const entregaRepository = new EntregaRepository()
//rodar servidor
//criar endpoints
//conjunto de url + método http
// /users GET -> array de usuários
app.get("/users", (req, res) => {
    const users = entregaRepository.buscarNaoEntregues(false)
    return res.json(users) //retorna um json com os dados 
})

app.post( "/users", ( req, res )=>{
    const users = entregaRepository.criar(req.body as IEntrega)
    return res.json(users)
})

app.patch("/users", (req, res) =>{
    const users = entregaRepository.atualizarPedido(new ObjectId(req.body._id), req.body)
    return res.json(users)
})
    

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000" )
})