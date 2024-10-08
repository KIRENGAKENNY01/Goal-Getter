const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    Description:{type:String,required:true},
    Completed:{type:Boolean,default:false}
})

module.exports=new mongoose.model("importantTask",taskSchema)