import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState("Enable Dark Mode")

  const toggleMode = () => {
    if (mode == 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#383838';
      setModeText("Enable Light Mode")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setModeText("Enable Dark Mode")
    }
  }

  return (
    <>
       <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode = {toggleMode} modeText = {modeText}/>
       <div className="container">
      <TextForm heading="Enter the text to analyze" mode = {mode}/>
       </div>
       
    </>
  );
}

export default App;
