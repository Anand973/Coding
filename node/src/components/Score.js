import React from 'react'

export default function Score(data) {
let arr=[];
for(let v in data){
    arr.push(<li>{data[v]}</li>)
}

  return (
    <ul>
        {arr}
    </ul>
  )
}
