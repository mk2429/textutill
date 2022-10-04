import React from 'react'
import { useState } from 'react'

export default function About() {
    
    const [myStyle,updatestyle]=useState({
        color:"black",
        backgroundColor:"white"
    })
    const [btntxt,updatebtn]=useState("Enable Dark Mode")

    const modetoggeler=()=>{
        if(myStyle.color=="black"){
            updatestyle({
                color:"white",
                backgroundColor:"black",
                
            })
            updatebtn("Enable Light Mode")
        }
        else{
            updatestyle({
                color:"black",
                backgroundColor:"white",
                
            })
            updatebtn("Enable Dark Mode")
        }
    }

  return (
    <div className="container">
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About TextUtils
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong >It is the Text anylyzer cum editor app</strong> It can be used to convert text to uppercase and lowercase.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        About Developer
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is developed by MK .</strong> It is his first REACT project.
      </div>
    </div>
  </div>
</div>
<div className="container">
<button type="button" className="btn btn-success my-3" onClick={modetoggeler}>{btntxt}</button> 
</div>
    </div>

  )
}
