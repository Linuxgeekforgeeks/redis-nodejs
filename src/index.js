const express=require("express")


const PORT=5000
const app=express()



app.listen(PORT,()=>{
    console.log("Our App is running on the port "+PORT)
})