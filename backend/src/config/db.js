import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const { connect } = mongoose

const connectDB = async()=>{
    await connect(
        process.env.DB_URL
    )
}

export default connectDB;