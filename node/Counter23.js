import React from 'react'

export default class Counter extends React.Component {

    constructor(){   /* it is a keyword*/
      super()  /* it calls the constructor of base class(component)*/
      this.state={
        count:100,
      }

    }

    handleclick=()=>{
          this.setState({
            count: this.state.count+ this.props.value
          })
    }

    handledecr=()=>{
        this.setState({
            count: this.state.count-10
        })
    }
  render() {
    return (
      <div>
       {/* <h1> Count: {this.state.count}</h1>*/}
        <img src="https://images.pexels.com/photos/18111476/pexels-photo-18111476/free-photo-of-traditional-door-number.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  width={this.state.count}/>
        <button onClick={this.handleclick}>INCREMENT BY 10</button>
        <button  onClick={this.handledecr}>DECREMENT BY 10</button>
      </div>

    )
  }
}

/*  STATE IS UPDATED BY SETSTATE */
{/*   STATE:   EACH CLASS COMPO HAS ITS OWN STATE.THEY ARE USED FOR HOLDINHG THE DYNAMIC DATA THAT NEED TO BE MEMORISED BY THE CLASS.
setState function is used for updating the state 
when the state is updated teh compo is rerendered
use state varaible and updating a state variable */}

/*  coding question : create a class component which displays an image and there should be two buttons with it one for increment and one for decrement the size of image*/

{/* create a  class component in which we have a input box and what is changed in the 
input box should display values below : hint=onchange  
onkeydown is  checks each key */}

