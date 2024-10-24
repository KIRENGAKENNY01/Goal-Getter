const{getPerson,createPerson,updatePerson,deletePerson, getPersonId}=require('../Controllers/PersonController')
const{getWork,getWorkId,createWork,updateWork,deleteWork}=require('../Controllers/workController')
const{getImportant,createImportant,updateImportant,deleteImportant, getImportantId}=require('../Controllers/ImportantController')

const express=require('express')
const router=express.Router()

router.get('/person',getPerson).get('/work',getWork).get('/important',getImportant)
router.get('/person/:Id',getPersonId).get('/work/:Id',getWorkId).get('/important/:Id',getImportantId)
router.post('/person',createPerson).post('/work',createWork).post('/important',createImportant)
router.put('/person/:Id',updatePerson).put('/work/:Id',updateWork).put('/important/:Id',updateImportant)
router.delete('/person/:Id',deletePerson).delete('/work/:Id',deleteWork).delete('/important/:Id',deleteImportant)



module.exports=router