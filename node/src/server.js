const d=require("./module.js");
//console.log(d.sum(5,4));
console.log(d.mul(6,7));
//console.log(d.fun());
//console.log(d);
//console.log(d.a);
//console.log(d.b);
//const fs=require("fs");  // it is inbuilt variable which contains lots of functions  we are only using Writefile Append file 
//console.log(fs);  

/*Writefile("filename","12",(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("sure");
    }
}) THIS IS USED TO CREATE A FILE AND ADD THE CONTENTS AND CAN ALSO REWRITE THE CONTENTS IN  A FILE */
//ASYNC FOLLOWS ERROR FIRST APPROACH
/*Appendfile("filename",Data,(err){

}) */

/*
readfile("filename","utf-8",(err,data){
    if(err){
        console.log(data);
    }
    else{
        console.log(data);
    }
})
fs.readfilesync("filename",encoding sscheme="utf-8");
fs.Writefilesync("filename","data") if error comes in sync then server is closed 
fs.Appendfilesync("filename","data"); 
*/
///////////WRITEFILE
/*let data=fs.writeFileSync("./abc.json","12");
console.log(data); */
/*fs.writeFile("./abc.json","12",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("done");
    }
}) */
////////APPEND FILE
/*fs.appendFile("./abc.json","abc",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("succes");
    }
})
let add=fs.appendFileSync("./abc.json","def");
console.log(add);  */

/*fs.readFile("./abc.json","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }

    else{
        console.log(data);
    }
})

let read=fs.readFileSync("./abc.json","utf-8");
console.log(read,"jhg"); */

//////RENAME////////
/*fs.rename("actual file","new-filename",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("rename-succ");
    }
})  */

/*fs.rename("./abc.json","./def.json",(err)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log("rename");
    }
}) */

/////COPYFILE///
/*fs.copyFile("./def.json","./zef.json",(err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("copied");
  }
})  */
/* FOR JOINIG PATH PATH MODULE IS USED */
const path=require("path");
/*console.log(__dirname); // IT RESULTS THE ABSOLUTE PATH UPTO THE CURRENT FILE PATH(NOT INCLUDED)
console.log(__filename);   // IT RESULTS IN ABSOLUTE PATH WITH  CURRENT FILE PATH  (INCLUDED)
console.log(path.basename(__dirname)); // IT RESULTS THE LAST BASE OR FOLDER OR FILE NAME
console.log(path.basename(__filename));
console.log(path.extname(__dirname)); 
console.log(path.extname(__filename)); */

/*console.log(path.join("folder1","folder2","folder3")); //IT WILL RETURN ABSOLUTE PATH(NOT ALWAYS) OUTPUT folder1/folder2/folder3
console.log(path.join("/folder1","folder2","folder3"));
console.log(path.join("/folder1","//folder2","folder3"));
console.log(path.join("/folder1","folder2","../folder3")); */


/*console.log(path.resolve("folder1","folder2","folder3"));  //IT WILL RESULT RELATIVE PATH (ALWAYS)
console.log(path.resolve("/folder1","folder2","folder3"));
console.log(path.resolve("/folder1","//folder2","folder3"));
console.log(path.resolve("/folder1","folder2","../folder3")); */

//read dir(sync and async both) mkdir  //hw 

/////EVENT///// it creates an event and can be used to call it also
/* */ 
const EvenEmitter= require('events');
const eventEmitter=new EvenEmitter();  // IT CREATE AN OBJECT IN WHICH EVENT WILL BE SHOWED  
//IT CREATES THE EVENT//
/*eventEmitter.on('start',()=>{  //'start': this is event name // IT HAS 2 ARGUMENTS
    console.log("started");
})
////IT CALLS THE EVENT////
eventEmitter.emit('start'); */
//PASSING 1 ARGUMENT////
/*eventEmitter.on('start',(number)=>{
    console.log(`started ${number}`);
})
eventEmitter.emit('start',23); */
///PASSING 2 ARGUMENTS////
/*eventEmitter.on('start',(start,end)=>{
    console.log(`started from ${start} to ${end}`);
})
eventEmitter.emit('start',1,100); */
//// IF THERE ARE TWO EVENTS OF SAME NAME THEN BOTH WILL BR EXECUTED SYNCLY

/*eventEmitter.on('start',()=>{  //'start': this is event name // IT HAS 2 ARGUMENTS
    console.log("heelo ");
})
eventEmitter.emit('start');
eventEmitter.on('start',()=>{
    console.log("ki hal hain");
})
eventEmitter.emit('start'); */  

//assignmenmt 1  print date : Date.now(),"sum",output(a+b) all detailts to be saved in a f




