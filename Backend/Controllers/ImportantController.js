const Task=require('../models/ImportantTask')


//get all tasks
const getImportant=async(req,res)=>{
try{
    const task= await Task.find()
    res.status(200).json({message:' Fetching important task',data:task})
}catch(err){
    res.status(400).json({message:'Err while fetching Important Task',err})
}
}


//get individual importatn task
const getImportantId=async(req,res)=>{
    try{
    const {Id}=req.params;
    const singleTask=await Task.findOne({Id:Id});
    if(!singleTask){
        return res.status(404).json({message:"This important task is not found"})
    }
    res.status(200).json({message:"Fetched single important task", data:singleTask})
}
catch(err){
    res.status(400).json({message:"An error occured while fetching single important task",data:err})
}
    
}


//create important task 
const createImportant=async(req,res)=>{
    try{
    const newTask=new Task(req.body)
    await newTask.save()
    res.status(201).json({message:'Creating important task',data:newTask})
    }
    catch(err){
        res.status(400).json({message:'Err while creating Important Task',data:err})
        console.log(err);
    }
}


//update important task 
const updateImportant=async(req,res)=>{
 try{
  const {Id}=req.params;
  const {Description}=req.body;

  const updateTask=await Task.findOneAndUpdate(
    {Id:Id},
    {Description:Description},
    {new:true}
)
   if(!updateTask){
    return res.status(404).json({message:"Important task not found"})
   }
   res.status(200).json({message:"Updated important task ",data:updateTask})
 }
 catch(err){
  res.status(200).json({message:"An error occured while updating important task", data:err})
 }
}


//delete task
const deleteImportant=async(req,res)=>{
try{
const {Id}=req.params;
const deleteTask=await Task.findOneAndDelete({Id:Id})

if(!deleteTask){
    return res.status(404).json({message:"Important task to be deleted is not found"})
}

res.status(200).json({message:"Important task has been deleted",data:deleteTask})

}
catch(err){
 res.status(400).json({message:"An error occured while deleting an important task"})
}
}




module.exports={getImportant,getImportantId,createImportant,deleteImportant,updateImportant}