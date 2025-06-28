import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
 

const inputStyle =
  "bg-black/30 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 w-full text-white placeholder-gray-300";

export const Create = () => {

const [isOpen, setIsOpen] = useState(false);  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-black px-4">
      <div className="bg-neutral-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">
          Store Credentials
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Website URL"
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="Enter Username"
            className={inputStyle}
          />

          <div className="relative">

          <input
            type= {isOpen ? "text" : "password"}
            placeholder="Enter Password"
            className={inputStyle}
          />

          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Eye size={20} color="white" /> : <EyeClosed size={20} color="white" />}
          </div>

            </div>
         

          

          <button
            type="submit"
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition font-medium"
          >
            Save Credentials
          </button>
        </form>
      </div>
    </div>
  );
};
