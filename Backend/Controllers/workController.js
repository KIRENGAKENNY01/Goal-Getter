const Task= require('../models/WorkTask')
//get all tasks
const getWork=async(req,res)=>{
try{
    const task= await Task.find()
    res.status(200).json({ data:task})
}catch(err){
    res.status(400).json({message:'Err while getting all work task',data:err})
}
}
//get task by id
const getWorkId=async(req,res)=>{
    try{
     const {Id}=req.params;
     console.log(Id);
     const singleWork= await Task.findOne({Id:Id})
     console.log(singleWork)
     if(!singleWork){
        return res.status(404).json({message:"Work Task Not Found"})
     }
     res.status(200).json({message:"Fetched a single work task",data:singleWork})
    }
    catch(err){
    res.status(404).json({message:"Err occured while fetching a single task",data:err})
    }
}





// create work 
const createWork=async(req,res)=>{
    try{
    const newTask=new Task(req.body)
    await newTask.save()
    res.status(201).json({message:'Work task created',data:newTask})
    }
    catch(err){
        res.status(400).json({message:'Err while creating work Task',data:err})
        console.log(err);
    }
}
//update work by id  
const updateWork=async(req,res)=>{
    try{
      const{Id}=req.params;
      const{Description}=req.body;
      const updateTask=await Task.findOneAndUpdate(
        {Id:Id},
        {$set:{Description:Description}},
        {new:true}
      )
      if(!updateTask){
        return res.status(404).json({message:"Work task not Found"})
      }
      res.status(200).json({message:"Work task updated" ,data:updateTask})
    }
    catch(err){
    res.status(200).json({message:'Err while updating work Task',err})
    }
}

//Delete work by id 
const deleteWork=async(req,res)=>{
try{
const {Id}=req.params;
const deletedTask= await Task.findOneAndDelete({Id:Id})
if(!deletedTask){
    return res.status(404).json({message:"No work task is deleted"})
}
res.status(200).json({message:"user Deleted",data:deletedTask})
}
catch(err){
    console.log(err);
}


}




module.exports={getWork,getWorkId,createWork,deleteWork,updateWork}