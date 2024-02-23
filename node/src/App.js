
import './App.css';
import EmpArr from './EmpArr';
import EmpData from './EmpData';
import Empl from './Empl';
import Text from './Text';
import Counter from './Counter';
import Displayval from './Displayval';
import Marks from './Marks';
import Show from './Show';
import Ar from './Ar';
import Upper from './Upper';
import Score from './components/Score';
import See from './See';
import display1 from './display1';
{/*import React,{useState} from 'react';  */}



{/*import { Routes,Route } from 'react-router-dom'; */}
{/*import Hoome from './components/Hoome';
import About from './components/About'; */}

{/*var obj={
  name:"Tridip",
  age:19,
  isStu:true
} // now this obj will bw passed

var obj2={
  name:"Munna Tripathi",
  age:800,
  isStu:false
} // now this obj will bw passed

let arr=["Tejas","Arjun","Torpido"];
*/}
{/*
let EmoData={
EmpId:2,
EmpName:"Babu Bhaiya",
CompName:"Mera Company",
EmpSal:"150 rupaiya",
EmpDesig:"Ayaar"
}  
*/}



{/*let Emps=[
{
  EmpId:1,
  EmpName:"Babu Bhaiya",
  CompName:"Mera Company",
  EmpSal:"150 rupaiya",
  EmpDesig:"Ayaar"
},
{
  EmpId:2,
  EmpName:"Raju",
  CompName:"Mera Company",
  EmpSal:"150 rupaiya",
  EmpDesig:"Ayaar"
},
{
  EmpId:3,
  EmpName:"Babu Bhaiya",
  CompName:"Mera Company",
  EmpSal:"150 rupaiya",
  EmpDesig:"Ayaar"
}
]*/ }

function App() {

 


 const obj ={
    name:"anand",
    id:30873
  }
  const arr = [ "hi"," bye ","goodbye"
  ]

  let EmoData={
    EmpId:2,
    EmpName:"Babu Bhaiya",
    CompName:"Mera Company",
    EmpSal:"150 rupaiya",
    EmpDesig:"Ayaar"
    }

    let score={
      maths:100,
      science:99,
      english:98
    }

    let marks={
      eng:0,
      science:100,
      evs:99,
    } 

{ /*const [name,setname]=useState("anand")

    function changeName(){
      return setname("adarsh");
    }
const [name1, setclass]=useState("hitman")
function oncha(){
  setclass("hit me")
}

const [name2,setAD]=useState([]);
function addName(e){
  e.preventDefault();
  setAD([...name2,{id:name2.length,name}])
  setAD("");
} */}
  return (
    <>
 {/*<Navbar title="Title2" l="hello"/> */}       {/* syntax for using comment */}
 {/*<Navbar/> */}
 <div className='cnotainer' >
 <Text h="ENTER TEXT HERE"/>
  </div>  
 {/*<Obj name={obj.name} id={obj.id}/>
  <Obj newarr={arr}/>*/ }
   {/*<EmpData {...EmoData}/> 
    <Empl/>*/ }
   {/* <Score  {...score}/> */}
 {/*<Counter/>   to change the size manually we will give the size in parent component*/}
    {/*<Displayval/> */}
  {/*<See/>*/}
   {/*<Marks  {...marks}/> */}
   {/*<BrowserRouter/>*/ } {/*IT MANAGES ROUTER*/}
   {/*<Upper/>*/ }
 {/*<Show/> */}
 {/* <Ar /> */}
 
 {/* <Routes>
    <Route path='/' element={<Hoome />}/>
    <Route path='about' element={<About/>}></Route>
    
  </Routes>
*/}

{/*HOOKS*/}


{/*<div>
  <div>Hello {name}</div>
  <div>helo {name1} </div>
  <button onClick={changeName}>click</button>
  <button onClick={oncha}>click</button>
</div>*/}
{/*<form onSubmit={addName}>
  <input type=' text' value={name2} placeholder='ADD NAMES' onChange={(e)=>setAD(e.target.value)}  />
  <button>ADD</button>
</form> */}


    </>
  );
}


export default App;


/*  steps for routing 
 1. npm install react-router-dom
 2.   route address 
react library has many types of router (network router,browser router)
it is a type of router in react library which uses routes and route

*/
