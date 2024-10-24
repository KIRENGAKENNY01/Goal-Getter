const mongoose=require('mongoose')
const {incrementId} = require('./counting')

const importantTaskSchema=new mongoose.Schema({
   Description:{type:String,required:true},
   Completed:{type:Boolean ,default:false},
   Id:{type:Number,unique:true}
})

importantTaskSchema.pre('save',async function(next){
    if(!this.Id){
        try{
        this.Id= await incrementId('importantTaskSchema');
        }
        catch(err){
        return next(err);
        }
    }

    next();
});

module.exports= mongoose.model('importantTasks',importantTaskSchema);