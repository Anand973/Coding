import React from 'react'

export default class Displayval extends React.Component {
constructor(){
    super()
    this.state={
        inputv:"Enter the text"
    }
}
 
handleonKeyDown=(event)=>{
    if(event.key == "Enter"){
    this.setState({
        inputv: event.target.value
    })
}
} 

handleonchange=(event)=>{
    
    this.setState({
        inputv: event.target.value
    })

}

  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleonKeyDown} onChange={this.handleonchange}  />
        
        <div>{this.state.inputv}</div>
      </div>
    )
  }
}
