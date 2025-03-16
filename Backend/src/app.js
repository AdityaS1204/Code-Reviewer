const express = require("express")
const cors = require('cors')
const aiRoutes = require('./Routes/aiRoutes')

const app = express()

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('route working');
})

app.use('/ai',aiRoutes)

module.exports = app;

