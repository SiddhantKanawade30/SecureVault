import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import {About} from './components/About';
import {Features} from './components/Features';
import Contact from './components/Contact';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import {Manager} from './components/Manager'
import { useLocation } from 'react-router-dom';


const App = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

const location = useLocation();
const hideNavbarRoutes = ['/manager'];
const hideNavbar = hideNavbarRoutes.includes(location.pathname);


  return (
    <>
    <div class="absolute top-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {!hideNavbar && (
  <Navbar setShowSignup={setShowSignup} setShowLogin={setShowLogin} />
)}


      <Routes>
        <Route path="/" element={<Dashboard setShowSignup={setShowSignup} />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>

     
      <Signup
        open={showSignup}
        onClose={() => setShowSignup(false)}
        switchToLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
      />
      <Login
        open={showLogin}
        onClose={() => setShowLogin(false)}
        switchToSignup={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
      />
      </div>
    </>
  );
};

export default App;
