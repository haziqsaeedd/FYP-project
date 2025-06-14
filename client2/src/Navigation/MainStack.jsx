import { Routes, Route } from "react-router-dom";

import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";


function MainStack() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
    
    </Routes>
  );
}

export default MainStack;
