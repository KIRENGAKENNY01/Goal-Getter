const{getPerson,createPerson,updatePerson,deletePerson}=require('../Controllers/PersonController')
const{getWork,createWork,updateWork,deleteWork}=require('../Controllers/workController')
const{getImportant,createImportant,updateImportant,deleteImportant}=require('../Controllers/ImportantController')

const express=require('express')
const router=express.Router()

router.get('/person',getPerson).get('/work',getWork).get('/important',getImportant)
router.post('/person',createPerson).post('/work',createWork).post('/important',createImportant)
router.put('/person/:id',updatePerson).put('/work/:id',updateWork).put('/important/:id',updateImportant)
router.delete('/deletePerson',deletePerson).delete('/deletWork',deleteWork).delete('/deleteImportant',deleteImportant)



module.exports=router