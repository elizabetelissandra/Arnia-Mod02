import {MongoClient} from 'mongodb';
import { url } from './mongoURL';


export const client = new MongoClient(url)

export const aluguelCarros = client.db('cluster').collection('aluguel-carro');