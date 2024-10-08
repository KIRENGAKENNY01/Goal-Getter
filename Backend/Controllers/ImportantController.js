const Task=require('../models/ImportantTask')
//get all tasks
const getImportant=async(req,res)=>{
try{
    const task= await Task.find()
    res.status(200).json({message:' Fetching work task',data:task})
}catch(err){
    res.status(400).json({message:'Err while fetching Important Task',err})
}
}

const createImportant=async(req,res)=>{
    try{
    const newTask=new Task(req.body)
    await newTask.save()
    res.status(201).json({message:'Creating work task',data:newTask})
    }
    catch(err){
        res.status(400).json({message:'Err while creating Important Task',err})
    }
}

const updateImportant=async(req,res)=>{
    try{
    const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({message:' Updating Important task',data:task})
    
    }
    catch(err){
    res.status(200).json({message:'Err while updating Important Task',err})
    }
}
const deleteImportant=async(req,res)=>{
    try{
        const task=await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({message:' Deleting Importatn task',data:task})
    }
    catch(err){
        res.status(400).json({message:'Err while deleting Important Task',err})
    }
}




module.exports={getImportant,createImportant,deleteImportant,updateImportant}