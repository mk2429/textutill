import React from 'react'
import propTypes from "prop-types"
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.abouttext}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
  <div className={`form-check container form-switch text-${props.mode=='light'?'dark':'light'}`} style={{display:'flex',alignItems:'center',justifyContent:'end'}}>
  <input className="form-check-input mx-2" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault"> {props.mode=='primary'?'light':'dark'} mode</label>
</div>
</nav>
    </div>
  )
}
Navbar.propTypes={
    title:propTypes.string,
    abouttext:propTypes.string

}
Navbar.defaultProps={
    tittle:"set title here",
    abouttext:"about text here"
}