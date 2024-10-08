const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const userRouter=require('./routes/userRoute')
const Task=require('./routes/taskRoute')
const cors=require('cors');
const dotenv=require('dotenv')

dotenv.config()//this loads environmental variables from the env file

const app=express()
const PORT=process.env.PORT || 5000;
const MONGO_URL=process.env.DB;
app.use(cors());
app.use(bodyParser.json())


mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected to Mongodb')
}).catch((err)=>{
    console.log('Err during connection to mongodb',err)
})
app.use('/user',userRouter)
app.use('/api/task',Task)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})