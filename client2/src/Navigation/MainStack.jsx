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
import GeneralServices from "../Pages/services/Electricity/GeneralServices"
import FanInstallation from "../Pages/services/Electricity/FanInstallation";

import TapInstallation from "../Pages/services/Plumber/TapInstallation";
import TankCleaning from "../Pages/services/Plumber/TankCleaning";
import GeyserInstallation from "../Pages/services/Plumber/GeyserInstallation";



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
       <Route path="/services/electricity/general-electric" element={<GeneralServices />} />
        <Route path="/services/electricity/fan-installation" element={<FanInstallation />} />


        <Route path="/services/plumber/tap-installation" element={<TapInstallation />} />
        <Route path="/services/plumber/tankcleaning" element={<TankCleaning />} />
        <Route path="/services/plumber/geyser-installation" element={<GeyserInstallation />} />
    
    </Routes>
  );
}

export default MainStack;
