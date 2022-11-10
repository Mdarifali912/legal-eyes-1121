
import React from "react";
import Navbar from "./Components/Navbar";
import './Components/Navbar.css'
import './Components/CardSection.css'
import  "./Components/TopSection.css";
import TopSection from "./Components/TopSection";
import CardSection from "./Components/CardSection";


function App() {
  return (
    <div className="App">

      <Navbar/>
      <TopSection/>
      <CardSection/>
      
      
    </div>
  );
}

export default App;
