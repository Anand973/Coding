import React ,{useState} from 'react'

export default function Show() {

const arr= ["sneha","yuvi","ki jodi","best"]

    const  [msg,setmsg]=useState("welcome to Chitkara")

    

    const handleonclick=()=>{
       setmsg("KI HAL HAIN")
    }

    const handleonchange =(e)=>{
        setmsg(e.target.value)
    }
  return (
   <>
   <h1>{msg} </h1>
   <input type="text"  onChange={handleonchange}/>

   
   <button onClick={handleonclick}  >Update</button>
   </>
  )
}




