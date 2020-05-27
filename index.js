const express = require('express');
const jsonParser = express.json();
const imageRouter = require('./routers/image')
const userRouter = require('./routers/user')
const app = express();
const PORT = 4000;

app.use(jsonParser);

app.use('/users',userRouter);
app.use('/images',imageRouter)






app.listen(PORT,()=>{
    
    console.log('listening on port',PORT);
})