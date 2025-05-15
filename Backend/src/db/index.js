import 'dotenv/config';
import mongoose from "mongoose";
import { DB_name } from "../constants.js";


const connectDB = async()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
       console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.log("Mongodb connection faild(.db/index.js)", error);
        process.exit(1)
    }
}

export default connectDB