import React, { useRef, useState } from "react";
import { Eye, EyeClosed } from "lucide-react"; 
import axios from "axios";

export const Signup = ({ open, onClose, switchToLogin }) => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const signup = async () => {
    const userName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await axios.post(`${backendUrl}/signup`, {
        userName,
        email,
        password,
      });
      
    } catch (error) {
      console.error("Signup error:", error);
      
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70 backdrop-blur-sm">
      <div className="bg-neutral-900 rounded-2xl shadow-lg w-[90%] max-w-md p-8 text-white relative">
        
        <button
          className="absolute top-4 right-4 text-white hover:text-red-400"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>

        <form className="flex flex-col gap-4" onSubmit={e => {
          e.preventDefault();
          signup();
          switchToLogin();
        }}>
          <input
            ref={fullNameRef}
            type="text"
            placeholder="Full Name"
            className="bg-neutral-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="bg-neutral-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="relative">
            <input
              ref={passwordRef}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-neutral-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 w-full pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg font-medium"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <span
            className="text-purple-400 hover:underline cursor-pointer"
            onClick={switchToLogin}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};
