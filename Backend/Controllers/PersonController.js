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


//get individual Task
const getPersonId=async(req,res)=>{
    try{
     const {Id}=req.params;
     const singleTask=await Task.findOne({Id:Id})
     if(!singleTask){
        return res.status(404).json({message:"This personal task not found"})
     }
     res.status(200).json({message:"Fetched Single personal Task",data:singleTask})
    }
    catch(err){
    res.statue(400).json({message:"Error while fetching individual task",data:err})
    }
}


// create a person
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


// update person
const updatePerson=async(req,res)=>{
  try{
   const {Id}=req.params;
   const {Description}=req.body;
   const updateTask=await Task.findOneAndUpdate(
    {Id:Id},
    {$set : {Description:Description}},
    {new:true}
   )
   if(!updateTask){
    return res.status(404).json({message:"The Task you want to update was not found"})
   }
   res.status(200).json({message:"Task updated",data:updateTask})
  }
  catch(err){
   res.status(400).json({message:"Failed to update personal task",data:err})
  }
}


// delete person
const deletePerson=async(req,res)=>{
try{
const {Id}=req.params;
const taskDelete=await Task.findOneAndDelete({Id:Id})
if(!taskDelete){
    return res.status(404).json({message:"Person Task to delete is not Found"})
}
res.status(200).json({message:"Personal task deleted",data:taskDelete})
}
catch(err){
res.status(200).json({message:"An error occured while deleting personal task",data:err})
}
}




module.exports={getPerson,getPersonId,createPerson,deletePerson,updatePerson}

