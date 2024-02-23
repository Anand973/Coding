import React ,{useState}from 'react'

export default function Ar() {

    const arr=[{name:"rahul",rollno:21},
{name:"John", rollno:31},

{name:"Ram", rollno:36},

];
    const [msg,setmsg]=useState(arr);
  return (
    <>
    <ul>
        {  
            msg.map((item)=>{
                return <li>{item.name} {item.rollno}</li>
            })
        }
    </ul>
    
    </>
  )
} 



