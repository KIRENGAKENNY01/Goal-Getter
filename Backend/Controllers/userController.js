const User=require('../models/user')
// const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
const bcrypt=require('bcryptjs')
const user = require('../models/user');
dotenv.config();


//getting all users
const getUser=async (req,res)=>{
try{
const user=await User.find()
res.status(200).json({message:"Fetching all users",data:user})
}
catch(err){
res.status(400).json({message:"Err occured while fetching users",err})
}
}

//validating login
const validateUser=async(req,res)=>{

    const {email,password}=req.body   
    try{
        const checkUser=await user.findOne({email})
        if(checkUser){
           const passwordIsValid=await bcrypt.compare(password,checkUser.password)
           console.log(passwordIsValid);
           if(passwordIsValid){
            res.status(200).json({message:"is valid"})
           }
           else{
            res.status(401).json({message:"Invalid password"})
           }
        }
        else{
            res.status(401).json({message:"user doesn't exist",})
        }
    }
    catch(err){
        res.status(500).json({message:"Err during login verification",data:err})
    }
}



//creating all users
const createUser=async(req,res)=>{
    try{
     const {email} =req.body
     const existingUser=await User.findOne({email})
     if(existingUser){
        res.status(400).send("User arleady exists")

     }else{
     const newUser=new User(req.body)
     await newUser.save()
    //  const token=jwt.sign({userid:user_id},process.env.MY_SECRET,{expires:'1h'})
     res.status(201).send("User registered successfully");
     }
    }

    catch(err){
    res.status(400).json({message:"Err occured while creating user",err})
    }
}

//updating User by id
const updateUser=async(req,res)=>{
    try{
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({message:'Updated user',data:user})
    }
    catch(err){
    res.status(400).json({message:'Err occured while updating user',err})
    }
}


//Delete user by id 

const deleteUser=async(req,res)=>{
    try{
    const user=await User.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"User deleted",data:user})
    }
    catch(err){
    res.status(400).json({message:"Err occured during deletion of user",err})
    }
}


module.exports={getUser,validateUser,createUser,updateUser,deleteUser}