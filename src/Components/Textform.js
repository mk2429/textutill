import { useState } from "react"
import React from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        updatetext(text.toUpperCase())
        props.showAlert("Text Converted To Upper Case","Success");
    }
    const handleClearClick=()=>{
        updatetext("")
        props.showAlert("Text Cleared","Success");
    }
    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied To ClipBoard","Success");
    }
    const handleLowClick=()=>{
        updatetext(text.toLowerCase())
        props.showAlert("Text Converted To Lower Case","Success");
    }

    const handleOnChange=(event)=>{
        updatetext(event.target.value)

    }
    const[text ,updatetext]=useState("Enter Text Here");
  return (
    <>
    <center>
    <div className={`container text-${props.mode=="primary"?"dark":"light"}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode=="dark"?"#c9c9c9":"white",color:props.mode=="dark"?"white":"black",width:"50vw"}} value={text} onChange={handleOnChange} rows="8" ></textarea>
        </div>
        <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >UPPERCASE</button>
        <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>LOWERCASE</button>
        <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>CLEAR</button>
        <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>COPY TEXT</button>     
    </div>
    <div className={`container my-3 text-${props.mode=='primary'?'dark':'light'}`}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <p>{0.08*text.split(" ").filter((element)=>{return element.length!=0}).length} minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </center>
    </>
  )
}
