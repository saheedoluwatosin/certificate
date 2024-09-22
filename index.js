
const express = require("express")
const dotenv = require('dotenv').config()
const cors = require("cors")
const mongoose = require('mongoose')
const { router } = require("./Router/router")
//const router = require("./Router/router")

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT 
mongoose.connect(
    `${process.env.MONGO_DB_URL}`
)
    .then(()=>{
        console.log('Mongodb is connected')
    })
app.listen(PORT,() =>{
    console.log('Server is running')
})


app.use(router)





app.use((request,response)=>{
    return response.status(404).json({
        message:"Endpoint doesn't exist"
    })
})













