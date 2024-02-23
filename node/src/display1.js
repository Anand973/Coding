import React from 'react'

export default function display1(props) {
  return (
    <>
    <div>
    <h1>HELLO </h1>
    <h2> my name is {props.name} , the price is {props.price} and quantity is {props.quantity}</h2>
    </div>
    </>
  )
}
