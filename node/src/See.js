import React from 'react'

export default class See extends React.Component {

    constructor(){
        super();
        this.state={
            text:"ENTER TEXT HERE"
        }
    }

   presskey =(e)=>{     
    if(e.key=="Enter"){
        this.setState({
            text:e.target.value
        })
    }
   }

  render() {
    return (
      <div>
        <input type="text"  onKeyDown={this.presskey} />
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}
