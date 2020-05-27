const express = require('express');
const app = express();
const PORT = 4000;




app.get('/',(req,res)=>{
    console.log(req.method) 
    res.send('hi')
})

app.listen(PORT,()=>{
    
    console.log('listening on port',PORT);
})