import React, { useRef, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { X } from "lucide-react";
import axios from "axios";
import CryptoJS from "crypto-js";

const inputStyle =
  "bg-black/30 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 w-full text-white placeholder-gray-300";

export const Create = ({ open, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const UrlRef = useRef();
  const UsernameRef = useRef();
  const PasswordRef = useRef();

  const masterPassword = import.meta.env.VITE_MASTER_PASS

  const encryptPassword = (plainText, masterPassword) => {
    return CryptoJS.AES.encrypt(plainText, masterPassword).toString();
  };

  

  const saveCredentials = async() => {
    const url = UrlRef.current.value;
    const userName = UsernameRef.current.value;
    const encryptedPass = encryptPassword(PasswordRef.current.value,masterPassword)
    
    try{
      await axios.post("http://localhost:3000/create",{
      url,
      userName,
      password : encryptedPass
    },{
      headers : {
        token : localStorage.getItem("token")
      }
    })
    }catch(error){
      console.error("Error saving credential:", error);
    alert("Failed to save credentials.");
    }
    
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm">
      <div className="fixed flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 px-4 rounded-2xl w-80 h-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <X size={20} color="white" />
        </button>
        <div className=" p-2 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-white text-2xl font-semibold mb-6 text-center">
            Store Credentials
          </h2>

          <form className="flex flex-col gap-4">
            <input
              ref={UrlRef}
              type="text"
              placeholder="Enter Website URL"
              className={inputStyle}
            />
            <input
              ref={UsernameRef}
              type="text"
              placeholder="Enter Username"
              className={inputStyle}
            />

            <div className="relative">
              <input
                ref={PasswordRef}
                type={isOpen ? "text" : "password"}
                placeholder="Enter Password"
                className={inputStyle}
              />

              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <Eye size={20} color="white" />
                ) : (
                  <EyeClosed size={20} color="white" />
                )}
              </div>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                saveCredentials();
                onClose();
              }}
              type="submit"
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition font-medium"
            >
              Save Credentials
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
