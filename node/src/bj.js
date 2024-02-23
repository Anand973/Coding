fetch("/add?username=abc&id=123").then((res)=>{
    return res.join();
}).then(data=>{
    console.log(data);
}).catch((e)=>{
    console.log(e);
})