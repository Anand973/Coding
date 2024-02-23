/* Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log() */


/*Variables defined with var are hoisted to the top and can be initialized at any time.
Meaning: You can use the variable before it is declared: */


/*let x = 10;
x **= 5;*/ // answer is 100000

//All JavaScript numbers are stored in a a 64-bit floating-point format.


/*function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);

  console.log(value); */


  
 /* const obj={
    name:"anand",
    id:1447,
    college:"university"

}

let c=obj.name; //accessing values
let d=obj["name"] //accessing values
console.log(c);
console.log(d)*/

//EVENTS

/*Event	Description
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page */

//const a= new Array("aand","ajbss","jlbjx");  //ANOTHER WAY OF CREATNG AND ARRAY



/*const a=new Array(5,6,4,3,2,)
a.sort(function(a,b){return a-b}); //can also used for finding maximun
console.log(a.length)
console.log(a[a.length-1])*/

/*FINDING MAXIMUM ELEMENT IN ARRAY 
function he(a){
    let l=a.length;
    let max=-Infinity;
    while(l--){
        if(a[l]>max){
            max=a[l];
        }
    }
    return max;
}
let c=he(a);
console.log(c) */

 {/*const a={name:"anand ", id:56}
let text="";

for(let x in a){
    text+=a[x];
}

console.log(text); 
*/}

//FINDING MIN,MAX,MEDIAN,RANGE,AVERAGE,SORT//////
{/*const age=[19,22,33,44,55,66];
let min=age[0];
let max=age[age.length-1];
let sorted=age.sort((a,b)=>{
    return a-b;
})

let middle=age.length/2
if(age.length%2==0){
var median=(age[middle+1]+age[middle])/2
}
else{
    median=age[[middle]];
}
console.log(median)
var sum=0;
for(let i=0;i<age.length;i++){
     sum=sum+age[i];
}
console.log(sum)
let range=age[age.length-1]-age[0];
console.log(range) */}

//MOST FREQUENT ITEM IN ARRAY///////////////
{/*const ar=[1,2,3,'a','b','a','a','a'];
let count=0;
let item;
for(let i=0;i<ar.length;i++){
  var k=0;
  for(let j=i+1;j<ar.length;j++){
    if(ar[i]==ar[j]){
        k++;
    }
  }
  if(k>count){
    count=k;
    item=ar[i];
  }
}

console.log(count+1)
console.log(item); */}

//REMOVE DUPLICATE FROM ARRAY////////

{/*const ar=[1,2,3,3,3,4,5,]

var a=[];
for(let i=0;i<ar.length;i++){
    var dup=0;
    for(let j=0;j<a.length;j++){
        if(ar[i]==a[j]){
           
           dup=1;
           break;
        }
       
    }
    if(dup==0){
        a.push(ar[i]);
    }
}

console.log(a) */}
 
