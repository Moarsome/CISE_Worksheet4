import { MongoClient } from 'mongodb'

const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.yt5iyob.mongodb.net/?retryWrites=true&w=majority"

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

let client = new MongoClient(MONGODB_URI, {})
let clientPromise

clientPromise = client.connect()

export default clientPromise