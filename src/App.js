import './App.css';
import Navbarr from './Components/Navbar';
import Form from './Components/Form';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
const [mode, setMode] = useState("light")
const [alert, setAlert] = useState(null)

let showAlert = (msg, type) => {
    setAlert({
      message:msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    },1500)
}
const toggleMode = () => {
  if(mode === "light"){
    setMode("dark")
    document.body.style.backgroundColor = "black"
    showAlert("Dark mode has been enabled!", "success")
  }
  else{
    setMode("light")
    document.body.style.backgroundColor = "white"
    showAlert("Light mode has been enabled!", "success")
  }
}

  return (
    <>
    <Router>
    <Navbarr title="TextUtil" home="Home" toggleMode = {toggleMode} mode = {mode}/>
    {/* <Navbarr></Navbarr> */}
    <Alert prop = {alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About mode ={mode}/>} />
          <Route path="/home" element={<Form mode = {mode} alertt = {showAlert} />} />
          <Route path="/" element={<Form mode = {mode} alertt = {showAlert} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;