import { Routes, Route } from "react-router-dom";

import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";

import Electricity from '../Pages/services/Electricity';
import HomeService from '../Pages/services/HomeService';
import Handcraft from '../Pages/services/Handcraft';
import Plumber from '../Pages/services/Plumber';
import Mechanic from '../Pages/services/Mechanic';

import UpsInstallation from "../Pages/services/Electricity/UpsInstallation";


function MainStack() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />

      <Route path="/services/electricity" element={<Electricity />} />
        <Route path="/services/home-service" element={<HomeService />} />
        <Route path="/services/handcraft" element={<Handcraft />} />
        <Route path="/services/plumber" element={<Plumber />} />
        <Route path="/services/mechanic" element={<Mechanic />} />

       <Route path="/services/electricity/ups-installation" element={<UpsInstallation />} />
    
    </Routes>
  );
}

export default MainStack;
