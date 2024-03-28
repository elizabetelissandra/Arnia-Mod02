import express from "express";

const app = express()

app.get( '/', (req, res) =>{})
app.post('/', (req, res) =>{})

app.listen(3000, ()=>{
    console.log('Servidor funcionando o/')
})