import React from 'react';
import { ShieldOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white px-6">
      <div className="text-6xl mb-6 text-red-500">
        <ShieldOff size={64} className="animate-pulse" />
      </div>
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        404 - Page Not Found
      </h1>
      <p className="text-gray-400 text-lg mb-6 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or was moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl text-white font-semibold hover:scale-105 transition-transform duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Error;
