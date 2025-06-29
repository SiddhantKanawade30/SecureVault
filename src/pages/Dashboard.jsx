import Navbar from "../components/Navbar";
import React from 'react'
import { Hero } from "../components/Hero";
import { useState } from "react";
import { Signup } from "../components/Signup";
import { Login } from "../components/Login";

const Dashboard = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);



  return (
    <div>
      <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>
      <Hero setShowSignup={setShowSignup}/>
      <Signup open={showSignup} onClose={() => setShowSignup(false)} switchToLogin={() => {setShowSignup(false); setShowLogin(true);}}/>
      <Login open={showLogin} onClose={() => setShowLogin(false)} switchToSignup={() => {setShowLogin(false); setShowSignup(true);}} />
    </div>
  )
}

export default Dashboard
