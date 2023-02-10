// import logo from '.#logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('warning');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert ({
      msg: message,
      type: type 
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }  
  
  const toggleMode= ()=> {
      if(Mode === 'warning'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert ("Dark Mode has been Enabled !", "Success");
    }
    else{
      document.body.style.backgroundColor = 'white';
      setMode('warning');
      showAlert ("Light Mode has been Enabled !", "Success");
    }

  }
  return (
   <>
      <Router>
        <Navbar title="TextAlter" Mode={Mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className= "container my-2">
          <Routes>
            <Route path="/About" element={<About Mode={Mode}/>}>
            </Route>
            <Route path="/" element={<TextForm showAlert={showAlert} heading= "Play with TextAlter Box :" Mode={Mode}/>}>  
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;

