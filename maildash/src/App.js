
import React from "react";
import Navbar from "./Components/Navbar";
import './Components/Navbar.css'
import './Components/CardSection.css'
import  "./Components/TopSection.css";
import TopSection from "./Components/TopSection";
import CardSection from "./Components/CardSection";
import Footer from './Components/Footer'
import Testimonial from './Components/Testimonial'
import Price from './Components/Price'
import Login from './Components/Login'
import Touch from './Components/Touch'


function App() {
  return (
    <div className="App">

      <Navbar/>
      <TopSection/>
      <Price/>
      <CardSection/>
      <Testimonial/>
      <Footer/>
      <Login/>
      <Touch/>
      
      
      
    </div>
  );
}

export default App;
