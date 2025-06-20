import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => { setalert(null); }, 1500);
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils-Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils-Light Mode';
    }
  }
  const toggleMode1 = () => {
    if (Mode === 'light' || Mode === 'dark') {
      setMode('red');
      document.body.style.backgroundColor = 'red';
      showAlert("Red Mode has been enabled", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="textutils" aboutText="About" mode={Mode} toggleMode={toggleMode} toggleMode1={toggleMode1} />
      <Alert alert={alert} />
      <div className="container my-3" >
        {/* <Routes>
            <Route exact path="/about" element={<About />} >
            </Route> */}
        {/* <Route exact  path="/" element={<TextForm heading="Enter the text to Analyze below" mode={Mode} showAlert={showAlert} />}> */}
        <TextForm heading="Enter the text to Analyze below" mode={Mode} showAlert={showAlert} />
        {/* </Route>
          </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}


export default App;
// "deploy": "gh-pages -d build",