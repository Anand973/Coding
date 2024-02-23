import React from 'react'

export default class Upper extends React.Component {
constructor(){
    super();
    this.state={
        text:"ENTER TEXT HERE"

        
    }
}

changetoup=()=>{
    this.setState({
        text:this.state.text.toUpperCase()
    })
}

changetodown=()=>{
    this.setState({
        text:this.state.text.toLowerCase()
    })
}


  render() {
    return (
      <div>
        <textarea  value={this.state.text} ></textarea>
        <button onClick={this.changetoup}>CONVERT TO UPPERCASE</button>
        <button onClick={this.changetodown}>CONVERT TO LOWERCASE</button>
      </div>
    )
  }
}
