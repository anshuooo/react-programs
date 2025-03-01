import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import PropertyCard from "./components/PropertyCard";
import propertyDetails from "./pages/propertyDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/About" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/PropertyCard" element={<PropertyCard />} />
        <Route path="/propertyDeatails" element={<propertyDetails />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
       
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
