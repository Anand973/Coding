const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/home.html"){
        fs.readFile("./home.html","utf-8",(err,data)=>{
            if(err)
            res.write("not");
        else{
            res.write(data);
            res.write("hello");
        }
        res.end();
        })
    }
   /* if(req.url=="/home.html"){
    res.write("home page");
    res.end();
    }
    else{
        res.write("unown");
        res.end();
    }
    */

})

server.listen(3000,(err)=>{
    if(err)
    console.log(err);
else console.log("server is ruuning at port 3000");
})





