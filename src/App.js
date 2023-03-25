import React from "react";
import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState("light");
  const [labelText, setlabelText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2E2E2E";
      setlabelText("Disable dark mode");
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setlabelText("Enable dark mode");
      showAlert("Dark mode Disabled", "danger");
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} labelText={labelText} title="MyFirst-App" about="About" />
      <Alert alert={alert} />
        <div className="container my-3">
          <TextForm showAlert={showAlert} Heading="Enter text to analyze below" mode={mode} />
        </div>
      </>
         
        // <Router>
        // <Navbar mode={mode} toggleMode={toggleMode} labelText={labelText} title="MyFirst-App" about="About" />
        // {/* <Navbar /> */}
        // <Alert alert={alert} />
        // <div className="container my-3">
        //   <Routes>
        //     <Route exact path="/" element={<TextForm showAlert={showAlert} Heading="Enter text to analyze below" mode={mode} />}/>
        //     <Route exact path="/about" element={<About/>}/>
        //   </Routes>
        //   </div>
        // </Router>
  );
}

export default App;
