import React,{useState}from 'react'

export default function Text(props) {

  const handleupclick=()=>{
    console.log("UPPERCASE was clicked")
    let newT=text.toUpperCase();
    setText(newT);
  }

  const handleonchange=(event)=>{
    console.log("on change");
    setText(event.target.value); /*used to write in textarea*/
  }
  const [text,setText] = useState("Enter text here");
  {/* text="new text"  THIS IS WRONG WAY TO CHANGE TEXT*/}
  {/*setText("new text"); */} /*CORRECT WAY TO CHANGE TEXT*/ 
  return (
    <div>
      
  
      <h1>{props.h}</h1>
<div className="mb-3">
  <textarea className="form-control"  value={text}  onChange={handleonchange} id="Mybox" rows="3"></textarea>
</div>
<button onClick={handleupclick}>Convert it to uppercase</button>
    </div>
  )
}



/* HOOKS ARE ADDED TO REACT IN VERSION 16.8
 DEFINITION
 HOOKS ARE SPECIALISED FUNCTIONS THAT ARE USED TO HOOK THE FEATURES TO FUNCTIONAL COMPONENT. FUCNTIONAL COMP BY DEFAULT DONOT HAVE STATES.THEREFORE THERE 
 ARE KNOWN AS STATELESS COMPO OR DUMP COMP.WITH THE HELP OF HOOKS WE ADD STATES TO THE FUNCTIONAL COMP 
 HOOKS USED INSIDE FUNCTION
 
 */

 