import mongoose from "mongoose";

const User=new mongoose.Schema({
name:{require:true,type:String},
pass:{required:true,type:String},

},
{collection:"Users"}
)
const model=mongoose.model("User",User)

export default model