import { MongoClient } from "mongodb"
import { url } from "./mongoURL"


const client = new MongoClient(url)

const carCollection = client.db("cluster0").collection("AluguelCarros")

export {carCollection , client}