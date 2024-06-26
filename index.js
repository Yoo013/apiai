import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import{UserRouter} from './routes/user.js'



const app = express()



app.use(express.json())
app.use(cors({
    origin: "https://frontend-edsa-client.vercel.app",
    methods: ["GET", "POST", "PUT"],
    headers: {
        "Access-Control-Allow-Origin": "https://frontend-v4fu.vercel.app/",
        "Access-Control-Allow-Credentials": true
    },
}));
app.use(cookieParser())
app.use('/auth', UserRouter)



mongoose.connect('mongodb+srv://kelas:L71noEVRLPMX9Rth@kelas.eei6kwp.mongodb.net/authentication')


app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})