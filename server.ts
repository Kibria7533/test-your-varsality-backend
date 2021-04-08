import express ,{Response,Request} from 'express'
import dotenv from 'dotenv';
import UserRoutes from './Routes/UserRouts'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
dotenv.config()
const app=express();
mongoose.connect('mongodb://localhost:27017/testyourvarsality', {useNewUrlParser: true,useUnifiedTopology:true}).then(()=>{
    console.log('Database connected')
});
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/',UserRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server running at ${process.env.PORT}`)
})