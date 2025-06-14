import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainStack from "./Navigation/MainStack";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";


function App() {
 

  return (
    <BrowserRouter>
      <Navbar/>
      <MainStack /> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
