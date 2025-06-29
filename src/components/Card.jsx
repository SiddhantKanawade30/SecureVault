import React, { useState } from 'react';
import { Eye, EyeClosed , Copy } from 'lucide-react';

const Card = ({ website, username, password }) => {
  const [showPassword, setShowPassword] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="bg-neutral-900 p-5 rounded-xl shadow hover:shadow-purple-600/20 transition border border-neutral-800 m-2">
      <h2 className="text-lg font-semibold mb-4 text-purple-400">{website}</h2>

      {/* Username Row */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-gray-400 text-sm">Username: </span>
          <span className="text-white">{username}</span>
        </div>
        <button
          onClick={() => copyToClipboard(username)}
          className="p-1 rounded hover:bg-white/10 transition"
        >
          <Copy size={16} className="text-gray-300" />
        </button>
      </div>

      {/* Password Row */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-gray-400 text-sm">Password: </span>
          <span className="text-white">
            {showPassword ? password : '*'.repeat(password.length)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Toggle visibility */}
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="p-1 rounded hover:bg-white/10 transition"
          >
            {showPassword ? (
              <Eye size={16} className="text-gray-300" />
            ) : (
              
              <EyeClosed  size={16} className="text-gray-300" />
            )}
          </button>

          {/* Copy password */}
          <button
            onClick={() => copyToClipboard(password)}
            className="p-1 rounded hover:bg-white/10 transition"
          >
            <Copy size={16} className="text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
