const express = require('express');
const jsonParser = express.json();
const imageRouter = require('./routers/image')
const userRouter = require('./routers/user')
const authRouter = require('./routers/auth')
const app = express();
const PORT = 4000;
const cors = require('cors')


app.use(jsonParser);

app.use('/users',userRouter);
app.use('/images',imageRouter)
app.use('/login',authRouter)






app.listen(PORT,()=>{
    
    console.log('listening on port',PORT);
})