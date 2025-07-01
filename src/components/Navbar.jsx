import React, { useState, useEffect } from 'react';
import { Lock, Menu, X, Shield, User, LogIn } from 'lucide-react';

import { useNavigate } from 'react-router-dom'; 




const Navbar = ({ setShowSignup, setShowLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  
const navigate = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: null },
    { name: 'About', icon: Shield },
    { name: 'Features', icon: Lock },
    { name: 'Contact', icon: null }
  ];

  const getPathFromName = (name) => {
  switch (name) {
    case 'Home': return '/';
    case 'About': return '/about';
    case 'Features': return '/features';
    case 'Contact': return '/contact';
    default: return '/';
  }
};

  return (
    <>
      
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-xl bg-black/30' : 'bg-transparent'
      }`}>
        <div className={`flex justify-between items-center p-3 mx-4 lg:mx-10 my-3 lg:my-5 text-white rounded-2xl border transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/40 border-white/20 shadow-2xl shadow-black/20' 
            : 'bg-white/10 border-white/10 hover:bg-white/15 hover:border-white/20'
        }`}>
          
        
          <div className='flex items-center cursor-pointer font-bold text-xl lg:text-2xl group'>
            <div className="relative mr-3">
              <Lock className="w-7 h-7 lg:w-8 lg:h-8 text-violet-400 group-hover:text-violet-300 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <div className="absolute inset-0 bg-violet-400/20 rounded-full blur-lg group-hover:bg-violet-300/30 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-violet-300 group-hover:via-purple-300 group-hover:to-indigo-300 transition-all duration-300">
              SecureVault
            </span>
          </div>

          
          <div className="hidden md:block">
            <ul className='flex items-center gap-1'>
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  <button
                    onClick={() =>{
 setActiveItem(item.name);
 navigate(getPathFromName(item.name));
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-lg font-medium transition-all duration-300 group ${
                      activeItem === item.name 
                        ? 'bg-violet-600/30 text-violet-300 border border-violet-500/30' 
                        : 'hover:bg-white/10 hover:text-white text-gray-300'
                    }`}
                  >
                    {item.icon && (
                      <item.icon className={`w-4 h-4 transition-all duration-300 ${
                        activeItem === item.name ? 'text-violet-300' : 'text-gray-400 group-hover:text-white'
                      }`} />
                    )}
                    <span className="relative">
                      {item.name}
                      {activeItem === item.name && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full"></div>
                      )}
                    </span>
                  </button>
                </li>
              ))}
              
            
              
              <li className="ml-4">
                <button
                  className="group relative px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
                  onClick={() => setShowSignup(true)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-2">
                    <LogIn className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    Sign Up
                  </div>
                </button>
              </li>
            </ul>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      
      <div className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
        isMobileMenuOpen 
          ? 'backdrop-blur-xl bg-black/50 opacity-100' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`absolute top-24 left-4 right-4 bg-black/80 border border-white/20 rounded-2xl p-6 transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsMobileMenuOpen(false);
                    navigate(getPathFromName(item.name));
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                    activeItem === item.name 
                      ? 'bg-violet-600/30 text-violet-300 border border-violet-500/30' 
                      : 'hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {item.icon && (
                    <item.icon className={`w-5 h-5 ${
                      activeItem === item.name ? 'text-violet-300' : 'text-gray-400'
                    }`} />
                  )}
                  {item.name}
                </button>
              </li>
            ))}
            
            
           
            <li className="pt-4 border-t border-white/10">
              <button
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
                onClick={() => setShowSignup(true)}
              >
                <LogIn className="w-5 h-5" />
                Sign Up
              </button>
              
            </li>
          </ul>
        </div>
      </div>

      
      <div className="h-20 lg:h-24"></div>

      
      


          

    </>
  );
};

export default Navbar;