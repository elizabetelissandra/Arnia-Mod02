import express from "express"

//instanciar servidor
const app = express()
app.use(express.json())
//rodar servidor
//criar endpoints
//conjunto de url + método http
// /users GET -> array de usuários
app.get("/users", (req, res) => {
    const users = [
        {"id": 1, "name":"Diego"},
        {"id":2,"name":"Cleiton"}
    ]
    return res.json(users) //retorna um json com os dados 
})

app.post( "/users", ( req, res )=>{
    console.log(req.body)
    return res.json()
})
    

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000" )
})