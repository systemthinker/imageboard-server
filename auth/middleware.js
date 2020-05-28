const User = require('../models').user
const {toData} = require('./jwt')


const authMiddleware = async (req,res,next)=>{

    const authHeader = req.headers.authorization && req.headers.authorization.split(" ");
    // should be like "Bearer <token>"

    if(authHeader && authHeader[0] === "Bearer" && authHeader[1]){
     
        try {
        const data = toData(authHeader[1])
        const user = await User.findByPk(data.userId)

        

        if(!user){
            res.status(400).send('no user found')
        } else{
            
            req.user = user
            next();
        }
        } catch(e){
            res.status(400).send(`errormessage???: ${e.name} ${e.message}`)
        }
        

    } else {
        res.send("Bad request, missing auth header")
    }


}

module.exports = authMiddleware;