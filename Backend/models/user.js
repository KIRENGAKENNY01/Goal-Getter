const mongoose= require('mongoose')
const bcrypt=require('bcryptjs');

const userSChema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});
userSChema.pre('save',async function(next){
    if(!this.isModified('password')) return next();// if password not saved continue with other operation of the system
    const salt=  bcrypt.genSaltSync(10);
    this.password=await bcrypt.hash(this.password,salt);
    
    next();// to proceed with the saving 
})
module.exports= new mongoose.model("User",userSChema)