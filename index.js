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
    origin: ["https://frontend-3a5m.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', UserRouter)

app.post('/auth/signup', (req, res) => {
    // Your signup logic here
  });



mongoose.connect('mongodb+srv://kelas:L71noEVRLPMX9Rth@kelas.eei6kwp.mongodb.net/authentication')


app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})