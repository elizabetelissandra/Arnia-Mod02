import { MongoClient } from 'mongodb';
import {url} from "./mongoURL"

export const client = new MongoClient(url)

export const entregaCollectionn = client.db('cluster0').collection( 'entregas' );