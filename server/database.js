import {config} from 'dotenv'
config()

import connectDB from "mongoose"

connectDB.set('strictQuery', false);

(async ()=>{
  await connectDB.connect(process.env.MONGO_URI)

console.log("base de datos")
})();

