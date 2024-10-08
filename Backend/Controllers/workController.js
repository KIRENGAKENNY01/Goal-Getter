const Task= require('../models/WorkTask')
//get all tasks
const getWork=async(req,res)=>{
try{
    const task= await Task.find()
    res.status(200).json({data:task})
}catch(err){
    res.status(400).json({message:'Err while getting all work task',err})
}
}

const createWork=async(req,res)=>{
    try{
    const newTask=new Task(req.body)
    await newTask.save()
    res.status(201).json({message:'Work task created',data:newTask})
    }
    catch(err){
        res.status(400).json({message:'Err while creating work Task',err})
    }
}

const updateWork=async(req,res)=>{
    try{
    const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({message:'Updating work task',data:task})
    
    }
    catch(err){
    res.status(200).json({message:'Err while updating work Task',err})
    }
}
const deleteWork=async(req,res)=>{
const {userid}=req.body;
try{
Task.deleteOne({_id:userid});
res.status(200).json({message:"user Deleted"},function (err,res){
    console.log(err)
})
res.status(200).send("Deleted")
}
catch(err){
    console.log(err);
}


}




module.exports={getWork,createWork,deleteWork,updateWork}