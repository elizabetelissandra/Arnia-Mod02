import { MongoClient } from  'mongodb';
import { url } from './mongoURL';

export const client = new MongoClient(url)

export const filmeCollection = client.db('cluster0').collection('filmes');
