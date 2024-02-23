
const http=require("http");//used to send data 
const fs=require("fs");
const server=http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url=="/home.html"||req.url=="/home"){
    fs.readFile("./home.html","utf-8",(err,data)=>{
      if (err)
      res.write("not");
    else{
      res.writeHead(200,{'Content-Type':"text/html"});
      res.write(data);
      //res.write("hello");
    }
    res.end();
    });
  }
  else if(req.url=="/style.css"){
    fs.readFile("./style.css","utf-8",(err,data)=>{
      if (err){
      res.writeHead(200,{'Content-Type':"text/plain"});
      res.write("not");
      }
    else{
      res.writeHead(200,{'Content-Type':"text/css"});
      res.write(data);
   }
   res.end();
   })
  }
   else if(req.url=="/about.html"||req.url=="/about"){
    fs.readFile("./about.html","utf-8",(err,data)=>{
      if (err){
      res.writeHead(200,{'Content-Type':"text/plain"});
      res.write("not");
      }
      else{
        res.writeHead(200,{'Content-Type':"text/html"});
        res.write(data);
      }
      res.end();
   })
}

else if(req.url=="/check"){
    fs.readFile("./user.json","utf-8",(err,data)=>{
        if(err){
            res.write(JSON.stringify("message: not working "));
        }
        else{
            res.write(data);
        }
        res.end();
    })
}
else if(req.url=="/bee.js"||req.url=="/bee"){
  fs.readFile("./bee.js","utf-8",(err,data)=>{
    if (err){
    res.writeHead(200,{'Content-Type':"text/plain"});
    res.write("not");
    }
    else{
      res.writeHead(200,{'Content-Type':"text/js"});
      res.write(data);
    }
    res.end();
 })
}
else if(req.url=="/contact.html"||req.url=="/contact"){
  fs.readFile("./contact.html","utf-8",(err,data)=>{
    if (err){
    res.writeHead(200,{'Content-Type':"text/plain"});
    res.write("not");
    }
    else{
      res.writeHead(200,{'Content-Type':"text/html"});
      res.write(data);
    }
    res.end();
 })
}
else{
  fs.readFile("./error.html","utf-8",(err,data)=>{
    if (err){
    res.writeHead(200,{'Content-Type':"text/plain"});
    res.write("not");
    }
    else{
      res.writeHead(200,{'Content-Type':"text/html"});
      res.write(data);
    }
    res.end();
 })
}
})

server.listen(8080,(err)=>{
  if(err)
  console.log(err);
else 
console.log("server is running at port 8080");
})
