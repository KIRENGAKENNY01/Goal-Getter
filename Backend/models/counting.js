const mongoose=require('mongoose');

const countSchema= new mongoose.Schema({
    schemaName:{type:String,required:true},
    schemaValue:{type:Number ,default:0}
})

const Counter=  mongoose.model('Counter',countSchema);

async function incrementId(schemaName){
    const increase=await Counter.findOneAndUpdate(
        {schemaName},
        {$inc: {schemaValue:1}},
        {new:true,upsert:true}
    )

    if(!increase){
        throw new Error('increase not found');
    }
    return  increase.schemaValue;
}

module.exports={incrementId}































































// const mongoose =require('mongoose')

// const counterSchema=new mongoose.Schema({
//     schemaName:{type:String, required:true},
//     sequenceValue:{type:Number, default:0}
// })

// const Counter=new mongoose.model("Counter",counterSchema);

// async function NextValue(schemaName){
//     const sequence= await Counter.findOneAndUpdate(
//         {schemaName},
//         {$inc:{sequnceValue:1}},
//         {new:true,upsert:true}
//     )
//     if(!sequence){
//         throw new Error(`Sequence not found`)
//     }

//     return sequence.sequenceValue;

// }

// module.exports= {Counter,NextValue};