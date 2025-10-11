import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import propertyRouter from "./routers/propertyRouter.js";
import authRouter from "./routers/authRouter.js";
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())

app.use("/properties", propertyRouter);
app.use("", authRouter)

connectDB().then(
    ()=>{
    app.listen(PORT, ()=>{
    console.log(`connection to Database successful\nserver listening on http://127.0.0.1:${PORT}`);
})
    }
).catch(error=>{
    console.log(error.message)
})