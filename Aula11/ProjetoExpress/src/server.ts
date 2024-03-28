import express from 'express'
import homeRouter from './routes/index'

const app = express()

app.use(express.json())

app.use('/home', homeRouter);
app.listen(3000, () => console.log("Server is running on port 3000"))

// This server will listen to requests made by the client at http://localhost:3000/ and respond with "Hello World!"