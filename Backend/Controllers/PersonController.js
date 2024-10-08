const Task=require('../models/PersonalTask')
//get all tasks
const getPerson=async(req,res)=>{
try{
    const task= await Task.find()
    res.status(200).json({message:'Fetching Personal task',data:task})
}catch(err){
    res.status(400).json({message:'Err while fetching Personal task',err})
}
}

const createPerson=async(req,res)=>{
    try{
    const newTask=new Task(req.body)
    await newTask.save()
    res.status(201).json({message:"Personal Task created",data:newTask})
    }
    catch(err){
        res.status(400).json({message:'Err while creating Personal task',err})
    }
}

const updatePerson=async(req,res)=>{
    try{
    const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})// access according to id and then access body and then enables new to true in order to change to a new value
    res.status(200).send({message:"Updating Personal task",data:task})
    
    }
    catch(err){
    res.status(200).json({message:'Err while updating Personal task',err})
    }
}
const deletePerson=async(req,res)=>{
    try{
        const task=await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({message:'Delete Personal task',data:task})
    }
    catch(err){
        res.status(400).json({message:'Err while deleting Personal Task',err})
    }
}




module.exports={getPerson,createPerson,deletePerson,updatePerson}

