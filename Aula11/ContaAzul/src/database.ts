import { MongoClient } from "mongodb";
import { url } from "./mongoURL";

export const client = new MongoClient(url);
export const financasCollection = client.db('cluster0').collection( 'finanças' );