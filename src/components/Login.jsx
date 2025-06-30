import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Login = ({ open, onClose , switchToSignup }) => {

const emailRef = useRef()
const passwordRef = useRef()
const navigate = useNavigate()

const login = async(e) =>{
  e.preventDefault()
  const email = emailRef.current.value
  const password = passwordRef.current.value

  try{
  const response = await axios.post("http://localhost:3000/login",{
    email,
    password
  })

  localStorage.setItem("token",response.data.token)
  onClose();
  navigate("/manager")

  }catch(e){
    console.log("there was some error")
          alert("Invalid credentials");

  }

 

}

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-70 backdrop-blur-sm">
      <div className="bg-neutral-900 rounded-2xl shadow-lg w-[90%] max-w-md p-8 text-white relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-red-400"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl font-semibold mb-6 text-center">Log In</h2>

        <form className="flex flex-col gap-4">
          <input
          ref={emailRef}
            type="email"
            placeholder="Email"
            className="bg-neutral-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
          ref={passwordRef}
            type="password"
            placeholder="Password"
            className="bg-neutral-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            onClick={login}
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg font-medium"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <span className="text-purple-400 hover:underline cursor-pointer" onClick={switchToSignup}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};
