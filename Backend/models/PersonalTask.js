const mongoose= require('mongoose')
const {incrementId}=require('./counting')


const personalTaskSchema= new  mongoose.Schema({
    Description:{type:String,required:true},
    Completed:{type:Boolean,default:false},
    Id:{type:Number,unique:true}
})

personalTaskSchema.pre('save',async function(next){
if(!this.Id){
   try{
   this.Id=await incrementId('personalTaskSchema');
   }
   catch(err){
   return next(err);
   }
}

next();
})


module.exports= mongoose.model("personalTask",personalTaskSchema)