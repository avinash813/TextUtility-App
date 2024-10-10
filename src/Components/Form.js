import React, { useState } from 'react'

export default function Form(props) {
    const [text, setText] = useState('');
    function change(event){
      setText(event.target.value);
    }
    function clicked(){
        if(!(text.length === 0)){
        let utext = text.toUpperCase();
        setText(utext)
        props.alertt("Text is converted to Uppercase", "success")
        }
        else{
            alert("Type Something First")
        }
    }
    function clickedl(){
        if(!(text.length === 0)){
        let utext = text.toLowerCase();
        setText(utext)
        props.alertt("Text is converted to Lowercase", "success")
        }
        else{
            alert("Type Something First")
        }
    }

    let count = () => {
        if (text.length===0){
            return 0;
        }
        else{
            return text.trim().split(/\s+/).length;
        }
        }

        let clear = () => {
            let content = '';
            setText(content)
        }

        let copy = () => {
            const textField = document.querySelector('#exampleFormControlTextarea1');
            if (textField.value.trim().length === 0){
                textField.value=''
                alert("Type Something")
            }
            else{
                navigator.clipboard.writeText(textField.value)
                props.alertt("Text copied to clipboard", "success")
            }
        }
        const placeholderClass = props.mode === "dark" ? "placeholder-dark" : "placeholder-light";

        let handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/)
            setText(newText.join(" "))
            props.alertt("Removed Extra spaces", "success")
        }

  return (
<>
<div className="container" style = {{color:props.mode==="light"?"black":"white"}}>
  <h2>How was your day?</h2>
  <div className="mb-3">
  <textarea className={`form-control ${placeholderClass}`} id="exampleFormControlTextarea1" rows="6" value={text} onChange={change} placeholder='Start Typing...' style={{backgroundColor: props.mode==="light"?"white":"rgb(33 37 41)", color:props.mode==="light"?"black":"white"}}></textarea>
  </div> 
<button disabled = {text.length===0} className="btn btn-primary" onClick={clicked}>Convert to Uppercase</button>
<button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={clickedl}>Convert to Lowercase</button>
<button disabled = {text.length===0} className="btn btn-primary" onClick={copy}>Copy Text</button>
<button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={clear}>Clear</button>
<button disabled = {text.length===0} className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extraspaces</button>
</div>
<div className="container my-3" style = {{color:props.mode==="light"?"black":"white"}}>
<h2>Your Text Summary</h2>
<p>{count()} words and {text.length} characters</p>
<p>{0.008 * text.trim().split(/\s+/).filter(Boolean).length} minutes read</p>
</div>

</>
  )
}
