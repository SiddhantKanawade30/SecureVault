import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";



export const Logout = ({ open, onClose }) => {
  const navigate = useNavigate()
  const logoutFn = () =>{
    localStorage.removeItem("token")
    navigate("/")
  }
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-neutral-900 text-white rounded-2xl shadow-lg p-6    w-[90%] max-w-sm relative">
        
        
        <button
          className="absolute top-3 right-3 text-gray-400 transition cursor-pointer "
          onClick={onClose}
        >
          <X size={20} />
        </button>

       
        <h2 className="text-xl font-semibold mb-4 text-center">
          Are you sure you want to log out?
        </h2>

        
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => {
              logoutFn()
              
              onClose();
            }}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
