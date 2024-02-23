var a=10;
var b=20;
function fun(){
    return "Hello";
}

function sum(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}
 module.exports={a,b,fun};   // OR module.exports={a:a,b:b,fun:fun}; 
//module.exports.a=a;
//module.exports=a;
module.exports={sum};
module.exports={mul};
//module.exports={fun};
 //FOR EXPORTING 
// exports=a;  //is used to export either a single variable or a func