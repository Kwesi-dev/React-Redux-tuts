const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/products')
const cors = require('cors')
dotenv.config()
const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("database connected")
})
.catch((err)=>{
    console.log(err)
})

app.use(cors())
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)

app.listen(process.env.PORT || 5000, ()=>{
    console.log('backend server running')
})