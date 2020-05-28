


const authMiddleware = (req,res,next)=>{

    const authHeader = req.headers.authorization && req.headers.authorization.split(" ");
    // should be like "Bearer <token>"

    if(authHeader && authHeader[0] === "Bearer" && authHeader[1]){


    } else {
        res.send("Bad request, missing auth header")
    }


}