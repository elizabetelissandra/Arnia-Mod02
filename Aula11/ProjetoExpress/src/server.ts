import express from 'express'

const app = express()

app.use(express.json())
app.get('/home', (req, res) => {
    res.send({"response" :'Hello World!'})
})

app.get('/contato', (req, res) => {
    res.send({"response" :'Página de Contato'})
})

app.post("/user", (req, res) =>{
    const {name} =  req.body
    

    res.send({return: "ok"})
})

app.listen(3000, () => console.log("Server is running on port 3000"))

// This server will listen to requests made by the client at http://localhost:3000/ and respond with "Hello World!"