const { Router } = require('express')
const { toJWT, toData } = require('../auth/jwt')
const User = require("../models").user

const bcrypt = require('bcrypt')


const router = new Router()

router.post('/', async (req, res, next) => {
  const {email, password } = req.body;
if (!email || !password){
    res.status(400).send('please provide email and password')
} else {
    const user = await User.findOne({
        where: {
            email : email
        }
    });

  

   if(!user){
       res.status(400).send('no user found')
   } else{
       const comparePasswords = bcrypt.compareSync(password, user.password)
       
       if(comparePasswords){
            const token = toJWT({userId : user.id})

           res.status(400).send({token})
       } else{
        res.status(400).send('passwords do not match') 
       }
   }
}



})

module.exports = router