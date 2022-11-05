const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("Its running now !! ")
})


     app.listen(5000, ()=>{
        console.log("server running");
     })