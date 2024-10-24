const mongoose=require('mongoose')

const {incrementId}=require('./counting')

const workTaskSchema= new  mongoose.Schema({
    Description:{type:String,required:true},
    Completed:{type:Boolean,default:false},
    Id:{type:Number,unique:true}
})


workTaskSchema.pre('save',async function(next){
    if(!this.Id){
        try{
        this.Id = await incrementId('workTaskSchema');
        }
        catch(err){
            return next(err)
        }
    }

    next();
  
});
module.exports=  mongoose.model("Worktasks",workTaskSchema)

