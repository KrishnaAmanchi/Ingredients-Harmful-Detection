const mongoose=require('mongoose')
require('dotenv').config()
const connectionUrl=process.env.MONGODB_URL

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true
})