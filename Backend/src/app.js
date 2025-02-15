const express = require("express")
const aiRoutes = require('./Routes/aiRoutes')
const app = express()

app.get('/',(req,res)=>{
    res.send('route working');
})

app.use(express.json())
app.use('/ai',aiRoutes)

module.exports = app;

