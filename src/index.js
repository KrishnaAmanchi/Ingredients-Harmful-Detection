const express=require('express')

require("./db/mongoose")

const app=express()

const ingRouter=require('./routes/ing.js')
const port=process.env.PORT

app.use(express.json())
app.use(ingRouter)
app.listen(port,()=>{
    console.log("server is running at port number ",port)
})

