import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from './Components/About';

function App() {
  const [mode, setMode] = useState('primary');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggle = () => {
    if (mode == "primary") {
      setMode("dark");
      document.body.style.backgroundColor = "#00264D";
      showAlert("Dark mode Enabled", "Success");
    }
    else {
      setMode("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled", "Success");
    }
  }


  return (
    <>
    <Router>
      <Navbar title="TextsUtils" abouttext="About" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container my-5">
      
          <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Your Text To Analyze Here" mode={mode} />}/>
          </Routes>
           
        
      </div>
      </Router>
       


    </>
  );
}

export default App;
