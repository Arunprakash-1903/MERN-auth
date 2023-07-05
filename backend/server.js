import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import User from"./models/userModel.js"
//JakxDUWK1vri8vbI
const URL="mongodb+srv://arunprakash1141:JakxDUWK1vri8vbI@cluster0.3yj2tnr.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log(err)
})
const app=express()
app.use(cors())
app.use(express.json())
const PORT=5555

app.get("/",(req,res)=>{
    res.send("<h1>hello</h1>")
})
app.post("/user/Signup",async(req,res)=>{
    try{
        const user=await User.create({name:req.body.name,pass:req.body.pass})
        res.send({status:"ok"})


    }catch(e){
        res.send({status:"error",e})

    }
    
})
app.post("/user/login",async(req,res)=>{
    
        const user=await User.findOne({name:req.body.name,pass:req.body.pass})
        user?res.send({status:"ok",auth:true}):res.send({status:"ok",auth:false})
       

   
    
})
app.listen(PORT,()=>{
    console.log(`Server running on port  ${PORT}`)
})