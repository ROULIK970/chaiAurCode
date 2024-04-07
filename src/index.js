import dotenv from "dotenv";
import { app } from "./app.js";
//require('dotenv').config({path:'./env'})
import connectDB from "./db/index.js";


dotenv.config({ path: "./env" });
connectDB()
.then(() =>{
    app.listen(process.env.PORT || 3000, () =>{
        console.log(`Server is running at PORT: ${process.env.PORT}`)
    })
})
.catch((e) =>{
    console.log("Connection failed", e)
})
