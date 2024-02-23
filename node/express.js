const express=require("express");
const app= express();
const fs=require("fs")
app.get("/",(req,res)=>{
    res.end("hello");
})
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server started")
    }
})