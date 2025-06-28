

import React, { useState } from "react";
import { Login } from "./Login";

export const Signup = ({ open, onClose , switchToLogin  }) => {
    
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70 backdrop-blur-sm">
      <div className="bg-neutral-900 rounded-2xl shadow-lg w-[90%] max-w-md p-8 text-white relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-red-400"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-neutral-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-neutral-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-neutral-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg font-medium"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <span className="text-purple-400 hover:underline cursor-pointer" onClick={switchToLogin}>
            Login
          </span>
          
        </p>
      </div>
    </div>
  );
};
