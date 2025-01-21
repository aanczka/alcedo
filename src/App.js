import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Mission from "./Mission";
import Footer from "./Footer";




const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
      </div>
      <About />
      <Mission/>
      <Footer/>
    </div>
  );
};

export default App;

