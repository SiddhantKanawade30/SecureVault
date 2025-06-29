import { X } from "lucide-react";

export const Logout = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-neutral-900 text-white rounded-2xl shadow-lg p-6    w-[90%] max-w-sm relative">
        
        {/* Close Icon */}
        <button
          className="absolute top-3 right-3 text-gray-400 transition cursor-pointer "
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4 text-center">
          Are you sure you want to log out?
        </h2>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => {
              // handle real logout logic here
              console.log("User logged out");
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
