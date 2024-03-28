import express  from "express";
import { FinancasRepository } from "./FinancasRepository";
import { Financas, iFinancas } from "./Financas";
import { ObjectId } from "mongodb";
import "./database"

//instanciar servidor
const app =  express();
app.use(express.json()); //permite que o express entenda json

const financasRepository = new FinancasRepository;

//rodar servidor
//criar endpoints
//conjunto de url + métodos http
app.post("/financas", async(req, res) =>{
    const  financa = await financasRepository.fazerTransacao(req.body as iFinancas);
    return res.json(financa)
})

app.get("/financas", async (req, res)=>{
    const financa = await financasRepository.listarTodasTransacoes(req.body)
    return res.json(financa)
})

// app.get("/financas", async (req, res) =>{
//     const financa = await financasRepository.buscasSaques("saque")
//     return res.json(financa)
// })

// app.get("/financas", async (req, res)=>{
//     const financa = await financasRepository.buscarDepositos("deposito")
//     return res.json(financa)
// })

// app.get("/financas", (req, res)=>{
//     const financa = financasRepository.buscarPeloId(new ObjectId("65fb57d09a63ee95e06824e8"))
//     return res.json(financa)
// })

app.patch("/financas", (req,res)=> {
    const financa = financasRepository.cancelaTransacao(new ObjectId("65fb58049d64dc192678a890"), new Date())
    return res.json(financa)
})

app.listen(3000, () =>{
    console.log("Conseguiu se conectar \o/")
})