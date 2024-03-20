import express from 'express'
//npm i @types/

//criar servidor
const app = express()

app.get( '/users', (req, res) => {
    return Response.json({
        usuarios: ["Carlos","José","Maria"]
    })
}) 

//rodar servidor

app.listen(3333, () => console.log('Server is running')) //função de callback para saber que o servidor está rodandoapp.listen(3000, ()
//http://localhost:3333/produts


//dominio/id/url ->vai indicar o endereço da sua máquina

//dominio da minha máquina: localhost



//porta