const express=require('express')
const {getUser,validateUser,createUser,updateUser,deleteUser}=require('../Controllers/userController')

const router=express.Router()

router.get('/',getUser)
router.post('/valid',validateUser)
router.post('/',createUser)
router.put('/',updateUser)
router.delete('/',deleteUser)

module.exports=router