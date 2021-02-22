import express from "express";

const app = express()

app.get("/users",(req,res)=> {
    res.json({message: "Hello world"})
})



app.listen(3333,()=> console.log("Server is running")) 